import { createGlobalStyle } from 'styled-components';

interface ThemeColor {
  theme: {
    colors: {
      contrastText: string;
      mainBg: string;
    }
  }
}

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;

    -webkit-font-smoothing: antialiased;

    font-family: 'Lato', sans-serif;
    color: ${({ theme }: ThemeColor) => theme.colors.contrastText};
    background-color: ${({ theme }: ThemeColor) => theme.colors.mainBg}
  }

  html, body {
    min-height: 100vh;
  }

  button {
    cursor: pointer;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
