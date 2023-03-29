import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import buildCssLoader from './loaders/buildCssLoader';
import ReactRefreshTypeScript from 'react-refresh-typescript';

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
    exclude: /node_modules/,
    loader: 'ts-loader',
    options: {
      getCustomTransformers: () => ({
        before: [isDev && ReactRefreshTypeScript()].filter(Boolean)
      }),
      transpileOnly: isDev
    }
  };

  const styleLoader = buildCssLoader(isDev);

  return [
    fileLoader,
    svgLoader,
    tsLoader,
    styleLoader
  ]
}
