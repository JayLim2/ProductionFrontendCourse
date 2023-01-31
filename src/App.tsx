import React, {Suspense} from 'react';
import "./index.scss";
import {Link, Route, Routes} from "react-router-dom";
import MainPageLazy from "./pages/MainPage/MainPage.lazy";
import AboutPageLazy from "./pages/AboutPage/AboutPage.lazy";

const App = () => {
    return (
        <div className="app">
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