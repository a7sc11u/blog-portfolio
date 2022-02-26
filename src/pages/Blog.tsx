import { styled } from 'goober'
import { StyledArticle } from '../components/Article'
import SEO from '../components/Seo'
import { Link, Prelude, Title } from '../components/Text'
import posts from './posts'

export default () => (
  <>
    <SEO title="Blog" description="Posts about my work and thoughts." />

    <StyledArticle>
      <h1>Blog</h1>
      <p>
        My thoughts in a semi-raw form, a lot of these posts contain what goes
        around in my mind throughout a day.
      </p>

      {posts.map((post) => (
        <article>
          <h2 href={post.path}>{post.title}</h2>
          <p>{post.description}</p>
        </article>
      ))}
    </StyledArticle>
  </>
)
