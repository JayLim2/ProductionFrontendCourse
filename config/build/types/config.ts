export type BuildMode = 'production' | 'development'

export interface BuildPaths {
  buildDir: string
  entrypoint: string
  htmlEntrypoint: string
  srcDirectory: string
}

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  isDev: boolean
  port: number
  apiBaseUrl: string
  project: 'frontend' | 'storybook' | 'jest'
}

export interface BuildEnv {
  mode: BuildMode
  port: number
  apiBaseUrl: string
}
