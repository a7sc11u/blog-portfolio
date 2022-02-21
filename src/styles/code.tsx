import { createGlobalStyles } from 'goober/global'

export const CodeStyles = createGlobalStyles`
  
    pre code.hljs {
    display: block;
    overflow: hidden;
    overflow-x: scroll;
    white-space: pre-wrap;
    word-break: no-break;
    padding: ${(p) => p.theme.space[3]};
    font-family: ${(p) => p.theme.fonts.mono};
    font-size: 14px; 
    ${(p) => p.theme.media.md} {
        font-size: 15px; 
    }
  }
  code.hljs {
    padding: 3px 5px;
  }
  .hljs {
    background: #060606;
    color: #FEFEFE;
  }
  .hljs-comment,
  .hljs-meta,
  .hljs-quote {
    color: #7c7c7c;
  }
  .hljs-keyword,
  .hljs-name,
  .hljs-selector-tag,
  .hljs-tag {
    color: #5ee8ff;
  }
  .hljs-attribute,
  .hljs-selector-id {
    color: #ffffb6;
  }
  .hljs-addition,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-string {
    color: #6effb0;
  }
  .hljs-subst {
    color: #daefa3;
  }
  .hljs-link,
  .hljs-regexp {
    color: #e9c062;
  }
  .hljs-doctag,
  .hljs-section,
  .hljs-title,
  .hljs-type {
    color: #ffffb6;
  }
  .hljs-bullet,
  .hljs-literal,
  .hljs-symbol,
  .hljs-template-variable,
  .hljs-variable {
    color: #c6c5fe;
  }
  .hljs-deletion,
  .hljs-number {
    color: #ff73fd;
  }
  .hljs-emphasis {
    font-style: italic;
  }
  .hljs-strong {
    font-weight: 700;
  }
`
