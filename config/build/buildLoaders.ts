import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const {isDev} = options;

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const primaryStyleLoader = isDev
        ? "style-loader"
        : MiniCssExtractPlugin.loader;

    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            primaryStyleLoader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (filePath: string) => filePath.includes(".module."),
                        localIdentName: isDev
                            ? "[path][name]__[local]"
                            : "[hash:base64:8]"
                    }
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    return [
        tsLoader, styleLoader
    ];
}