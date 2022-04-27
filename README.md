# 🛠 itools

[![maven](https://img.shields.io/badge/build-rollup.js-red?style=flat&logo=rollup.js&color=ec4840)](https://www.rollupjs.com/)
[![maven](https://img.shields.io/badge/language-typescript-red?style=flat&logo=typescript&color=blue)](https://www.tslang.cn/index.html)
[![maven](https://img.shields.io/badge/test-jest-red?style=flat&logo=jest&color=15c213)](https://www.jestjs.cn/)

## 简介

常用的 JavaScript 工具函数库，使用 TypeScript + Rollup.js 开发

-   使用 `TypeScript` 开发，并提供完善且友好的类型声明，拥有强劲的类型检查与语法提示
-   使用 `Jest` 进行单元测试
-   每个函数都提供了示例，可以通过示例查看其参数与返回值

## API

### 数据类型相关

| 方法    | 功能            |
| ------- | --------------- |
| getType | 获取数据类型    |
| isNull  | 判断是否为 null |

### URL 相关

| 方法             | 功能                       |
| ---------------- | -------------------------- |
| stringfyQuery    | 将对象拼接成查询字符串     |
| parseQueryString | 将查询字符串转换为对象     |
| getQueryByKey    | 获取查询字符串的某个属性值 |

正在完善...
