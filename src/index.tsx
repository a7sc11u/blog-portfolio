import { h, render } from 'preact'
import 'highlight-updates/preact'
import { setup } from 'goober'
import { LocationProvider, Router } from 'preact-iso'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'
import posts from './pages/posts'
import NotFound from './pages/404'
import Layout from './components/Layout'
import './styles/fonts.css'

import { GlobalStyles } from './styles/global'
import { useTheme } from './styles/theme'
import { ResetStyles } from './styles/reset'
import { CodeStyles } from './styles/code'

setup(h, undefined, useTheme)

export function App() {
  return (
    <LocationProvider>
      <ResetStyles />
      <GlobalStyles />
      <CodeStyles />
      <Layout>
        <Router>
          <Home path="/" />
          <Blog path="/blog" />
          <About path="/about" />
          {posts.map((post) => (
            <post.Component path={post.path} />
          ))}
          <NotFound default />
        </Router>
      </Layout>
    </LocationProvider>
  )
}

const element = document.getElementById('index')
if (element) render(<App />, element)
