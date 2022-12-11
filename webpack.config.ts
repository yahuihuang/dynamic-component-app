import { Configuration, container } from 'webpack';
const deps = require('./package.json').dependencies;
// const { shareAll } = require('@angular-architects/module-federation/webpack');

export const webpackConfig: Configuration = {
  output: {
    publicPath: (process.env['publicpath'] == undefined) ? "signature2/" : process.env['publicpath'],
    uniqueName: 'signature2',
  },
  experiments: {
    topLevelAwait: true,
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new container.ModuleFederationPlugin({
      name: 'signature2',
      library: { type: 'var', name: 'signature2', },
      filename: 'remoteSignature2.js',
      exposes: {
        SignatureModule2: './src/app/signature/signature.module.ts'
      },
      // ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
      shared: {
        '@angular/core': {
          eager: true,
          singleton: true,
          strictVersion: false,
          requiredVersion: 'auto'
        },
        '@angular/common': {
          eager: true,
          singleton: true,
          strictVersion: false,
          requiredVersion: 'auto'
        },
        '@angular/router': {
          eager: true,
          singleton: true,
          strictVersion: false,
          requiredVersion: 'auto'
        }
      }
    })
  ]
};

export default webpackConfig;
