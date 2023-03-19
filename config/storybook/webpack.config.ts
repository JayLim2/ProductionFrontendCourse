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
    htmlEntrypoint: '',
    entrypoint: '',
    srcDirectory: path.resolve(__dirname, '..', '..', 'src')
  };
  config.resolve.modules.push(paths.srcDirectory);
  config.resolve.extensions.push('.ts', '.tsx');

  const styleLoader = buildCssLoader(true);
  config.module.rules.push(styleLoader);

  config.module.rules = config.module.rules.map((ruleset: RuleSetRule) => {
    // eslint-disable-next-line @typescript-eslint/prefer-includes
    if (/svg/.test(ruleset.test as string)) {
      return {
        ...ruleset,
        exclude: /\.svg$/i
      }
    }
    return ruleset;
  });
  config.module.rules.push(svgLoader);

  config.plugins.push(new webpack.DefinePlugin({
    __IS_DEV__: true
  }))

  return config;
}
