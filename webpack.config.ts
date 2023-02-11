import path from "path";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";

export default (env: BuildEnv) => {

    const paths: BuildPaths = {
        buildDir: path.resolve(__dirname, "build"),
        entrypoint: path.resolve(__dirname, "src", "index.tsx"),
        htmlEntrypoint: path.resolve(__dirname, "public", "index.html"),
        srcDirectory: path.resolve(__dirname, "src")
    };

    const mode = env.mode || "development";
    const port = env.port || 3000;

    return buildWebpackConfig({
        mode, port, paths,
        isDev: mode === "development",
    });
};
