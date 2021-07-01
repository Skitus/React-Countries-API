import './App.css';
import React, {useState} from 'react';
import MainPage from "./components/MainPage";
import styled, {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme, GlobalStyles} from "./components/themes";

const StyledApp = styled.div`
    color: ${(props) => props.theme.fontColor};
`


const App = () => {

    const [theme, setTheme] = useState("dark");

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };


    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <div>
                <GlobalStyles />
                <StyledApp>
                    <MainPage themeToggler = {themeToggler}/>
                </StyledApp>
            </div>
        </ThemeProvider>
    );
}

export default App;