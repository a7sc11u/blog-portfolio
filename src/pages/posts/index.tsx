import { useLink } from 'hoofd/preact'
import SEO from '../../components/Seo'
import VdomOptimizations, {
  // @ts-ignore
  documentProps as vdomDocumentProps,
} from './vdom-compilers/index.mdx'
import ControlledInputs, {
  // @ts-ignore
  documentProps as inputsDocumentProps,
} from './controlled-inputs/index.mdx'

import { MDXArticle } from '../../components/Article'
import { mdxComponents } from '../../components/MdxComponents'

const preStylesheet =
  'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/ir-black.min.css'

export default [
  {
    ...inputsDocumentProps,
    Component: () => {
      return (
        <MDXArticle>
          <SEO
            title={inputsDocumentProps.title}
            description={inputsDocumentProps.description}
          />
          <ControlledInputs components={mdxComponents} />
        </MDXArticle>
      )
    },
    path: '/blog' + inputsDocumentProps.path,
  },
  {
    ...vdomDocumentProps,
    Component: () => {
      return (
        <MDXArticle>
          <SEO
            title={vdomDocumentProps.title}
            description={vdomDocumentProps.description}
          />
          <VdomOptimizations components={mdxComponents} />
        </MDXArticle>
      )
    },
    path: '/blog' + vdomDocumentProps.path,
  },
]
