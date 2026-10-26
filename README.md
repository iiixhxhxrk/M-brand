# M+ 品牌展示页发布说明

这个交付包可直接上传 GitHub，再通过 GitHub Pages 生成可分享的网址，无须安装软件或运行构建命令。

1. **解压交付包。** 打开解压后的文件夹，找到 `index.html` 和 `assets` 文件夹。网页和图片要一起上传，保留 `assets` 内全部子文件与目录。

2. **新建仓库。** 登录 GitHub，选择 **New repository**，仓库名可用 `mplus-brand`，勾选 **Add README** 后创建。免费账户请使用公开（Public）仓库；启用 Pages 需管理员或维护者权限，发布后的页面可公开访问。[GitHub 官方说明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

3. **上传文件。** 在仓库首页选择 **Add file → Upload files**，将 `index.html` 和整个 `assets` 文件夹拖入上传区，等待文件上传完成，再点击 **Commit changes**。上传的是解压后的文件，不是 ZIP 压缩包；也不要把外面那层交付文件夹一起拖进去。完成后，仓库首页应直接看到 `index.html` 与 `assets`。

4. **开启网页发布。** 进入 **Settings → Pages**，在 **Build and deployment** 中，将 **Source** 设为 **Deploy from a branch**；分支选 **main**，目录选 **/(root)**，点击 **Save**。若没有 `main`，先确认上一步已提交文件。

5. **取得展示链接。** 等待部署完成，回到 **Settings → Pages**，点击 **Visit site** 打开网页，并复制地址分享。首次发布可能需要约十分钟；先等部署完成，再刷新页面，不必重复上传。入口文件必须位于发布目录顶层。[创建与访问站点的官方说明](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

仓库首页的文件列表就是这里说的“根目录”，不用另外创建名为“网页”或“发布”的文件夹。仓库里的 README 是说明文件，展示页入口是 `index.html`。给客户分享时，请复制 **Visit site** 打开后的网页地址，而不是仓库地址或文件预览地址。

后续更新时，替换对应文件并再次 **Commit changes**，网站会自动更新。请保留 `index.html` 名称；图片和文件夹若改名，也要同步修改网页中的路径，大小写需一致。仓库改名后，分享网址也会变化，请从 Pages 页面重新获取。若图片缺失，先检查 `assets` 是否完整上传、是否多套了一层目录。
