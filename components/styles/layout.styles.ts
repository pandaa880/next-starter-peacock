import styled from "@emotion/styled";

export const StyledMain = styled.main`
  min-height: calc(100vh - 350px);
  margin-bottom: 2em;

  .welcome-text {
    font-size: 2.5rem;
  }

  .description {
    font-size: 1.2em;
  }
`;

export const PostContent = styled.section`
  max-width: var(--max-width);
  margin: 0 auto;

  ul,
  ol {
    padding-left: 1em;
    margin-bottom: 1em;
  }

  img {
    margin-bottom: 1em;
    display: block;
  }
  ul ul,
  ol ol {
    margin-bottom: 0;
  }
  li {
    margin-bottom: 1em;
  }
`;


export const LandingPageTitle = styled.h1`
  font-size: 2.5em;
`

export const StyledDescription = styled.p`
  font-size: 1.2em;
`
