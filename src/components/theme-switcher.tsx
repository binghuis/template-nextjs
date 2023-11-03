'use client';

import { Switch } from '@nextui-org/react';
import { MoonIcon } from '@src/icons/moon';
import { SunIcon } from '@src/icons/sun';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
export function ThemeSwitcher() {
  const [isSelected, setIsSelected] = useState(true);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme(isSelected ? 'dark' : 'light');
  }, [isSelected, setTheme]);

  return (
    <Switch
      isSelected={isSelected}
      onValueChange={setIsSelected}
      color="secondary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? <SunIcon className={className} /> : <MoonIcon className={className} />
      }
    />
  );
}
