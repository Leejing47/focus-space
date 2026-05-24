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