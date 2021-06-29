## Шаги настройки проекта

### Настройка eslint

```shell
npx create-next-app --typescript
npm install eslint --save-dev
npx eslint --init
```

- √ How would you like to use ESLint? · style
- √ What type of modules does your project use? · esm
- √ Which framework does your project use? · react
- √ Does your project use TypeScript? · Yes
- √ Where does your code run? · browser
- √ How would you like to define a style for your project? · guide
- √ Which style guide do you want to follow? · airbnb
- √ What format do you want your config file to be in? · JSON
- √ Would you like to install them now with npm? · Yes

### Настройка prettier

```shell
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

Создать файл `.prettierrc` в корне проекта
```json
{
  "useTabs": false,
  "tabSize": 2,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "parser":"typescript"
}
```

Обновить файл `.eslintrc.json`
```json
{
  "extends": ["airbnb", "prettier", "eslint:recommended"],
  "plugins": ["prettier"],
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "prettier/prettier": ["error"]
  }
}
```

### Настройка Husky

```shell
npm i -g mrm mrm-task-lint-staged
npx mrm lint-staged
```

Обновить файл `package.json`
```json
{
  "lint-staged": {
    "pages/**/*.{js,jsx,ts,tsx,json}": "eslint --cache --fix"
  }
}
```

### Настройка SASS

```shell
npm install sass
```

Создать файл `next.config.js` в корне проекта
```js
const path = require('path');

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};
```
 
Переименовать global.css на global.scss 

### Настройка Bootstrap

В дальнейшем обновить react-bootstrap до stable
```shell
npm i bootstrap react-bootstrap@v2.0.0-beta.0
```

Добавить в global.scss
```scss
@import 'variables';
@import '~bootstrap/scss/bootstrap';
```

Создать файл `styles/_variables.scss`
```scss
$white:    #fff;
$gray-100: #f8f9fa;
$gray-200: #e9ecef;
$gray-300: #dee2e6;
$gray-400: #ced4da;
$gray-500: #adb5bd;
$gray-600: #6c757d;
$gray-700: #495057;
$gray-800: #343a40;
$gray-900: #212529;
$black:    #000;

$blue:    #0d6efd;
$indigo:  #6610f2;
$purple:  #6f42c1;
$pink:    #d63384;
$red:     #dc3545;
$orange:  #fd7e14;
$yellow:  #ffc107;
$green:   #198754;
$teal:    #20c997;
$cyan:    #0dcaf0;

$primary:       $blue;
$secondary:     $gray-600;
$success:       $green;
$info:          $cyan;
$warning:       $yellow;
$danger:        $red;
$light:         $gray-100;
$dark:          $gray-900;
```