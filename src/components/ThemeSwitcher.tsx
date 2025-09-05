'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const lightThemes = [
  'light', 'cupcake', 'bumblebee', 'emerald', 'corporate',
  'retro', 'cyberpunk', 'valentine', 'garden', 'lofi',
  'pastel', 'fantasy', 'wireframe', 'cmyk', 'autumn', 'acid',
  'lemonade', 'winter', 'nord', 'caramellatte', 'silk'
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
      <div
        tabIndex={0}
        role="button"
        className="btn group btn-sm gap-1.5 px-1.5 btn-ghost"
      >
        <svg
          className="size-6 fill-current"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_229_156)">
            <path
              d="M12 2C17.522 2 22 5.978 22 10.889C21.9992 12.3622 21.4136 13.7748 20.3717 14.8165C19.3299 15.8581 17.9172 16.4435 16.444 16.444H14.478C13.556 16.444 12.811 17.189 12.811 18.111C12.811 18.533 12.978 18.922 13.233 19.211C13.5 19.511 13.667 19.9 13.667 20.333C13.667 21.256 12.9 22 12 22C6.478 22 2 17.522 2 12C2 6.478 6.478 2 12 2ZM7.5 12C7.89782 12 8.27936 11.842 8.56066 11.5607C8.84196 11.2794 9 10.8978 9 10.5C9 10.1022 8.84196 9.72064 8.56066 9.43934C8.27936 9.15804 7.89782 9 7.5 9C7.10218 9 6.72064 9.15804 6.43934 9.43934C6.15804 9.72064 6 10.1022 6 10.5C6 10.8978 6.15804 11.2794 6.43934 11.5607C6.72064 11.842 7.10218 12 7.5 12ZM16.5 12C16.8978 12 17.2794 11.842 17.5607 11.5607C17.842 11.2794 18 10.8978 18 10.5C18 10.1022 17.842 9.72064 17.5607 9.43934C17.2794 9.15804 16.8978 9 16.5 9C16.1022 9 15.7206 9.15804 15.4393 9.43934C15.158 9.72064 15 10.1022 15 10.5C15 10.8978 15.158 11.2794 15.4393 11.5607C15.7206 11.842 16.1022 12 16.5 12ZM12 9C12.3978 9 12.7794 8.84196 13.0607 8.56066C13.342 8.27936 13.5 7.89782 13.5 7.5C13.5 7.10218 13.342 6.72064 13.0607 6.43934C12.7794 6.15804 12.3978 6 12 6C11.6022 6 11.2206 6.15804 10.9393 6.43934C10.658 6.72064 10.5 7.10218 10.5 7.5C10.5 7.89782 10.658 8.27936 10.9393 8.56066C11.2206 8.84196 11.6022 9 12 9Z"

            />
          </g>
          <defs>
            <clipPath id="clip0_229_156">
              <rect className="size-6" fill="none" />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="12px"
          height="12px"
          className="mt-px hidden size-2 fill-current opacity-60 sm:inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>

      {/* Dropdown content */}
      <div
        tabIndex={0}
        className="dropdown-content z-[1] mt-2 w-50 bg-base-200 border border-base-content shadow-lg p-2 rounded-box"
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
          <div className="grid grid-cols-2 gap-2 max-h-[calc(100vh-10rem)] overflow-y-auto p-1">
            {currentThemes.map((t) => (
              <div
                key={t}
                onClick={() => setTheme(t)}
                className={`cursor-pointer rounded-box border text-xs text-center capitalize p-1 transition-all duration-200 ${theme === t ? 'ring-3 ring-primary' : ''
                  }`}
              >
                <div data-theme={t} className="rounded-box">
                  <div className="font-semibold">{t}</div>
                  <div className="mt-1 h-5 rounded bg-base-200"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
