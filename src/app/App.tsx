import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import "app/styles/index.scss";
import {useTheme} from "app/providers/ThemeProvider/lib/Theme/useTheme";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {AppRouter} from "app/providers/router";
import {NavigationBar} from "widgets/NavigationBar";

const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle Theme</button>

            <NavigationBar />

            <AppRouter />
        </div>
    );
};

export default App;