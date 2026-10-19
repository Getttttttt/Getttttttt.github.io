---
layout: page
title: Projects
permalink: /projects/
description: Selected published research
nav: true
nav_order: 3
---

A selection of research on multilingual voice interaction, comprehension, and adaptive AI.

{% assign directions = site.projects | sort: 'importance' %}
{% for project in directions %}
<article style="display:flex;align-items:center;gap:1.5rem;border-bottom:1px solid var(--global-divider-color);padding:1.8rem 0">
  <img src="{{ project.img | relative_url }}" alt="" width="112" height="112" style="max-width:25%;border-radius:4px">
  <div>
    <span style="font-size:.75rem;letter-spacing:.08em;text-transform:uppercase;color:var(--global-text-color-light)">{{ project.venue }}</span>
    <h2 style="font-size:1.45rem;margin:.35rem 0"><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h2>
    <p style="margin:0">{{ project.description }}</p>
  </div>
</article>
{% endfor %}
