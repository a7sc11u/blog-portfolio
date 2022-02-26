import { styled } from 'goober'

export const StyledArticle = styled('article')`
  max-width: ${(p) => p.theme.space.prose};
`

export const MDXArticle = styled(StyledArticle)`
  > h1 {
    font-size: ${(p) => p.theme.fontSizes[7]};
    margin-top: ${(p) => p.theme.space[7]};
    margin-bottom: ${(p) => p.theme.space[7]};
    ${(p) => p.theme.media.md} {
      margin-top: ${(p) => p.theme.space[7]};
      margin-bottom: ${(p) => p.theme.space[7]};
    }
  }

  > h2 {
    font-size: ${(p) => p.theme.fontSizes[6]};
    margin-top: ${(p) => p.theme.space[6]};
    margin-bottom: ${(p) => p.theme.space[3]};
    ${(p) => p.theme.media.md} {
      margin-top: ${(p) => p.theme.space[7]};
      margin-bottom: ${(p) => p.theme.space[3]};
    }
  }

  > h3 {
    font-size: ${(p) => p.theme.fontSizes[5]};
    margin-top: ${(p) => p.theme.space[5]};
    margin-bottom: ${(p) => p.theme.space[3]};
    ${(p) => p.theme.media.md} {
      margin-top: ${(p) => p.theme.space[6]};
      margin-bottom: ${(p) => p.theme.space[3]};
    }
  }

  > h4 {
    font-size: ${(p) => p.theme.fontSizes[3]};
    margin-top: ${(p) => p.theme.space[4]};
    margin-bottom: ${(p) => p.theme.space[1]};
    ${(p) => p.theme.media.md} {
      margin-top: ${(p) => p.theme.space[5]};
      margin-bottom: ${(p) => p.theme.space[1]};
    }
  }

  > h2 + h3 {
    margin-top: ${(p) => p.theme.space[3]};
    margin-bottom: ${(p) => p.theme.space[3]};
    ${(p) => p.theme.media.md} {
      margin-top: ${(p) => p.theme.space[4]};
      margin-bottom: ${(p) => p.theme.space[3]};
    }
  }

  > h2 + h4 {
    margin-top: ${(p) => p.theme.space[2]};
    margin-bottom: ${(p) => p.theme.space[1]};
    ${(p) => p.theme.media.md} {
      margin-top: ${(p) => p.theme.space[3]};
      margin-bottom: ${(p) => p.theme.space[1]};
    }
  }

  > p,
  > ul,
  > ol {
    margin-top: 0;
    margin-bottom: ${(p) => p.theme.space[4]};
    ${(p) => p.theme.media.md} {
      margin-top: 0;
      margin-bottom: ${(p) => p.theme.space[4]};
    }
  }

  > div,
  > pre,
  > figure,
  > img,
  > blockquote {
    margin-top: ${(p) => p.theme.space[5]};
    margin-bottom: ${(p) => p.theme.space[5]};
    ${(p) => p.theme.media.md} {
      margin-top: ${(p) => p.theme.space[6]};
      margin-bottom: ${(p) => p.theme.space[6]};
    }
  }

  & > :first-child {
    margin-top: 0 !important;
  }
  ,
  & > :last-child {
    margin-bottom: 0 !important;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }

  code {
    color: ${(p) => p.theme.colors.hiContrast};
    padding: 2px;
    font-weight: 700;

    &::before {
      content: '\`';
    }

    &::after {
      content: '\`';
    }
  }

  pre > code {
    font-weight: 400;
    color: inherit;
    &::before,
    &::after {
      content: none;
    }
  }

  blockquote {
    font-weight: 400;
    font-style: italic;
    color: ${(p) => p.theme.colors.hiContrast};
    border-left: 1px solid ${(p) => p.theme.colors.accent};
    padding: ${(p) => p.theme.space[2]} ${(p) => p.theme.space[5]};
    quotes: '\\201C''\\201D''\\2018''\\2019';
  }

  blockquote p:first-of-type::before {
    content: open-quote;
  }
  blockquote p:last-of-type::after {
    content: close-quote;
  }
`

//   "> ol, > ul": {
//     listStyle: "list",
//     listStylePosition: "inside",
//   },

//   "> h5": {
//     marginTop: "$4",
//     marginBottom: "$1",
//   },

//   "& p > code, & li > code": {
//     margin: "$0 $semi",
//   },

//   "> ul > li, > ol > li": {
//     marginTop: "$0",
//     marginBottom: "$1",
//     "@sm": {
//       marginTop: "$0",
//       marginBottom: "$1",
//     },
//   },

//   "> table": {
//     marginTop: "$4",
//     marginBottom: "$5",
//     "@sm": {
//       marginTop: "$4",
//       marginBottom: "$5",
//     },
//   },
