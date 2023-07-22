import webpack from 'webpack';
import type { RuleSetRule } from 'webpack';
import { type BuildPaths } from '../build/types/config';
import path from 'path';
import buildCssLoader from '../build/loaders/buildCssLoader';
import { svgLoader } from '../build/buildLoaders';

interface StorybookWebpackConfiguration {
  config: webpack.Configuration
}

export default (props: StorybookWebpackConfiguration): webpack.Configuration => {
  const { config } = props;

  const paths: BuildPaths = {
    buildDir: '',
    buildLocalizationDir: '',
    htmlEntrypoint: '',
    entrypoint: '',
    srcDirectory: path.resolve(__dirname, '..', '..', 'src'),
    localizationDirectory: path.resolve(__dirname, '..', '..', 'public', 'locales')
  };
    // 19.03.23 Fixed bug with resolving absolute paths in Storybook ('Module not found' on CI)
  config.resolve?.modules?.unshift(paths.srcDirectory);
  config.resolve?.extensions?.push('.ts', '.tsx');

  const styleLoader = buildCssLoader(true);
  if (config.module) {
    config.module.rules?.push(styleLoader);
    config.module.rules = config.module.rules?.map<RuleSetRule>(
      (ruleset, index, array) => {
        // eslint-disable-next-line @typescript-eslint/prefer-includes
        if (/svg/.test((ruleset as RuleSetRule).test as string)) {
          return {
            ...(ruleset as RuleSetRule),
            exclude: /\.svg$/i
          }
        }
        return ruleset as RuleSetRule;
      }
    );
    config.module.rules?.push(svgLoader);
  }

  config.plugins?.push(new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify(''),
    __PROJECT__: JSON.stringify('storybook')
  }))

  return config;
}
