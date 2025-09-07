import React, { JSX } from 'react';

export const lightThemes = [
  'cupcake', 'bumblebee', 'emerald', 'retro', 'valentine', 'garden',
  'pastel', 'fantasy', 'autumn', 'lemonade', 'winter', 'nord', 'caramellatte',
];

export const darkThemes = [
  'dark', 'forest', 'black', 'luxury', 'dracula',
  'halloween', 'business', 'night', 'coffee',
  'dim', 'sunset', 'abyss', 'aqua', 'synthwave',
];

export const defaultLight = 'fantasy';
export const defaultDark = 'forest';

export const themeIcons: Record<string, JSX.Element> = {
  cupcake: (
    <svg className="w-6 h-6 fill-primary" viewBox="0 0 24 24">
      <path d="M12 2C10 2 8 3 8 5s4 2 4 2 4 0 4-2-2-3-4-3zm0 5c-4 0-8 3-8 7h16c0-4-4-7-8-7zm-6 9c0 2 2 4 6 4s6-2 6-4H6z" />
    </svg>
  ),
  bumblebee: (
    <svg className="w-6 h-6 fill-primary" viewBox="0 0 24 24">
      <path d="M4 12a8 8 0 1116 0 8 8 0 01-16 0zm8-6v12m6-6H6" />
    </svg>
  ),
  emerald: (
    <svg className="w-6 h-6 fill-primary" viewBox="0 0 24 24">
      <path d="M12 2L2 7l10 15 10-15z" />
    </svg>
  ),
  retro: (
    <svg className="w-6 h-6 fill-primary" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
  valentine: (
    <svg className="w-6 h-6 fill-primary" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  ),
  garden: (
    <svg className="w-6 h-6 fill-primary" viewBox="0 0 24 24">
      <path d="M12 2C8 6 8 10 12 14s4 6 0 8 4-2 4-6-4-4-4-8z" />
    </svg>
  ),
  pastel: (
    <svg className="w-6 h-6 fill-primary" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
  fantasy: (
    <svg className="w-6 h-6 fill-primary" viewBox="0 0 24 24">
      <path d="M12 2l4 8H8l4-8zm0 20l-4-8h8l-4 8z" />
    </svg>
  ),
  autumn: (
    <svg className="w-6 h-6 fill-primary" viewBox="0 0 24 24">
      <path d="M12 2C6 8 6 16 12 22c6-6 6-14 0-20z" />
    </svg>
  ),
  lemonade: (
    <svg className="w-6 h-6 fill-primary" viewBox="0 0 24 24">
      <path d="M17 3H7v2H4v2h16V5h-3zM5 8v13h14V8H5zm4 4h6v6H9v-6z" />
    </svg>
  ),
  winter: (
    <svg className="w-6 h-6 fill-primary" viewBox="0 0 24 24">
      <path d="m10 20-1.25-2.5L6 18"/><path d="M10 4 8.75 6.5 6 6"/><path d="m14 20 1.25-2.5L18 18"/><path d="m14 4 1.25 2.5L18 6"/><path d="m17 21-3-6h-4"/><path d="m17 3-3 6 1.5 3"/><path d="M2 12h6.5L10 9"/><path d="m20 10-1.5 2 1.5 2"/><path d="M22 12h-6.5L14 15"/><path d="m4 10 1.5 2L4 14"/><path d="m7 21 3-6-1.5-3"/><path d="m7 3 3 6h4"/>
    </svg>
  ),
  nord: (
    <svg className="w-6 h-6 fill-primary" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
  caramellatte: (
    <svg className="w-6 h-6 fill-primary" viewBox="0 0 24 24">
      <path d="M6 2h12v4H6V2zm0 6h12v14H6V8z" />
    </svg>
  ),

  // Dark themes
  dark: (
    <svg className="w-6 h-6 fill-primary" viewBox="0 0 24 24">
      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,
      .25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" />
    </svg>
  ),
  forest: (
    <svg className="w-6 h-6 fill-primary" viewBox="0 0 24 24">
      <path d="M12 2l4 6h-3v5h-2V8H8l4-6zM4 20h4v-4H4v4zm12 0h4v-4h-4v4z" />
    </svg>
  ),
  black: (
    <svg className="w-6 h-6 fill-primary" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
  luxury: (
    <svg className="w-6 h-6 fill-primary" viewBox="0 0 24 24">
      <path d="M12 2l3 7h7l-5.5 4.5L19 22l-7-5-7 5 2.5-8.5L2 9h7z" />
    </svg>
  ),
  dracula: (
    <svg className="w-6 h-6 fill-primary" viewBox="0 0 24 24">
      <path d="M12 2l4 4H8l4-4zm0 6a6 6 0 100 12 6 6 0 000-12z" />
    </svg>
  ),
  halloween: (
    <svg className="w-6 h-6 fill-primary" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 7 2 12s4.48 10 10 10 10-5 10-10S17.52 2 12 2zm3 14l-3-2-3 2 1-3-3-2h3l1-3 1 3h3l-3 2 1 3z" />
    </svg>
  ),
  business: (
    <svg className="w-6 h-6 fill-primary" viewBox="0 0 24 24">
      <path d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
      <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
    </svg>
  ),
  night: (
    <svg className="w-6 h-6 fill-primary" viewBox="0 0 24 24">
      <path d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 14a5 5 0 110-10 5 5 0 010 10z" />
    </svg>
  ),
  coffee: (
    <svg className="w-6 h-6 fill-primary" viewBox="0 0 24 24">
      <path d="M3 3h18v4H3V3zm2 6h14v10a2 2 0 01-2 2H7a2 2 0 01-2-2V9z" />
    </svg>
  ),
  dim: (
    <svg className="w-6 h-6 fill-primary" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5" />
    </svg>
  ),
  sunset: (
    <svg className="w-6 h-6 fill-primary" viewBox="0 0 24 24">
      <path d="M3 17h18M4 21h16M12 2v6M7 9l5 5 5-5" />
    </svg>
  ),
  abyss: (
    <svg className="w-6 h-6 fill-primary" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
  aqua: (
    <svg className="w-6 h-6 fill-primary" viewBox="0 0 24 24">
      <path d="M12 2C6 10 6 18 12 22c6-4 6-12 0-20z" />
    </svg>
  ),
  synthwave: (
    <svg className="w-6 h-6 fill-primary" viewBox="0 0 24 24">
      <path d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z"/>
    </svg>
  ),
};