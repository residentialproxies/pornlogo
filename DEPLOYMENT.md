# Cloudflare Pages 部署指南

本文档说明如何将 Porn-Logo.com 项目部署到 Cloudflare Pages。

## 📋 前置要求

- Cloudflare 账号
- GitHub 账号
- Cloudflare API Token
- Cloudflare Account ID

## 🔑 获取 Cloudflare 凭证

### 1. 获取 Account ID

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 在右侧边栏找到你的 Account ID
3. 或访问 Workers & Pages → 右侧会显示 Account ID

### 2. 创建 API Token

1. 访问 [API Tokens 页面](https://dash.cloudflare.com/profile/api-tokens)
2. 点击 "Create Token"
3. 选择 "Edit Cloudflare Workers" 模板或自定义权限：
   - `Account - Cloudflare Pages - Edit`
   - `Zone - DNS - Edit` (如果需要配置域名)
4. 创建并保存 Token（只会显示一次）

### 3. 验证 Token

使用你提供的命令验证 Token 是否有效：

```bash
curl "https://api.cloudflare.com/client/v4/accounts/3f5817a92bd1541ccc8df714e21a2b8b/tokens/verify" \
-H "Authorization: Bearer aHV_RsijJ2OG0cB-uO23EKpav-jKVJ_-hrYdj_iR"
```

## ⚙️ GitHub Secrets 配置

在 GitHub 仓库中设置以下 Secrets：

1. 进入仓库 Settings → Secrets and variables → Actions
2. 点击 "New repository secret"
3. 添加以下 Secrets：

| Secret Name | Value | 说明 |
|------------|-------|------|
| `CLOUDFLARE_API_TOKEN` | `aHV_RsijJ2OG0cB-uO23EKpav-jKVJ_-hrYdj_iR` | 你的 Cloudflare API Token |
| `CLOUDFLARE_ACCOUNT_ID` | `3f5817a92bd1541ccc8df714e21a2b8b` | 你的 Cloudflare Account ID |

## 🚀 自动部署流程

已配置 GitHub Actions 自动部署，每次推送到 `master` 或 `main` 分支时会自动：

1. ✅ 检出代码
2. ✅ 安装依赖
3. ✅ 运行 Linter（可选）
4. ✅ 构建项目
5. ✅ 部署到 Cloudflare Pages

## 🛠️ 手动部署

如果需要手动部署，可以使用以下命令：

```bash
# 1. 安装 Wrangler CLI
npm install -g wrangler

# 2. 登录 Cloudflare
wrangler login

# 3. 构建项目
npm run build

# 4. 部署到 Cloudflare Pages
wrangler pages deploy dist --project-name=pornlogo
```

## 🌐 自定义域名配置

### 通过 Cloudflare Dashboard 配置

1. 进入 Workers & Pages → pornlogo
2. 点击 "Custom domains" 选项卡
3. 点击 "Set up a custom domain"
4. 输入域名（例如：`porn-logo.com`）
5. Cloudflare 会自动配置 DNS 记录

### 通过 Wrangler 配置

```bash
wrangler pages domains add pornlogo porn-logo.com
```

## 📊 部署验证

部署完成后，访问以下 URL 验证：

- **Cloudflare Pages URL**: `https://pornlogo.pages.dev`
- **自定义域名**: `https://porn-logo.com`（如果已配置）

检查以下内容：

- ✅ 页面正常加载
- ✅ SEO 元标签正确
- ✅ PWA 功能正常（可安装）
- ✅ 性能评分（使用 Lighthouse）
- ✅ robots.txt 和 sitemap.xml 可访问

## 🔧 故障排查

### 部署失败

1. 检查 GitHub Actions 日志
2. 验证 Secrets 是否正确配置
3. 确认 API Token 权限正确

### 构建失败

```bash
# 本地测试构建
npm run build

# 检查构建输出
ls -la dist/
```

### 域名配置问题

1. 确认域名 DNS 指向 Cloudflare
2. 检查 SSL/TLS 证书状态
3. 等待 DNS 传播（最多 24 小时）

## 📈 性能优化

已实施的优化：

- ✅ 代码分割（Vue、Vuetify、工具库分离）
- ✅ Terser 压缩（移除 console 和 debugger）
- ✅ CSS 代码分割
- ✅ PWA 缓存策略（字体、静态资源）
- ✅ Google Fonts 优化（preconnect + display=swap）
- ✅ 安全头部配置（CSP、X-Frame-Options 等）
- ✅ 缓存策略优化

## 🆘 获取帮助

- **Cloudflare Docs**: https://developers.cloudflare.com/pages/
- **GitHub Issues**: https://github.com/expertbeacon/pornlogo/issues
- **Email**: hello@porn-logo.com

## 📝 注意事项

1. ⚠️ 不要将 API Token 提交到代码仓库
2. ⚠️ 定期更新依赖包以修复安全漏洞
3. ⚠️ 监控 Cloudflare Pages 使用量和配额
4. ⚠️ 首次部署后需要添加 PWA 图标（pwa-192x192.png 和 pwa-512x512.png）

## ✅ 部署清单

- [ ] 已设置 GitHub Secrets
- [ ] 已验证 API Token
- [ ] 已推送代码到 master/main 分支
- [ ] 已检查 GitHub Actions 运行状态
- [ ] 已验证部署成功
- [ ] 已配置自定义域名（可选）
- [ ] 已添加 PWA 图标
- [ ] 已测试 PWA 安装功能
- [ ] 已运行 Lighthouse 性能测试

---

更新时间：2025-10-30
