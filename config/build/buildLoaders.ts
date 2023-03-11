import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import buildCssLoader from './loaders/buildCssLoader';

export const svgLoader = {
  test: /\.svg$/,
  use: ['@svgr/webpack']
};

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const styleLoader = buildCssLoader(isDev);

  return [
    fileLoader,
    svgLoader,
    tsLoader,
    styleLoader
  ]
}
