import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  backgroundColor: "#0b121a",
  textColor: "#F5F5F5",
  infoIconColor: "#2D2F34",
  iconColor: "#162536", //кнопка смены темы
  accentColor1: "#673ae0", //кнопка при наведении
  accentColor2: "#d18800", // watch now в фильме
  shadowColor: "rgba(0,0,0,0.2)",
  commentBackColor: "#131b26",
  textSizeTitle: "25px",
  textSizeTitle900: "22px",
  textSizeTitle700: "22px",
  textSizeTitle500: "22px",

  textSizeTextL: "22px",
  textSizeTextL900: "20px",
  textSizeTextL700: "20px",
  textSizeTextL500: "20px",

  textSizeTextM: "16px",
  textSizeTextM900: "14px",
  textSizeTextM700: "14px",
  textSizeTextM500: "14px",

  textSizeTextS: "12px",
  textSizeTextS900: "10px",
  textSizeTextS700: "10px",
  textSizeTextS500: "10px",

  borderRadius: "15px",
};

export const lightTheme = {
  backgroundColor: "#c7b1fa",
  textColor: "black",
  infoIconColor: "#FAFAFA",
  iconColor: "#ded2fa",
  accentColor1: "#673ae0",
  accentColor2: "#d18800",
  shadowColor: "rgba(0,0,0,0.2)",
  commentBackColor: "#b69df5",
  textSizeTitle: "25px",
  textSizeTitle900: "22px",
  textSizeTitle700: "22px",
  textSizeTitle500: "22px",

  textSizeTextL: "22px",
  textSizeTextL900: "20px",
  textSizeTextL700: "20px",
  textSizeTextL500: "20px",

  textSizeTextM: "16px",
  textSizeTextM900: "14px",
  textSizeTextM700: "14px",
  textSizeTextM500: "14px",

  textSizeTextS: "12px",
  textSizeTextS900: "10px",
  textSizeTextS700: "10px",
  textSizeTextS500: "10px",

  borderRadius: "15px",
};

export const GlobalStyle = createGlobalStyle`
  a{
    font-family: 'Roboto';
    text-decoration: none;
    color: ${(props) => props.theme.textColor};
  }
  body{
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.backgroundColor};
    transition: 0.1s;
    color: ${(props) => props.theme.textColor};
  }
`;
