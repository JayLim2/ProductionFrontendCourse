import {lazy} from "react";

const AboutPageLazy = lazy(() => new Promise((resolve) => {
    // FIXME ONLY FOR LEARNING
    setTimeout(() => {
        // @ts-ignore
        resolve(import("./AboutPage"));
    }, 1000);
}));

export default AboutPageLazy;