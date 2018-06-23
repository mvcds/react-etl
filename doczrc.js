import { css } from 'docz-plugin-css'

export default {
  title: 'React ETL',
  description: 'Made for the VanHack Hackaton',
  plugins: [
    css({
      preprocessor: 'stylus',
      cssmodules: true
    })
  ],
  modifyBundlerConfig: (config) => {
    config.resolve.extensions.push('.css')
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    })

    return config
  }
}
