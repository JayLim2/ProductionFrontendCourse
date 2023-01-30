import path from "path";
import webpack from "webpack";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPaths} from "./config/build/types/config";

const paths: BuildPaths = {
    buildDir: path.resolve(__dirname, "build"),
    entrypoint: path.resolve(__dirname, "src", "index.ts"),
    htmlEntrypoint: path.resolve(__dirname, "public", "index.html")
};

const mode = "development";

const config: webpack.Configuration = buildWebpackConfig({
    mode, paths,
    isDev: mode === "development"
});

export default config;
