module.exports = (api) => {
  // This caches the Babel config
  api.cache.using(() => process.env.NODE_ENV)
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          targets: ['node 12'],
        },
      ],
      '@babel/preset-react',
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-export-namespace-from',
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@': './src',
          },
        },
      ],
    ],
    env: {
      development: {
        plugins: ['react-refresh/babel'],
      },
      production: {
        only: ['src'],
        plugins: [
          // 'transform-react-remove-prop-types',
          // '@babel/plugin-transform-react-inline-elements',
          // '@babel/plugin-transform-react-constant-elements',
        ],
      },
    },
    // Applies the react-refresh Babel plugin on non-production modes only
    // ...(!api.env('production') && { plugins: ['react-refresh/babel'] }),
  }
}
