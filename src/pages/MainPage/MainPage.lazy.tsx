import {lazy} from "react";

const MainPageLazy = lazy(() => new Promise((resolve) => {
    // FIXME ONLY FOR LEARNING
    setTimeout(() => {
        // @ts-ignore
        resolve(import("./MainPage"));
    }, 1000);
}));

export default MainPageLazy;