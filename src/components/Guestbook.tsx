'use client'

import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import { themeIcons } from './Themes'

type Entry = {
  message: string
  name: string
  date: string
  theme: string
}

const Guestbook: React.FC = () => {
  const { theme } = useTheme()

  const [editing, setEditing] = useState(false)
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [entries, setEntries] = useState<Entry[]>([])

  const handleSend = () => {
    if (!message.trim() || !name.trim()) return

    const newEntry: Entry = {
      message: message.trim(),
      name: name.trim(),
      date: new Date().toISOString().split('T')[0],
      theme: theme || 'forest',
    }

    setEntries([newEntry, ...entries])
    setMessage('')
    setName('')
    setEditing(false)
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
  {entries.map((entry, idx) => (
    <div
      key={idx}
      data-theme={entry.theme}
      className="p-4 rounded-md border shadow-sm bg-base-100 relative"
    >
      <div className="flex justify-between items-center mb-1">
        <div className="font-semibold text-lg">{entry.message}</div>
        <div className="text-xs opacity-60">{entry.date}</div>
      </div>
      <div className="text-sm text-gray-500">~ {entry.name}</div>
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
