---
layout: default
title: About
permalink: /
---

<div id="main-content">
  <section class="hero" aria-labelledby="intro-heading">
    <div>
      <span class="eyebrow">Human-centered AI · Human–AI Interaction</span>
      <h1 id="intro-heading">Entong Gao<span style="color:var(--accent)">.</span></h1>
      <p class="hero-role"><strong>Ph.D. Student</strong><br>Guanghua School of Management, Peking University</p>
      <p class="hero-intro">I study how people understand, experience, and collaborate with AI.</p>
      <p class="hero-note">My work combines behavioral research, eye tracking, and explainable machine learning to inform adaptive AI systems. I am also interested in agentic AI and AI governance.</p>
      <div class="contact-links">
        <a href="mailto:etgao25@stu.pku.edu.cn"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><rect x="2" y="4" width="16" height="12" rx="1"/><path d="m2 5 8 6 8-6"/></svg>Email</a>
        <a href="https://scholar.google.com/citations?user=IO_-PdIAAAAJ">Google Scholar <span aria-hidden="true">↗</span></a>
        <a href="https://orcid.org/0009-0008-1096-8396">ORCID <span aria-hidden="true">↗</span></a>
        <a href="https://github.com/Getttttttt">GitHub <span aria-hidden="true">↗</span></a>
      </div>
      <div class="interest-line"><span>Human–AI Interaction</span><span>Agentic AI</span><span>AI Governance</span></div>
    </div>
    <figure class="hero-portrait"><img src="{{ '/assets/img/cat-profile.jpg' | relative_url }}" alt="An orange tabby cat resting in warm sunlight by a window" width="1080" height="1080" fetchpriority="high"></figure>
  </section>
  <section class="section" aria-labelledby="selected-heading">
    <div class="section-heading"><h2 id="selected-heading">Selected research</h2><a href="{{ '/publications/' | relative_url }}">All publications <span aria-hidden="true">↗</span></a></div>
    <div class="research-grid">{% for research in site.data.research %}{% if research.selected %}{% include research-card.liquid research=research %}{% endif %}{% endfor %}</div>
  </section>
  <section class="section" aria-labelledby="directions-heading">
    <div class="section-heading"><h2 id="directions-heading">Research interests</h2></div>
    <div class="research-areas">
      <div><span class="area-number">01 /</span><h3>Understanding people</h3><p>Comprehension, user experience, and trust in multilingual and voice-based AI interaction.</p></div>
      <div><span class="area-number">02 /</span><h3>Adaptive AI systems</h3><p>Behavioral sensing, interpretable models, and agents that respond to users’ needs.</p></div>
      <div><span class="area-number">03 /</span><h3>AI &amp; society</h3><p>Human-centered AI, responsible interaction, and the governance of emerging AI systems.</p></div>
    </div>
  </section>
  <aside class="award-strip"><span class="eyebrow">Recognition</span><p><a href="https://2025.hci.international/CCD-best-paper-award.html">Best Paper Award · Cross-Cultural Design, HCII 2025</a><br>“How Do You Understand? Your Eyes Show It”</p></aside>
</div>
