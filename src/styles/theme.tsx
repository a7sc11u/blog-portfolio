import { createContext } from 'preact'
import { useContext } from 'preact/hooks'

export const theme = {
  colors: {
    transparent: 'transparent',
    current: 'currentColor',
    inherit: 'inherit',
    body: '#dddce5',
    white: '#FEFEFE',
    bg: '#111111',
    black: '#080808',
    accent: '#6effb0',
    hiContrast: '#FEFEFE',
    loContrast: '#dddce5',
    uloContrast: '#777e85',
  },
  space: {
    0: '0px',
    px: '1px',
    semi: '2px',
    1: '4px',
    2: '8px',
    3: '16px',
    4: '24px',
    5: '32px',
    6: '48px',
    7: '64px',
    8: '96px',
    9: '128px',
    10: '160px',
    11: '192px',
    sidenav: '15rem',
    prose: '42rem',
    layout: '124rem',
    gutter: '4.20vw',
    main_margin: '4.2vmax',
  },

  fontSizes: {
    0: '14px',
    1: '16px',
    2: '18px',
    3: '20px',
    4: '22px',
    5: '24px',
    6: '32px',
    7: '48px',
  },
  fontWeights: {
    400: '400',
    700: '700',
  },
  fonts: {
    sans: "'IBM Plex Sans', system-ui, sans-serif",
    condenced:
      "'Roboto Condensed', 'IBM Plex Sans Condensed', system-ui, sans-serif",
    serif: "'IBM Plex Serif', serif",
    mono: "'IBM Plex Mono',monospace-ui, monospace",
  },
  media: {
    xs: '@media screen and (min-width: 375px)',
    sm: '@media screen and (min-width: 540px)',
    md: '@media screen and (min-width: 768px)',
    lg: '@media screen and (min-width: 960px)',
    xl: '@media screen and (min-width: 1280px)',
  },
}

export const ThemeContext = createContext(theme)

export const useTheme = () => useContext(ThemeContext)
