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
