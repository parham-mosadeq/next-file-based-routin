import styled from 'styled-components';

export const HeaderComponent = styled.nav`
  display: flex;
  max-width: 100vw;
  justify-content: space-between;
  align-items: center;

  width: 90vw;
  margin: 1.4rem auto;
  a {
    color: skyblue;
    text-decoration: none;
    text-transform: capitalize;
    letter-spacing: 1.2px;
  }

  h1:hover,
  a:hover {
    cursor: pointer;
  }

  ul {
    display: flex;
    gap: 1rem;
  }

  li {
    list-style-type: none;
  }
`;
