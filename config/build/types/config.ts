export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    buildDir: string,
    entrypoint: string,
    htmlEntrypoint: string,
}

export interface BuildOptions {
    mode: BuildMode,
    paths: BuildPaths,
    isDev: boolean,
}