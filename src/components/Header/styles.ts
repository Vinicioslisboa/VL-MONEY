import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 10rem;

  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: #FFF;
    display: flex;
    align-items: center;
  }

  button {
    font-size: 1rem;
    color: #FFF;
    height: 3rem;
    padding: 0 2rem;
    background-color: var(--light-blue);
    border: 0;
    border-radius: 0.25rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .logo {
    align-items: center;
    color: #FFF;
    display: flex;

    img {
      padding-right: 1rem;
    }
  }
`;