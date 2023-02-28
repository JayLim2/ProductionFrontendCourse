import React from 'react';
import "app/styles/index.scss";
import {useTheme} from "app/providers/ThemeProvider/lib/Theme/useTheme";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {NavigationBar} from "widgets/NavigationBar";
import {Sidebar} from "widgets/Sidebar";

const App = () => {

    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <NavigationBar/>
            <div className="content-page">
                <Sidebar />
                <div className="page-wrapper">
                    <AppRouter/>
                </div>
            </div>
        </div>
    );
};

export default App;