import type webpack from 'webpack'
import { type BuildOptions } from './types/config'

export function buildResolvers (options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.srcDirectory, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  }
}
