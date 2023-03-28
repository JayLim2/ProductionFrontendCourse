import path from 'path'
import type webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type BuildEnv, type BuildPaths } from './config/build/types/config'

export default (env: BuildEnv): webpack.Configuration => {
  const paths: BuildPaths = {
    buildDir: path.resolve(__dirname, 'build'),
    entrypoint: path.resolve(__dirname, 'src', 'index.tsx'),
    htmlEntrypoint: path.resolve(__dirname, 'public', 'index.html'),
    srcDirectory: path.resolve(__dirname, 'src')
  }

  const mode = env.mode || 'development';
  const port = env.port || 3000;
  const apiBaseUrl = env.apiBaseUrl || 'http://localhost:8000';

  return buildWebpackConfig({
    mode,
    port,
    paths,
    isDev: mode === 'development',
    apiBaseUrl,
    project: 'frontend'
  })
}
