import styled from 'styled-components';

export const GenreComponent = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  width: 100%;

  div {
    margin: 2rem auto;
    h1 {
      text-transform: capitalize;
      letter-spacing: 1.3px;
    }
  }
`;

export const TagsComponent = styled.div`
  a {
    text-decoration: none;
    color: black;
    text-transform: capitalize;
    letter-spacing: 1.2px;
  }

  li {
    margin: 2rem;
    list-style: none;
  }
`;
