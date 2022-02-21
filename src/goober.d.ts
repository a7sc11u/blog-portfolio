// goober.d.ts

import 'goober'

declare module 'goober' {
  export interface DefaultTheme {
    colors: {
      transparent: string
      current: string
      inherit: string
      body: string
      bg: string
      white: string
      black: string
      accent: string
      hiContrast: string
      loContrast: string
      uloContrast: string
    }
    space: {
      0: string
      px: string
      semi: string
      1: string
      2: string
      3: string
      4: string
      5: string
      6: string
      7: string
      8: string
      9: string
      10: string
      11: string
      sidenav: string
      prose: string
      layout: string
      gutter: string
      main_margin: string
    }
    fontSizes: {
      0: string
      1: string
      2: string
      3: string
      4: string
      5: string
      6: string
      7: string
      8: string
    }
    fontWeights: {
      400: string
      700: string
    }
    fonts: {
      sans: string
      condenced: string
      serif: string
      mono: string
    }
    media: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }
  }
}
