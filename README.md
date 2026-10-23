# 站点部署仓库（Cloudflare Pages）

本仓库用于跑通「Cloudflare Pages + 自有域名」免费部署流程。
Cloudflare Pages 是海外边缘托管平台：永久免费、无限带宽、免备案（不落地大陆服务器），
**国内能打开但速度偏慢**（无大陆节点，流量绕道，约 200–500ms，个别地区/运营商可能不稳）。

## 目录结构
- `index.html` —— 站点入口（单文件，替换内容即可上线你的真实页面）
- `README.md` —— 本说明
- `.gitignore` —— 忽略无关文件

## 本地预览
- 直接双击 `index.html`
- 或：`python -m http.server 8000` → 打开 http://localhost:8000

## ⚠️ 开始之前：四个要认准的事实

1. **路线变了**：你之前在 EdgeOne 选了「不含大陆」区，等于国内打不开。现在改走 Cloudflare Pages —— 免备案、国内能开（但慢）。EdgeOne 那个项目可以不管，或直接删掉，不再使用。
2. **域名接法不同**：Cloudflare 用 **NS 整域接管**（把 `gregory.com` 的 Nameserver 改成 Cloudflare 给的两组），不是 EdgeOne 那种单条 CNAME。一旦接管，这个域名的所有解析都归 Cloudflare 管。
3. **域名得先拥有**：要绑的 `www.gregory.com` 必须已在域名商 **购买 + 实名**，Cloudflare 只认你"拥有"的域名。还没买就先买 + 实名（约 50–80 元/年）。
4. **NS 接管会影响同域名其他服务**：如果 `gregory.com` 还挂着邮箱（MX）、其他子站等，接管后那些记录要搬到 Cloudflare，否则会失效。纯给这个站用就无所谓。

## 部署流程

### 1. 准备 Git 仓库（已完成）
本地 `site/` 已由助手初始化并提交；远程已推送到
`https://github.com/Gregory-maker-fun/Gregory.Fun.git`。
Cloudflare 直接从这里拉代码自动部署，你无需再操作 Git。

### 2. 确认 / 购买域名
- 已有 `gregory.com`（已购买 + 实名）：直接进入第 3 步。
- 还没有：去阿里云 / 腾讯云 / NameSilo 搜 `gregory.com`，买下 + 实名认证。
  - 看清续费价，别只看首年便宜。
  - 免费顶级域名（.tk 等）有收回风险，别用。

### 3. 注册 Cloudflare（你本人）
- 打开 https://www.cloudflare.com/ 用邮箱注册 → 验证邮箱 → 进入控制台。

### 4. 添加站点 + NS 接管域名（关键）
- 控制台 → **Add a Site（添加站点）** → 输入 `gregory.com` → 选 **Free（免费）** 计划。
- Cloudflare 会扫描域名现有 DNS 记录（若已有），照单保留或按需调整。
- 它给出 **两组 NS 服务器**（形如 `xxx.ns.cloudflare.com` / `yyy.ns.cloudflare.com`）。
- 去域名商（阿里云/腾讯云/NameSilo）后台，把 `gregory.com` 的 **Nameserver 改成这两组**，删掉原来的。
- 等 DNS 生效（几分钟到 48 小时，可在 Cloudflare 点「Recheck Nameservers」刷新）。
- 生效后 Cloudflare 状态变「Active（已激活）」。

### 5. 创建 Pages 项目并连接 GitHub
- Cloudflare 控制台 → **Workers 和 Pages** → **创建** → **Pages** → **连接到 Git**。
- 授权 GitHub → 选仓库 `Gregory-maker-fun/Gregory.Fun`。
- 构建设置：
  - 框架预设：**无（无框架 / None）**
  - 构建命令：**留空**
  - 构建输出目录：**`.`**（根目录就是 index.html；以后用框架再改）
- 点「保存并部署」，约 1 分钟拿到预览域名 `xxx.pages.dev`。

### 6. 绑定自定义域名
- Pages 项目 → **自定义域** → 输入 `www.gregory.com`（或 `gregory.com`）。
- 因为第 4 步已 NS 接管，Cloudflare 会 **自动添加 CNAME 记录**，通常不用手动加。
- 去 **SSL/TLS → 概述**，加密模式选 **Full（完全）** 或 **Full (strict)**。
- 开启 **始终使用 HTTPS**（可选但建议）。
- 等几分钟到 48 小时生效。

### 7. 验证 + 以后更新
- 打开 `https://www.gregory.com` 确认能访问（国内能开，但比国内节点慢）。
- 以后改 `index.html` → `git add . && git commit -m "update" && git push`，Cloudflare 自动重新部署。

## 说明
- **免备案**：站点不落地大陆服务器，走 Cloudflare 海外 CDN，无需 ICP 备案。
- **国内速度（诚实）**：Cloudflare 在大陆无节点，流量绕道，实测 200–500ms，明显慢于 EdgeOne 含大陆区；个别地区/运营商可能不稳或偶发打不开。**能开 ≠ 快**。
- **免费额度**：永久免费、无限带宽、500 次构建/月，足够个人展示站。
- **换平台的代价**：GitHub 仓库和本地文件都现成，换回 EdgeOne 也只是改部署源，无沉没成本。
