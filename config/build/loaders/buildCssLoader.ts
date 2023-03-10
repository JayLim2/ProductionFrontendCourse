import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const buildCssLoader = (isDev: boolean) => {
  const primaryStyleLoader = isDev
    ? 'style-loader'
    : MiniCssExtractPlugin.loader

  return {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      primaryStyleLoader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (filePath: string) => filePath.includes('.module.'),
            localIdentName: isDev
              ? '[path][name]__[local]'
              : '[hash:base64:8]'
          }
        }
      },
      // Compiles Sass to CSS
      'sass-loader'
    ]
  };
};

export default buildCssLoader;
