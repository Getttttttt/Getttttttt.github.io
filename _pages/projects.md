---
layout: default
title: Projects
permalink: /projects/
nav: true
nav_order: 3
---

<div id="main-content" data-filter-collection="projects">
  <header class="page-intro"><span class="eyebrow">Research in focus</span><h1>Projects</h1><p>A closer look at my research, with original figures, study overviews, and links to the papers.</p></header>
  <div class="collection-tools"><div class="filter-tabs" role="group" aria-label="Filter projects by research area"><button type="button" data-category-filter="all" aria-pressed="true">All projects</button><button type="button" data-category-filter="hai" aria-pressed="false">Human–AI Interaction</button><button type="button" data-category-filter="technology" aria-pressed="false">Technology &amp; innovation</button></div><span class="result-count" style="margin:0" data-result-count aria-live="polite">8 projects</span></div>
  <div class="research-grid project-grid">{% for research in site.data.research %}{% include research-card.liquid research=research %}{% endfor %}</div>
  <p class="empty-state" data-empty-state hidden>No projects match this filter.</p>
</div>
