# 🚀 快速开始指南

本指南帮助你快速运行和部署 Porn-Logo.com 项目。

## 📋 目录

1. [本地开发](#本地开发)
2. [构建项目](#构建项目)
3. [部署到 Cloudflare Pages](#部署到-cloudflare-pages)
4. [常用命令](#常用命令)

---

## 本地开发

### 1. 克隆项目

```bash
git clone https://github.com/expertbeacon/pornlogo.git
cd pornlogo
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

访问: http://localhost:5173/

---

## 构建项目

### 生产构建

```bash
npm run build
```

构建产物将生成在 `dist/` 目录。

### 预览构建产物

```bash
npm run preview
```

### 清理缓存

```bash
npm run clean
```

---

## 部署到 Cloudflare Pages

### 方法 1: 使用 GitHub Actions (推荐)

**步骤 1**: 配置 GitHub Secrets

1. 进入 GitHub 仓库 Settings → Secrets and variables → Actions
2. 添加以下 Secrets:
   - `CLOUDFLARE_API_TOKEN`: 你的 Cloudflare API Token
   - `CLOUDFLARE_ACCOUNT_ID`: 你的 Cloudflare Account ID

**步骤 2**: 推送代码

```bash
git add .
git commit -m "优化项目并配置 Cloudflare Pages 部署"
git push origin master
```

GitHub Actions 将自动构建和部署！

### 方法 2: 手动部署

**步骤 1**: 设置环境变量

```bash
export CLOUDFLARE_API_TOKEN=your_token_here
export CLOUDFLARE_ACCOUNT_ID=your_account_id_here
```

**步骤 2**: 运行部署脚本

```bash
npm run deploy
```

或手动执行:

```bash
npm run build
npx wrangler pages deploy dist --project-name=pornlogo
```

---

## 常用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 生产构建 |
| `npm run preview` | 预览构建产物 |
| `npm run lint` | 运行代码检查和自动修复 |
| `npm run format` | 格式化代码 |
| `npm run deploy` | 部署到 Cloudflare Pages |
| `npm run clean` | 清理构建缓存 |

---

## 📁 项目结构

```
pornlogo/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD
├── public/
│   ├── robots.txt              # SEO: 搜索引擎爬虫配置
│   ├── sitemap.xml             # SEO: 网站地图
│   └── _headers                # Cloudflare: 安全头部配置
├── scripts/
│   └── deploy.sh               # 快速部署脚本
├── src/
│   ├── assets/                 # 静态资源
│   ├── components/             # Vue 组件
│   ├── router/                 # 路由配置
│   ├── stores/                 # Pinia 状态管理
│   ├── views/                  # 页面视图
│   └── main.js                 # 应用入口
├── .env.example                # 环境变量示例
├── vite.config.js              # Vite 配置（已优化）
├── wrangler.toml               # Cloudflare Pages 配置
├── DEPLOYMENT.md               # 详细部署指南
├── OPTIMIZATION_SUMMARY.md     # 优化总结报告
└── QUICK_START.md              # 本文件
```

---

## 🔑 获取 Cloudflare 凭证

### Account ID

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 右侧边栏可以看到你的 Account ID
3. 或访问 Workers & Pages 页面查看

### API Token

1. 访问 [API Tokens 页面](https://dash.cloudflare.com/profile/api-tokens)
2. 点击 "Create Token"
3. 选择 "Edit Cloudflare Workers" 模板
4. 或自定义权限:
   - Account - Cloudflare Pages - Edit
5. 创建并保存 Token（只显示一次）

### 验证凭证

```bash
curl "https://api.cloudflare.com/client/v4/accounts/YOUR_ACCOUNT_ID/tokens/verify" \
-H "Authorization: Bearer YOUR_API_TOKEN"
```

成功响应示例:
```json
{
  "success": true,
  "errors": [],
  "messages": [],
  "result": {
    "status": "active"
  }
}
```

---

## ⚡ 性能优化亮点

项目已进行全面优化:

- ✅ **代码分割**: Vue、Vuetify、工具库分离打包
- ✅ **PWA 支持**: 离线访问、可安装应用
- ✅ **SEO 优化**: 完整元数据、Open Graph、结构化数据
- ✅ **缓存策略**: 智能缓存静态资源和字体
- ✅ **安全头部**: CSP、X-Frame-Options 等
- ✅ **字体优化**: preconnect + display=swap
- ✅ **自动部署**: GitHub Actions CI/CD

详见 [OPTIMIZATION_SUMMARY.md](./OPTIMIZATION_SUMMARY.md)

---

## 🆘 常见问题

### Q: 构建失败怎么办？

A:
1. 清理缓存: `npm run clean`
2. 重新安装依赖: `rm -rf node_modules && npm install`
3. 检查 Node.js 版本 (推荐 v18+)

### Q: 部署到 Cloudflare Pages 失败？

A:
1. 验证 API Token 是否有效
2. 检查 Account ID 是否正确
3. 确认 GitHub Secrets 已正确设置
4. 查看 GitHub Actions 日志

### Q: 如何自定义域名？

A: 参考 [DEPLOYMENT.md](./DEPLOYMENT.md) 中的"自定义域名配置"章节

### Q: PWA 图标在哪里？

A: 你需要添加以下图标到 `public/` 目录:
- `pwa-192x192.png` (192x192px)
- `pwa-512x512.png` (512x512px)
- `og-image.png` (用于社交媒体分享)

---

## 📚 更多文档

- [DEPLOYMENT.md](./DEPLOYMENT.md) - 详细部署指南
- [OPTIMIZATION_SUMMARY.md](./OPTIMIZATION_SUMMARY.md) - 优化总结
- [README.md](./README.md) - 项目说明
- [Contributing.md](./Contributing.md) - 贡献指南

---

## 🎉 完成！

现在你已经可以:
- ✅ 在本地运行项目
- ✅ 构建生产版本
- ✅ 部署到 Cloudflare Pages

有问题？查看文档或提交 [Issue](https://github.com/expertbeacon/pornlogo/issues)

**祝你使用愉快！** 🚀
