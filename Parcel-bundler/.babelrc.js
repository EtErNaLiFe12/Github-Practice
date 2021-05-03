module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    ['@babel/plugin-transform-runtime']
  ]
}

// Babel을 통해 javascript는 ES5의 문법으로 변경이되어 브라우져에서 동작 함