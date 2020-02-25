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
          ['~', './src']
        ],
        extensions: ['.ts', '.js', '.jsx', '.json', '.vue']
      }
    },
  },
  "rules": {
    "no-undef": "off",
    "semi": "off",
    "comma-dangle": "off"
  }
}
