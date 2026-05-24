# FocusSpace (极简专注主页) 🚀

一个专为提升专注力设计的浏览器起始页工具。本项目采用现代前端工程化工作流开发，完美融合了原生 JavaScript 核心逻辑与 Webpack 打包工具。

**[点击这里在线预览项目](https://Leejing47.github.io/focus-space)**

---

## 核心功能

- **实时动态时钟**：基于原生 JS 定时器，提供秒级响应的极简数字时钟。
- **今日核心目标**：支持设定每日专注任务，利用 `LocalStorage` 实现浏览器刷新后的数据持久化存储。
- **每日灵感（AJAX）**：使用 `Fetch API` 异步请求第三方公开接口（Advice Slip API），动态加载英文励志名言。
- **文字视觉动效**：模块化 CSS 设计，配合优雅的文字发光与响应式 Flexbox 布局。

## 技术栈与工具

- **核心语言**：HTML5 / CSS3 / JavaScript (ES6+)
- **数据交互**：AJAX (Fetch API / Async & Await)
- **本地存储**：Web Storage (LocalStorage)
- **构建工具**：Webpack 5 (包含 `css-loader`, `style-loader`, `HtmlWebpackPlugin`)
- **版本控制**：Git & GitHub
- **自动化部署**：gh-pages

## 本地开发指南

如果你想在本地运行或修改这个项目，请按照以下步骤操作：

### 1. 克隆仓库
```bash
git clone [https://github.com/Leejing47/focus-space.git](https://github.com/Leejing47/focus-space.git)
cd focus-space
```

### 2. 安装项目依赖
项目使用 Webpack 5 及其相关 Loader/Plugin 进行构建，运行以下命令自动读取 `package.json` 并安装所需依赖：
```bash
npm install
```

### 3. 启动本地开发服务器
启动 Webpack Dev Server。该模式下支持**模块热替换（HMR）**，代码修改后浏览器会自动刷新视图：
```bash
npm run start
```
*运行成功后，终端会自动打开或提示本地访问地址：`http://localhost:3000`*

### 4. 生产环境编译打包
当项目开发完成需要发布时，执行此命令。Webpack 会对源码进行压缩、混淆及性能优化，并输出静态资源至 `dist/` 目录：
```bash
npm run build
```

### 5. 自动化构建与部署
项目集成了 `gh-pages` 自动化部署流。执行以下命令将触发 `predeploy` 钩子自动打包，并一键将 `dist/` 目录下的静态资源推送到 GitHub Pages 分支上线：
```bash
npm run deploy
```