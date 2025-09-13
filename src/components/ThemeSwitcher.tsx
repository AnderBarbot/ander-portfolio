'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { lightThemes, darkThemes, themeIcons, defaultDark, defaultLight } from './Themes'
import { supabase } from '../../supabase'

export default function ThemeSwitcherDropdown() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [defaults, setDefaults] = useState({ dark: defaultDark, light: defaultLight })

  //fetch default themes from supabase, then set theme based on system preference. plenty of fallbacks
  useEffect(() => {
    setMounted(true)
    const fetchDefaults = async () => {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        return
      }
      const { data } = await supabase.from('theme_defaults').select('*').single()
      if (data) {
        setDefaults({
          dark: data.default_dark ?? defaultDark,
          light: data.default_light ?? defaultLight,
        })
        const prefersDark =
          systemTheme === 'dark' ||
          (!systemTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
        setTheme(prefersDark ? data.default_dark ?? defaultDark : data.default_light ?? defaultLight)
      } else {
        const prefersDark =
          systemTheme === 'dark' ||
          (!systemTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)

        setTheme(prefersDark ? defaultDark : defaultLight)
      }
    }
    fetchDefaults()
  }, [systemTheme, setTheme])


  if (!mounted) return null

  const isDark = darkThemes.includes(theme ?? '')
  const currentThemes = isDark ? darkThemes : lightThemes
  const oppositeDefault = isDark ? defaults.light : defaults.dark
  const oppositeLabel = isDark ? 'Light' : 'Dark'

  return (
    <div className="dropdown dropdown-end">
      {/* Trigger button */}
      <button
        type="button"
        tabIndex={0}
        className="btn btn-sm btn-ghost px-1.5 dropdown-toggle"
      >
        {themeIcons[theme ?? ''] ?? (
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
          </svg>
        )}
      </button>

      {/* Dropdown content */}
      <div
        tabIndex={0}
        className="dropdown-content z-[1] mt-2 w-60 bg-base-200 border border-base-content/20 shadow-lg p-2 rounded-box"
      >
        <div className="space-y-2">
          {/* Switch category button */}
          <button
            onClick={() => setTheme(oppositeDefault)}
            className="btn btn-sm w-full btn-outline"
          >
            Switch to {oppositeLabel} Theme
          </button>

          {/* List of themes in current category */}
          <div className="flex flex-col gap-2 max-h-[calc(100vh-10rem)] overflow-y-auto p-1">
            {currentThemes.map((t) => (
              <div
                key={t}
                onClick={() => setTheme(t)}
                data-theme={t}
                title="base color"
                className={`cursor-pointer rounded-box border text-sm text-left capitalize p-2 flex items-center justify-between transition-all duration-200 ${theme === t ? 'ring-3 ring-primary' : ''
                  }`}
              >
                <div title="text" className="font-semibold flex items-center">
                  {themeIcons[t] || <div className="w-4 h-4" />}
                  <span style={{ marginLeft: 2 }}>{t}</span>
                </div>
                <div className="flex gap-1 px-1 py-1 rounded-box">
                  <div title="primary" className="w-2 h-4 rounded bg-primary"></div>
                  <div title="secondary" className="w-2 h-4 rounded bg-secondary"></div>
                  <div title="accent" className="w-2 h-4 rounded bg-accent"></div>
                  <div title="neutral" className="w-2 h-4 rounded bg-neutral"></div>
                  <div title="base-100" className="w-2 h-4 rounded bg-base-100 border"></div>
                  <div title="base-200" className="w-2 h-4 rounded bg-base-200"></div>
                  <div title="base-300" className="w-2 h-4 rounded bg-base-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
