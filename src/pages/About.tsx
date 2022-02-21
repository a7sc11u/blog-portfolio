import { styled } from 'goober'
import { Link, Prelude, SubTitle, Title } from '../components/Text'
import SEO from '../components/Seo'
import { StyledArticle } from '../components/Article'

const Hero = styled('div')`
  background: white;
  width: 100%;
`

export default () => (
  <>
    <SEO
      title="Portfolio"
      description="About my career up to now and my skills."
    />
    <StyledArticle>
      <Hero>
        <Title>Jovi De Croock</Title>
        <SubTitle>Software Engineer</SubTitle>
        <Prelude>
          When growing up I discovered a passion for IT, this grew into me
          working at a hardware store and eventually into finding my passion for{' '}
          programming. This passion turned me to study software engineering,
          find freelancer assignments and eventually my first job.
          <br />
          <br />
          Nowadays I find myself enjoying work on both front-end as well as
          back-end systems. Finding elegant solutions to complex behavior is my{' '}
          favorite challenge. Another thing I find a deep interest in is{' '}
          optimising performance.
          <br />
          <br />A second passion that has grown over the years is open-source, I
          love working in the open and I love collaborating with others to solve
          problems.
        </Prelude>
      </Hero>
    </StyledArticle>
  </>
)
