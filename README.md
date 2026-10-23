# 站点部署仓库（Cloudflare Pages）

本仓库用于跑通「Cloudflare Pages + 自有域名」免费部署流程。

## 目录结构
- `index.html` —— 站点入口（单文件，替换内容即可上线你的真实页面）
- `README.md` —— 本说明
- `.gitignore` —— 忽略无关文件

## 本地预览
- 直接双击 `index.html`
- 或：`python -m http.server 8000` → 打开 http://localhost:8000

## 部署流程（你本人操作）

### 1. 注册 GitHub
- 打开 https://github.com 注册账号。
- 新建仓库（New repository），名称如 `my-site`，选 Public，不勾 README（保持空仓库）。

### 2. 推送到 GitHub
在本地（本目录）执行，把 `<用户名>` 和 `<仓库名>` 换成你自己的：

```bash
git remote add origin https://github.com/<用户名>/<仓库名>.git
git branch -M main
git push -u origin main
```

### 3. 注册并配置 Cloudflare Pages
- 打开 https://www.cloudflare.com 注册账号。
- 控制台 → **Workers 和 Pages** → **创建** → **Pages** → **连接到 Git**。
- 授权 GitHub，选择刚推的仓库。
- 构建设置：框架预设选「无（无框架）」，构建命令留空，发布目录填 `.`（或 `./`）。
- 点击「保存并部署」，等待几十秒，获得 `xxx.pages.dev` 临时域名。

### 4. 购买并绑定自定义域名（免备案）
- 在阿里云 / 腾讯云 / NameSilo 购买域名（约 50–80 元/年），**不要选大陆服务器，走 Cloudflare 海外 CDN 即无需 ICP 备案**。
- 回到 Cloudflare → 你的 Pages 项目 → **自定义域** → 添加你的域名。
- 按提示把域名的 **NS 记录** 改为 Cloudflare 提供的两组地址（在域名注册商后台操作）。
- 等待 NS 生效（几分钟到 48 小时），Cloudflare 自动签发 SSL 证书。
- 在 **SSL/TLS** 中将模式设为 `Full`，并开启「始终使用 HTTPS」。

### 5. 后续更新
每次修改 `index.html` 后：
```bash
git add .
git commit -m "update"
git push
```
Cloudflare 会自动重新部署。

## 说明
- 该路线**不需要 ICP 备案**（站点不经大陆服务器）。
- Cloudflare Pages 免费额度：无限带宽、500 次构建/月、允许商用。
- 免费顶级域名（.tk 等）有收回风险，不建议用于长期项目。
