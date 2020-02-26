module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "commonjs": true
  },
  "extends": ["plugin:vue/recommended", "airbnb-base"],
  "plugins": ["vue", "html"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "settings": {
    "import/resolver": {
      alias: {
        map: [
          ['~', './src'],
          ['components', './src/components'],
          ['pages', './src/pages'],
          ['assets', './src/assets'],
          ['styles', './src/assets/styles'],
          ['api', './src/api'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json', '.vue']
      }
    },
  },
  "rules": {
    "no-undef": "off",
    "semi": "off",
    "comma-dangle": "off",
    "global-require": "off",
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "vue/html-closing-bracket-newline": "off",
    "no-underscore-dangle": "off"
  }
}
