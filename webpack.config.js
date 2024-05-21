const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Frontend Treasure',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/,  // Exclude .module.css files
        use: ['style-loader', 'css-loader'],  // Use regular CSS loader for .css files
      },
      {
        test: /\.module\.css$/i,  // Only match .module.css files
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
                    modules: {
                        localIdentName: '[local]', // Keep original class names
                    },
                },
            },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  externals: {
    react: {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'React',
        root: 'React',
    },
  }
};