# 基于 html-entry 的微前端实践

## 快速开始

```
yarn install
yarn packages:install
yarn packages:start
```

## 功能特性

- [x] 以子应用 HTML 为入口，通过 import-html-entry 解析执行子应用代码；
- [x] 实现js沙箱 proxySandbox，隔离子应用全局属性冲突；
- [x] 通过 postcss 给所有样式选择器添加 namesapce 前缀，实现样式隔离；

## 功能特性实现原理

### 1. 以子应用 HTML 作为微前端入口

### 2. 实现 js 沙箱隔离全局对象属性

### 3. 给所有样式选择器添加 namespace 前缀



