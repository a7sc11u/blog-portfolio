import { styled } from 'goober'
import { Inline, LinkMono } from './Text'

const Wrapper = styled('footer')`
  flex: 0;
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100%;
  background-color: ${(p) => p.theme.colors.black};
  max-width: ${(p) => p.theme.space.layout};
  padding-left: ${(p) => p.theme.space.gutter};
  padding-right: ${(p) => p.theme.space.gutter};
  padding-top: ${(p) => p.theme.space[3]};
  padding-bottom: ${(p) => p.theme.space[3]};
  margin-left: auto;
  margin-right: auto;
  ${(p) => p.theme.media.md} {
    grid-template-columns: ${(p) => p.theme.space.sidenav} 1fr;
  }
  ${(p) => p.theme.media.lg} {
    padding-right: 10vw;
  }

  & > nav {
    display: flex;
    justify-content: center;
    & > * {
      width: 100%;
      max-width: ${(p) => p.theme.space.prose};
    }
  }
`

const Footer = () => (
  <Wrapper>
    <div></div>
    <nav>
      <Inline>
        <LinkMono target="blank" href="https://www.twitter.com/jovidec">
          Twitter
        </LinkMono>

        <LinkMono target="blank" href="https://www.github.com/jovidecroock">
          Github
        </LinkMono>
        <LinkMono href="mailto:decroockjovi@gmail.com">Contact</LinkMono>
        <LinkMono target="blank" href="https://dev.to/jovidecroock">
          Dev.to
        </LinkMono>
      </Inline>
    </nav>
  </Wrapper>
)

export default Footer
