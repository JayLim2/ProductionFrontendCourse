import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import MainPageLazy from "./pages/MainPage/MainPage.lazy";
import AboutPageLazy from "./pages/AboutPage/AboutPage.lazy";
import "./styles/index.scss";
import {useTheme} from "./theme/useTheme";

const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Toggle Theme</button>

            <Link to={"/"}>Main Page</Link>
            <Link to={"/about"}>About Page</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/"} element={<MainPageLazy/>}/>
                    <Route path={"/about"} element={<AboutPageLazy/>}/>
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;