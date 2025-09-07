import React, { JSX } from 'react';
import { FiCoffee, FiSun, FiMoon, FiStar, FiHeart, FiDroplet, FiZap, FiCloud, FiGlobe } from 'react-icons/fi';
import { MdOutlineBusinessCenter, MdOutlineNightlight, MdOutlineForest, MdTv, MdOutlineAutorenew } from 'react-icons/md';
import { IoMdRocket } from 'react-icons/io';
import { GiCupcake, GiBee, GiEmerald, GiRoundStar, GiDragonHead, GiWaterDrop, GiOctopus, GiPumpkin, GiBlackFlag, GiSunset, GiCoffeeCup, GiAlienBug, GiBat, GiPalette, GiFlowerPot, GiFairyWand } from 'react-icons/gi';

export const lightThemes = [
  'cupcake',
  'bumblebee',
  'emerald',
  'retro',
  'valentine',
  'garden',
  'pastel',
  'fantasy',
  'autumn',
  'lemonade',
  'winter',
  'nord',
  'caramellatte',
];

export const darkThemes = [
  'dark',
  'forest',
  'black',
  'luxury',
  'dracula',
  'halloween',
  'business',
  'night',
  'coffee',
  'dim',
  'sunset',
  'abyss',
  'aqua',
  'synthwave',
];

export const defaultLight = 'fantasy';
export const defaultDark = 'forest';

export const themeIcons: Record<string, JSX.Element> = {
  // Light themes
  cupcake: <GiCupcake className="w-6 h-6 fill-primary" />,
  bumblebee: <GiBee className="w-6 h-6 fill-primary" />,
  emerald: <GiEmerald className="w-6 h-6 fill-primary" />,
  retro: <MdTv className="w-6 h-6 fill-primary" />,
  valentine: <FiHeart className="w-6 h-6 fill-primary" />,
  garden: <GiFlowerPot className="w-6 h-6 fill-primary" />, // changed from MdOutlineForest
  pastel: <GiPalette className="w-6 h-6 fill-primary" />, // changed from FiStar
  fantasy: <GiFairyWand className="w-6 h-6 fill-primary" />, // changed from IoMdRocket
  autumn: <GiPumpkin className="w-6 h-6 fill-primary" />,
  lemonade: <FiDroplet className="w-6 h-6 fill-primary" />,
  winter: <FiCloud className="w-6 h-6 fill-primary" />,
  nord: <FiGlobe className="w-6 h-6 fill-primary" />,
  caramellatte: <GiCoffeeCup className="w-6 h-6 fill-primary" />,

  // Dark themes
  dark: <FiMoon className="w-6 h-6 fill-primary" />,
  forest: <MdOutlineForest className="w-6 h-6 fill-primary" />,
  black: <FiMoon className="w-6 h-6 fill-primary" />, // changed from GiBlackFlag
  luxury: <FiStar className="w-6 h-6 fill-primary" />, // changed from GiDragonHead
  dracula: <GiBat className="w-6 h-6 fill-primary" />, // changed from GiRoundStar
  halloween: <GiPumpkin className="w-6 h-6 fill-primary" />,
  business: <MdOutlineBusinessCenter className="w-6 h-6 fill-primary" />,
  night: <MdOutlineNightlight className="w-6 h-6 fill-primary" />,
  coffee: <FiCoffee className="w-6 h-6 fill-primary" />,
  dim: <FiZap className="w-6 h-6 fill-primary" />,
  sunset: <GiSunset className="w-6 h-6 fill-primary" />,
  abyss: <GiOctopus className="w-6 h-6 fill-primary" />,
  aqua: <GiWaterDrop className="w-6 h-6 fill-primary" />,
  synthwave: <GiAlienBug className="w-6 h-6 fill-primary" />, // changed from MdTv
};
