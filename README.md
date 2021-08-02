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

### Настройка Redux

1. Установить нужные пакеты
```shell
npm install next-redux-wrapper react-redux --save
```
2. Создать папку redux в корне проекта
```shell
project_name/redux
```
3. В папке redux создать файл types.ts с следующим содержимым
```js
// redux/types.ts

export interface IFirstReducer {
  counter: number;
}

export interface IRootState {
  first: IFirstReducer;
}
```
4. В папке redux создать папку reducers с двумя файлами в ней - index.ts и firstReducer.ts
```js
// redux/reducers/firstReducer.ts

import { AnyAction } from 'redux';
import { IFirstReducer } from '../types';

const initialState: IFirstReducer = {
  counter: 0,
};

const firstReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'INCREMENT': {
      return { ...state, counter: state.counter + 1 };
    }
    case 'DECREMENT': {
      return { ...state, counter: state.counter - 1 };
    }
    default:
      return state;
  }
};

export default firstReducer;
```

```js
// redux/reducers/index.ts

import { AnyAction, combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { IRootState } from '../types';
import firstReducer from './firstReducer';

const combineReducer = combineReducers({
  first: firstReducer,
});

export const rootReducer = (state: IRootState | undefined, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducer(state, action);
};

export type RootState = ReturnType<typeof combineReducer>;
```
5. В папке redux создать файла store.ts
```js
// redux/store.ts

import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { createStore } from 'redux';
import { rootReducer } from './reducers';
import { IRootState } from './types';

const makeStore: MakeStore<IRootState | any> = () =>
  createStore(rootReducer);

const wrapper = createWrapper<IRootState | any>(makeStore);

export default wrapper;
```
6. Обернуть myApp с помощью созданного wrapper'a
```js
// pages/app.tsx

import "../styles/globals.css";
import type { AppProps } from "next/app";
import wrapper from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default wrapper.withRedux(MyApp);
```

### Настройка Redux DevTools (опциальньно)
1. Установить расширение для браузера ([Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/))
2. Установить redux-devtools-extension
```shell
npm install --save redux-devtools-extension
```
3. Изменить файл store.ts следующим образом
```js
// redux/store.ts

import { createWrapper, MakeStore } from "next-redux-wrapper";
import { devToolsEnhancer } from "redux-devtools-extension";
import { createStore } from "redux";
import { rootReducer } from "./reducers";
import { IRootState } from "./types";

const devTools: any = process.env.NODE_ENV !== "production" && devToolsEnhancer({});

const makeStore: MakeStore<IRootState | any> = () =>
  createStore(rootReducer, devTools);

const wrapper = createWrapper<IRootState | any>(makeStore);

export default wrapper;
```
