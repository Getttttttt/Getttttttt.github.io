# Entong Gao 的学术主页

基于官方 [al-folio](https://github.com/alshedivat/al-folio) v1 starter 和 al_folio_core 1.0.15。

## 内容维护

- 个人简介：`_pages/about.md`
- 头像：将 `assets/img/monogram.svg` 替换为本人照片，并修改 about 页的 `profile.image`
- 论文：`_bibliography/papers.bib`。添加真实条目后，在 `_data/profile.yml` 把 `publications_available` 设为 `true`
- 研究项目：`_projects/`；当前三个条目分别对应已发表的 CHI 2026、HCII 2025 与 IJHCS 2025 研究
- 履历：`_data/cv.yml`
- 邮箱及社交链接：`_data/socials.yml`

已根据 Crossref / 出版社公开元数据填入 5 篇论文，并根据大会官网填入 2025 年最佳论文奖。尚未填入未经确认的入学年份、导师、电子邮箱或 CV 下载链接。条目核对记录见 `SOURCES.md`。

## 本地构建

安装 Ruby 3.3（Windows 请使用 Ruby+Devkit），然后运行：

```text
bundle install
bundle exec jekyll build --destination dist
bundle exec jekyll serve
```

## GitHub Pages

1. 在 Getttttttt 账号下创建 `Getttttttt.github.io` 仓库。
2. 上传本文件夹内的源码，包括 `.github/workflows/deploy.yml`。无需上传 `dist`、`node_modules`、`vendor`、`.bundle` 或 `.openai`。
3. 仓库 Settings → Pages → Source 选择 **GitHub Actions**。
4. 等待 Build and deploy academic website 工作流成功，网址为 https://getttttttt.github.io/ 。

`_config.yml` 已配置该网址，`baseurl` 为空。GitHub Actions 会从 al-folio 源文件构建页面。

## 许可

保留官方 MIT LICENSE。姓名缩写图和研究方向示意图由本次搭建制作，可替换。
