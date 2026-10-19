---
layout: page
title: Publications
permalink: /publications/
description: Research publications
nav: true
nav_order: 2
---

{% if site.data.profile.publications_available %}
<div class="publications">
{% bibliography %}
</div>
{% else %}
<div style="border-left:3px solid var(--global-theme-color);padding:1rem 1.5rem;margin:2rem 0;background:var(--global-code-bg-color)">
  <h2 style="font-size:1.25rem;margin-top:0">Publication list forthcoming</h2>
  <p style="margin-bottom:0">Bibliographic details and links will be added here.</p>
</div>
{% endif %}
