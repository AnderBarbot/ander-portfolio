'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const lightThemes = [
  'cupcake', 'bumblebee', 'emerald', 'retro', 'cyberpunk', 'valentine', 'garden',
  'pastel', 'fantasy', 'autumn', 'lemonade', 'winter', 'nord', 'caramellatte',
  // 'corporate', 'lofi', 'wireframe', 'cmyk', 'silk', 'acid', "light'"
];

const darkThemes = [
  'dark', 'forest', 'black', 'luxury', 'dracula',
  'halloween', 'business', 'night', 'coffee',
  'dim', 'sunset', 'abyss', 'aqua', 'synthwave',
];

const defaultLight = 'light';
const defaultDark = 'dark';

export default function ThemeSwitcherDropdown() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = darkThemes.includes(theme ?? '');
  const currentThemes = isDark ? darkThemes : lightThemes;
  const oppositeDefault = isDark ? defaultLight : defaultDark;
  const oppositeLabel = isDark ? 'Light' : 'Dark';

  return (
    <div className="dropdown dropdown-end">
      {/* Trigger button */}
      <button
        type="button"
        tabIndex={0}
        className="btn btn-sm btn-ghost px-1.5 dropdown-toggle"
      >
        {isDark ? (
          //sun
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,
            0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,
            1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,
            .7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,
            2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,
            1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,
            1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />

          </svg>
        ) : (
          //moon
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,
              .25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,
              5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        )}
      </button>


      {/* Dropdown content */}
      <div
        tabIndex={0}
        className="dropdown-content z-[1] mt-2 w-55 bg-base-200 border border-base-content/20 shadow-lg p-2 rounded-box"
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
                {/* Theme name on the left */}
                <div title ="text" className="font-semibold">{t}</div>

                {/* Color swatches on the right */}
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
