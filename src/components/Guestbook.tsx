'use client'

import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { themeIcons } from './Themes'
import { supabase } from '../../supabase'

type Entry = {
  id: string
  message: string
  name: string
  date: string
  theme: string
  user_id?: string | null
}

const Guestbook: React.FC = () => {
  const { theme } = useTheme()
  const [editing, setEditing] = useState(false)
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [entries, setEntries] = useState<Entry[]>([])
  const [userId, setUserId] = useState<string | null>(null)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editMessage, setEditMessage] = useState('')
  const [editName, setEditName] = useState('')

  // auth
  useEffect(() => {
    const ensureUser = async () => {
      const { data: sessionData } = await supabase.auth.getSession()
      if (!sessionData.session) {
        await supabase.auth.signInAnonymously()
      }
      const { data } = await supabase.auth.getUser()
      setUserId(data.user?.id || null)
    }
    ensureUser()
  }, [])

  // on mount
  useEffect(() => {
    const fetchEntries = async () => {
      const { data, error } = await supabase
        .from('guestbook')
        .select('id, message, name, theme, user_id, created, updated')
        .order('created', { ascending: false })
      if (error) {
        console.error('Fetch failed:', error)
        return
      }
      const mapped: Entry[] = data.map((entry) => ({
        id: entry.id,
        message: entry.message,
        name: entry.name,
        theme: entry.theme || 'forest',
        user_id: entry.user_id,
        date: entry.updated || entry.created,
      }))
      setEntries(mapped)
    }
    fetchEntries()
  }, [])

  const handleSend = async () => {
    if (!message.trim() || !name.trim()) return
    const { data, error } = await supabase
      .from('guestbook')
      .insert([
        {
          name: name.trim(),
          message: message.trim(),
          theme: theme || 'forest',
          user_id: userId,
        },
      ])
      .select()
      .single()
    if (error) {
      console.error('Insert failed:', error)
      return
    }
    setEntries((prev) => [
      {
        id: data.id,
        message: data.message,
        name: data.name,
        theme: data.theme || 'forest',
        user_id: data.user_id,
        date: data.created,
      },
      ...prev,
    ])
    setMessage('')
    setName('')
    setEditing(false)
  }

  const handleUpdate = async (id: string) => {
    if (!editMessage.trim() || !editName.trim()) return
    const { data, error } = await supabase
      .from('guestbook')
      .update({
        message: editMessage.trim(),
        name: editName.trim(),
        updated: new Date().toISOString(),
      })
      .eq('id', id)
      .eq('user_id', userId)
      .select()
      .single()
    if (error) {
      console.error('Update error:', error)
      return
    }
    setEntries((prev) =>
      prev.map((entry) =>
        entry.id === id
          ? {
            ...entry,
            message: data.message,
            name: data.name,
            date: data.updated || entry.date,
          }
          : entry
      )
    )
    setEditingId(null)
  }

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from('guestbook')
      .delete()
      .eq('id', id)
      .eq('user_id', userId)
    if (error) {
      console.error('Delete error:', error)
      return
    }
    setEntries((prev) => prev.filter((entry) => entry.id !== id))
  }

  const getTimeUntilNextPost = (lastDateStr: string) => {
    const lastDate = new Date(lastDateStr)
    const now = new Date()
    const diffMs = now.getTime() - lastDate.getTime()
    const msInWeek = 7 * 24 * 60 * 60 * 1000
    const timeLeftMs = msInWeek - diffMs

    if (timeLeftMs <= 0) return null

    const days = Math.floor(timeLeftMs / (24 * 60 * 60 * 1000))
    const hours = Math.floor((timeLeftMs % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
    return `${days > 0 ? days + ' day' + (days > 1 ? 's' : '') : ''}${days > 0 && hours > 0 ? ' and ' : ''}${hours > 0 ? hours + ' hour' + (hours > 1 ? 's' : '') : ''}`
  }

  //latest entry
  const userEntry = entries
    .filter(entry => entry.user_id === userId)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]
  const timeLeft = userEntry ? getTimeUntilNextPost(userEntry.date) : null
  const canPost = !userEntry || timeLeft === null


  

  return (
    <section id="guestbook" className="scroll-mt-20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Guestbook</h2>

        {canPost ? (
          <>
            <div className="mb-4">
              <textarea
                rows={3}
                value={editing ? message : ''}
                onFocus={() => setEditing(true)}
                onChange={(e) => {
                  if (e.target.value.length <= 200) {
                    setMessage(e.target.value)
                  }
                }}
                placeholder="Thanks for stopping by. Leave a note!"
                className={
                  'textarea textarea-bordered w-full resize-none transition-opacity' +
                  (editing ? ' opacity-100' : ' opacity-60')
                }
              />
              <div className="text-sm text-right text-gray-500">{message.length}/200</div>
            </div>
            {editing && (
              <>
                <input
                  type="text"
                  placeholder="Your name or signature"
                  value={name}
                  onChange={(e) => {
                    if (e.target.value.length <= 20) {
                      setName(e.target.value)
                    }
                  }}
                  className="input input-bordered w-full mb-2"
                />
                <div className="text-sm text-right text-gray-500">{name.length}/20</div>
                <button
                  onClick={handleSend}
                  className="btn btn-primary w-full"
                  disabled={!message.trim() || !name.trim() || message.length > 200 || name.length > 20}
                >
                  Send
                </button>
              </>
            )}
          </>
        ) : (
          <div className="mb-4 p-4 rounded-md border bg-base-200 text-center text-gray-600">
            You have already left a message. You can post again in {timeLeft}.
          </div>
        )}

        <div className="mt-10 space-y-4">
          {entries.map((entry) => (
            <div
              key={entry.id}
              data-theme={entry.theme}
              className="p-4 rounded-md border shadow-sm bg-base-100 relative"
            >
              <div className="flex justify-between items-start mb-1 space-x-4">
                <div className="flex-1">
                  {editingId === entry.id ? (
                    <>
                      <textarea
                        className="textarea textarea-bordered w-full mb-2"
                        value={editMessage}
                        onChange={(e) => {
                          if (e.target.value.length <= 200) {
                            setEditMessage(e.target.value)
                          }
                        }}
                        rows={3}
                      />
                      <div className="text-sm text-right text-gray-500">{editMessage.length}/200</div>
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        value={editName}
                        onChange={(e) => {
                          if (e.target.value.length <= 20) {
                            setEditName(e.target.value)
                          }
                        }}
                        placeholder="Your name or signature"
                      />
                      <div className="text-sm text-right text-gray-500">{editName.length}/20</div>
                    </>
                  ) : (
                    <>
                      <div className="font-semibold text-lg">{entry.message}</div>
                      <div className="text-sm text-gray-500">~ {entry.name}</div>
                    </>
                  )}
                </div>
                <div className="text-xs opacity-60 whitespace-nowrap">
                  {new Date(entry.date).toLocaleDateString()}
                </div>
              </div>

              {entry.user_id === userId && (
                <div className="mt-2 flex space-x-2">
                  {editingId === entry.id ? (
                    <>
                      <button
                        className="btn btn-sm btn-success"
                        onClick={() => handleUpdate(entry.id)}
                        disabled={!editMessage.trim() || !editName.trim()}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-sm btn-ghost"
                        onClick={() => setEditingId(null)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-sm btn-outline"
                        onClick={() => {
                          setEditingId(entry.id)
                          setEditMessage(entry.message)
                          setEditName(entry.name)
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-error"
                        onClick={() => handleDelete(entry.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              )}

              <div className="absolute bottom-2 right-2 w-5 h-5 text-primary">
                {themeIcons[entry.theme] || null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

}

export default Guestbook
