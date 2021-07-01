import {createGlobalStyle} from "styled-components";

export const lightTheme = {
    body: "white",
    fontColor: "black"
};

export const darkTheme = {
    body: "#24303A",
    fontColor: "white",
    fontColorMenu: "black"
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
  }
`