import { StyledArticle } from '../components/Article'
import SEO from '../components/Seo'

const NotFoundPage = () => (
  <>
    <SEO title="Not Found" description="Page not found" />
    <StyledArticle>
      <h1>Not Found</h1>
      <p>
        Ah you were sniffing around to see if I had hidden any easter eggs, did
        you now?
      </p>
    </StyledArticle>
  </>
)

export default NotFoundPage
