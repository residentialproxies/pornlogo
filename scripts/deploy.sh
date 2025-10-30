#!/bin/bash

# Cloudflare Pages 快速部署脚本
# 使用方法: ./scripts/deploy.sh

set -e

echo "🚀 开始部署到 Cloudflare Pages..."
echo ""

# 检查环境变量
if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
    echo "❌ 错误: CLOUDFLARE_API_TOKEN 环境变量未设置"
    echo "请先设置: export CLOUDFLARE_API_TOKEN=your_token_here"
    exit 1
fi

if [ -z "$CLOUDFLARE_ACCOUNT_ID" ]; then
    echo "❌ 错误: CLOUDFLARE_ACCOUNT_ID 环境变量未设置"
    echo "请先设置: export CLOUDFLARE_ACCOUNT_ID=your_account_id_here"
    exit 1
fi

echo "✅ 环境变量检查通过"
echo ""

# 安装依赖
echo "📦 安装依赖..."
npm ci
echo ""

# 运行 linter (可选)
echo "🔍 运行代码检查..."
npm run lint --if-present || true
echo ""

# 构建项目
echo "🔨 构建项目..."
npm run build
echo ""

# 检查构建输出
if [ ! -d "dist" ]; then
    echo "❌ 错误: 构建失败，dist 目录不存在"
    exit 1
fi

echo "✅ 构建成功"
echo ""

# 检查 wrangler 是否安装
if ! command -v wrangler &> /dev/null; then
    echo "📥 安装 Wrangler CLI..."
    npm install -g wrangler
fi

echo "🌐 部署到 Cloudflare Pages..."
wrangler pages deploy dist --project-name=pornlogo

echo ""
echo "🎉 部署完成！"
echo "📍 访问: https://pornlogo.pages.dev"
echo ""
