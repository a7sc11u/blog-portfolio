import { styled } from 'goober'
import { VNode } from 'preact'

import Footer from './Footer'
import Header from './Header'

const Wrapper = styled('div')`
  flex: 1;
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100%;
  max-width: ${(p) => p.theme.space.layout};
  padding-left: ${(p) => p.theme.space.gutter};
  padding-right: ${(p) => p.theme.space.gutter};
  padding-top: ${(p) => p.theme.space.gutter};
  padding-bottom: ${(p) => p.theme.space.gutter};
  margin-left: auto;
  margin-right: auto;
  ${(p) => p.theme.media.md} {
    padding-top: ${(p) => p.theme.space.main_margin};
    padding-bottom: ${(p) => p.theme.space.main_margin};
    grid-template-columns: ${(p) => p.theme.space.sidenav} 1fr;
  }
  ${(p) => p.theme.media.lg} {
    padding-right: 10vw;
  }

  & > footer {
    grid-column-start: 2;
  }
`

const Main = styled('div')`
  display: flex;
  justify-content: center;
`

export type LayoutProps = {
  children?: VNode
}

const Layout = (props: LayoutProps) => (
  <>
    <Wrapper>
      <Header />
      <Main>{props.children}</Main>
    </Wrapper>
    <Footer />
  </>
)

export default Layout
