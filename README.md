# Entong Gao 的学术主页

公开站点：[getttttttt.github.io](https://getttttttt.github.io/)。基于官方 al-folio v1 starter 和 al_folio_core 1.0.15。

2026-10-20 修订：深红和暖白配色、猫咪头像、8 篇展示论文、8 个研究详情页及 16 张原始研究图。CHI 与 UIST 各提供一个完整的 OA PDF。履历增加教育经历、基金项目、1 项授权发明专利和 1 项软件著作权。工作论文及用户指定的 HSSC、Energy Reports、World Patent Information 文章未展示。

## 内容维护

后续修订：首页代表研究采用单列、左图右文；页脚仅保留个人姓名；CV 增加有统计时间的同行评审服务和 CHI 2026 审稿表彰。

- 个人介绍：`_pages/about.md`
- 头像：`assets/img/cat-profile.jpg`，可替换为同名照片；页面用 CSS 控制显示比例。
- 完整论文条目与 BibTeX：`_bibliography/papers.bib`
- 研究简介、图注、代表作选择和图片路径：`_data/research.json`
- 每篇研究的固定网址：`_projects/`；正文由 `_layouts/research.liquid` 渲染。
- 公开履历：`_pages/cv.md`
- 视觉样式和页面交互：`assets/css/site.css`、`assets/js/site.js`
- 论文原图：`assets/img/research/`；OA 全文：`assets/pdf/`
- 社交账户：`_data/socials.yml`；顶部和底部直接链接也需同步修改。

新增论文时，将 BibTeX 与 `research.json` 保持一致，并添加相应 `_projects/<slug>.md`。没有完整 OA 许可的文章只提供出版社链接。原始简历含工作论文和私人联系方式，未将其原件发布为下载文件。

## 构建与发布

使用 Ruby 3.3 与 Bundler：

```text
bundle install
bundle exec jekyll build --destination _site
bundle exec jekyll serve
```

GitHub Actions 已配置为 `main` 分支更新后自动部署 GitHub Pages。公开构建使用 `_config.yml`。私有 Sites 镜像另用 `_config.sites.yml`，构建至 `dist`；`.openai` 仅为镜像托管身份，不需复制到 GitHub Pages。

本站有意覆盖 al-folio 的 head、header、footer、default 和 bib 模板，并保留 `.al-folio-overrides.yml` 记录。升级 gem 后先执行：

```text
bundle exec al-folio upgrade overrides audit
```

只有检查过模板兼容性后，再更新对应覆盖确认。来源与许可记录见 `SOURCES.md`。

## 许可

al-folio 保留 MIT LICENSE。论文、图表和用户头像各遵循其自身权利；CHI/UIST PDF 的 CC BY 4.0 许可及作者署名保留在文件和研究页中。
