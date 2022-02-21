import { styled } from 'goober'
import { LinkMono, Stack } from './Text'

const Nav = styled('nav')`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: ${(p) => p.theme.space[5]};
`

const JoviLink = styled('a')`
  font-family: ${(p) => p.theme.fonts.condenced};
  text-decoration: none;
  text-transform: uppercase;
  line-height: 1.2;
  > .name {
    display: block;
    color: ${(p) => p.theme.colors.accent};
    font-size: ${(p) => p.theme.fontSizes[3]};
  }
  > .title {
    display: block;
    font-size: ${(p) => p.theme.fontSizes[0]};
    color: ${(p) => p.theme.colors.uloContrast};
  }
  &:hover,
  &:focus {
    > .name {
      color: ${(p) => p.theme.colors.accent};
    }
    > .title {
      color: ${(p) => p.theme.colors.hiContrast};
    }
  }
`

const NavSection = styled('div')`
  display: grid;
  gap: ${(p) => p.theme.space[1]};
  margin-top: ${(p) => p.theme.space[7]};
  place-items: flex-start;
`

const Header = () => (
  <header>
    <Nav>
      <JoviLink href="/">
        <span className="name">Jovi De Crook</span>
        <span className="title">Software Engineer</span>
      </JoviLink>
      <NavSection>
        <LinkMono href="/">Home</LinkMono>
        <LinkMono href="/blog">Blog</LinkMono>
        <LinkMono href="/blog">About</LinkMono>
        <LinkMono href="mailto:decroockjovi@gmail.com">Contact</LinkMono>
      </NavSection>
      <NavSection>
        <LinkMono target="blank" href="https://www.twitter.com/jovidec">
          Twitter
        </LinkMono>

        <LinkMono target="blank" href="https://www.github.com/jovidecroock">
          Github
        </LinkMono>
        <LinkMono target="blank" href="https://dev.to/jovidecroock">
          Dev.to
        </LinkMono>
      </NavSection>
    </Nav>
  </header>
)

export default Header
