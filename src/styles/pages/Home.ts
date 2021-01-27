import styled from 'styled-components';

  interface DB {
    backgroundImage: string;
    theme: {
      colors: {
        primary: string;
        mainBg: string;
      }
    }
  }

export const Title = styled.h1`
  font-size: 48px;
`;

export const BackgroundImage = styled.div<DB>`
  background-image: url(${({ backgroundImage }: DB) => backgroundImage});
  width: 100%;
  background-size: cover;
  background-position: center;
  flex: 1;

  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: "";
      background-size: cover;
    background-position: center;
      background-image:
        linear-gradient(transparent, ${({ theme }: DB) => theme.colors.mainBg}),
        url(${({ backgroundImage }: DB) => backgroundImage});
      display: block;
      width: 100%;
      height: 210px;

      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;
