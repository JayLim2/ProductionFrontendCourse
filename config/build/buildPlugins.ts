import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { type BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import CopyPlugin from 'copy-webpack-plugin';

export function buildPlugins (options: BuildOptions): webpack.WebpackPluginInstance[] {
  const { paths, isDev, apiBaseUrl, project } = options

  const plugins = [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.htmlEntrypoint
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    // Explanation for JSON.stringify is here:
    // https://webpack.js.org/plugins/define-plugin/
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiBaseUrl),
      __PROJECT__: JSON.stringify(project)
    }),
    new CopyPlugin({
      patterns: [
        {
          from: paths.localizationDirectory,
          to: paths.buildLocalizationDir
        }
      ]
    }),
    new webpack.HotModuleReplacementPlugin()
  ];

  if (isDev) {
    plugins.push(
      new ReactRefreshPlugin({
        overlay: false
      }),
      new BundleAnalyzerPlugin({
        openAnalyzer: false
      })
    );
  }

  return plugins;
}
