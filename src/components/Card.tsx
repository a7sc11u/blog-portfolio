import { styled } from 'goober'

export const CardDimmed = styled('div')`
  border: 1px solid ${(p) => p.theme.colors.uloContrast};
  padding: ${(p) => p.theme.space[4]};
`

export const Card = styled('div')`
  border: 1px solid ${(p) => p.theme.colors.uloContrast};
  padding: ${(p) => p.theme.space[4]};
`
