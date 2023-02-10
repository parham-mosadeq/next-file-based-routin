import styled from 'styled-components';

export const CartComponent = styled.article`
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
    text-transform: capitalize;
    letter-spacing: 1.5px;
    color: gray;
  }

  a {
    text-transform: capitalize;
    color: blue;
    cursor: pointer;
    text-decoration: none;
  }

  main,
  article {
    border: 1px solid silver;
    width: 50%;
    margin: 1.2rem auto;
    padding: 14px;
    h5 {
      font-size: 18px;
      text-align: center;
      margin: 1rem 0;
    }

    p {
      line-height: 1.3rem;
      letter-spacing: 1.3px;
    }

    span {
      text-decoration: underline;
      letter-spacing: 1.4px;
    }
  }
`;
