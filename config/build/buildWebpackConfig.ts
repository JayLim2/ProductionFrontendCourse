import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths} = options;

    const webpackConfig: webpack.Configuration = {
        mode,
        entry: paths.entrypoint,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.buildDir,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
    };

    if (options.isDev) {
        webpackConfig.devtool = "inline-source-map";
        webpackConfig.devServer = buildDevServer(options);
    }

    return webpackConfig;
}