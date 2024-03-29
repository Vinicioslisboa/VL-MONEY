import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --blue: #5429CC;
    --light-blue: #6933FF;
	  --green: #33CC95;
	  --red: #E62E4D;
	  --shapePrincipal: #FFFFFF;
	  --title: #363F5F;
	  --text: #969CB3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (min-width: 1080px) {
      font-size: 93.75%;
    }
    @media (min-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
    opacity: 0.4;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
     width: 100%;
     max-width: 576px;

     background: var(--background);
     border-radius: 0.25rem;
     padding: 3rem;
     position: relative;
  }

  .react-modal-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    background: transparent;
    border: 0;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;