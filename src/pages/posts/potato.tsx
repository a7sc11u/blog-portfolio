import { useLink } from 'hoofd/preact'
import SEO from '../../components/Seo'
import { mdxComponents } from '../../components/MdxComponents'
import ControlledInputs from './controlled-inputs/index.mdx'

import { MDXArticle } from '../../components/Article'

export default () => {
  return (
    <MDXArticle>
      <ControlledInputs components={mdxComponents} />
    </MDXArticle>
  )
}
