import { styled } from 'goober'

export const Title = styled('h1')``

export const SubTitle = styled('h2')``

export const Prelude = styled('p')``

export const Link = styled('a')``

export const LinkMono = styled('a')`
  font-family: ${(p) => p.theme.fonts.mono};
  color: ${(p) => p.theme.colors.uloContrast};
  font-weight: 400;
  font-size: ${(p) => p.theme.fontSizes[0]};
  text-transform: uppercase;
  text-decoration: none;
`

export const DisplayMono = styled('p')`
  font-family: ${(p) => p.theme.fonts.mono};
  color: ${(p) => p.theme.colors.hiContrast};
  font-weight: 700;
  font-size: ${(p) => p.theme.fontSizes[2]};
  text-decoration: none;
`

export const Stack = styled('div')`
  display: grid;
  gap: ${(p) => p.theme.space[3]};
`

export const Inline = styled('div')`
  display: flex;
  gap: ${(p) => p.theme.space[3]};
`
