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

  // Anonymous auth & get user ID
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

  // Fetch entries on mount
  useEffect(() => {
    const fetchEntries = async () => {
      const { data, error } = await supabase
        .from('guestbook')
        .select('id, message, name, theme, user_id, created')
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
        date: entry.created.split('T')[0],
      }))

      setEntries(mapped)
    }

    fetchEntries()
  }, [])

  // Send new message
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
        date: data.created.split('T')[0],
      },
      ...prev,
    ])

    setMessage('')
    setName('')
    setEditing(false)
  }

  // Update existing message
  const handleUpdate = async (id: string) => {
    if (!editMessage.trim()) return

    const { data, error } = await supabase
      .from('guestbook')
      .update({ message: editMessage.trim(), updated: new Date().toISOString() })
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
          ? { ...entry, message: data.message, date: data.updated?.split('T')[0] || entry.date }
          : entry
      )
    )

    setEditingId(null)
  }

  return (
    <section id="guestbook" className="scroll-mt-20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Guestbook</h2>

        <div className="mb-4">
          <textarea
            rows={3}
            value={editing ? message : ''}
            onFocus={() => setEditing(true)}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Thanks for stopping by. Leave a note!"
            className={
              `textarea textarea-bordered w-full resize-none transition-opacity ` +
              (editing ? 'opacity-100' : 'opacity-60')
            }
          />
        </div>

        {editing && (
          <>
            <input
              type="text"
              placeholder="Your name or signature"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full mb-2"
            />
            <button
              onClick={handleSend}
              className="btn btn-primary w-full"
              disabled={!message.trim() || !name.trim()}
            >
              Send
            </button>
          </>
        )}

        <div className="mt-10 space-y-4">
          {entries.map((entry) => (
            <div
              key={entry.id}
              data-theme={entry.theme}
              className="p-4 rounded-md border shadow-sm bg-base-100 relative"
            >
              <div className="flex justify-between items-center mb-1">
                {editingId === entry.id ? (
                  <textarea
                    className="textarea textarea-bordered w-full"
                    value={editMessage}
                    onChange={(e) => setEditMessage(e.target.value)}
                    rows={3}
                  />
                ) : (
                  <div className="font-semibold text-lg">{entry.message}</div>
                )}
                <div className="text-xs opacity-60">{entry.date}</div>
              </div>
              <div className="text-sm text-gray-500">~ {entry.name}</div>

              {entry.user_id === userId && (
                <div className="mt-2 flex space-x-2">
                  {editingId === entry.id ? (
                    <>
                      <button
                        className="btn btn-sm btn-success"
                        onClick={() => handleUpdate(entry.id)}
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
                    <button
                      className="btn btn-sm btn-outline"
                      onClick={() => {
                        setEditingId(entry.id)
                        setEditMessage(entry.message)
                      }}
                    >
                      Edit
                    </button>
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
