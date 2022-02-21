import { createGlobalStyles } from 'goober/global'

export const GlobalStyles = createGlobalStyles`
  html, body {
    font-kerning: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    overflow-x: hidden;
    font-family: ${(p) => p.theme.fonts.sans};
    background-color: ${(p) => p.theme.colors.bg};
    color: ${(p) => p.theme.colors.loContrast};
    line-height: 1.6;
    font-size: ${(p) => p.theme.fontSizes[1]};

    ${(p) => p.theme.media.sm} {
        font-size: ${(p) => p.theme.fontSizes[2]};
    }
    ${(p) => p.theme.media.md} {
        font-size: ${(p) => p.theme.fontSizes[1]};
    }

    ${(p) => p.theme.media.lg} {
        font-size: ${(p) => p.theme.fontSizes[2]};
    }
  }

  h1, h2, h3, h4, h5 {
    color: ${(p) => p.theme.colors.hiContrast};
    font-family: ${(p) => p.theme.fonts.condenced};
  }


  a {
    font-weight: 700;
    color: inherit;
    &:hover,&:focus {
        color: ${(p) => p.theme.colors.accent};
    }
  }

  button {
    border:none;
    background-color: transparent;
    background-color: ${(p) => p.theme.colors.loContrast};
    color: ${(p) => p.theme.colors.black};
    height: ${(p) => p.theme.space[6]};
    padding: ${(p) => p.theme.space[2]} ${(p) => p.theme.space[3]};
    font-family: ${(p) => p.theme.fonts.mono};
    font-size: ${(p) => p.theme.fontSizes[0]};
    text-transform: uppercase;
    &:hover{
        background-color: ${(p) => p.theme.colors.accent};
    }
    &:active{
        transform: translateX(0px) translateY(1px);
    }
}

  input {
    background-color: transparent;
    border: 1px solid ${(p) => p.theme.colors.uloContrast};
    color: ${(p) => p.theme.colors.hiContrast};
    height: ${(p) => p.theme.space[6]};
    padding: ${(p) => p.theme.space[2]} ${(p) => p.theme.space[3]};
  }


  *:focus {
    outline: 1px solid ${(p) => p.theme.colors.hiContrast};
    outline-offset: 2px;
  }


  #index {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
`
