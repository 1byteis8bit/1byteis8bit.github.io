---
layout: default
title:
nav: home
---

<section class="hero">
  <div class="eyebrow"><span class="pulse"></span> Independent research archive</div>
  <h1>Understand software<br><em>below the source.</em></h1>
  <p class="hero-copy">Reverse engineering, binary exploitation, systems security, and reproducible security research.</p>
  <div class="actions">
    <a class="button primary" href="{{ '/labs/' | relative_url }}">Explore Labs <span>↗</span></a>
    <a class="button" href="{{ '/writing/' | relative_url }}">Read Writing <span>→</span></a>
  </div>
  <div class="hero-index">
    <span>Current focus</span>
    <ul><li>x86-64</li><li>ELF</li><li>GDB</li><li>Ghidra</li><li>Binary exploitation</li></ul>
  </div>
</section>

<section class="section">
  <div class="section-heading">
    <div><span class="section-no">01</span><h2>Featured work</h2></div>
    <a href="{{ '/labs/' | relative_url }}">View the archive →</a>
  </div>
  <div class="work-list">
  {% assign featured = site.documents | where: "featured", true | sort: "date" | reverse %}
  {% for item in featured limit:3 %}
    <a class="work-row" href="{{ item.url | relative_url }}">
      <span class="work-id">{{ item.artifact_id }}</span>
      <span class="work-main"><strong>{{ item.title }}</strong><small>{{ item.description }}</small></span>
      <span class="tag">{{ item.category }}</span>
      <time datetime="{{ item.date | date: '%Y-%m-%d' }}">{{ item.date | date: '%Y.%m.%d' }}</time>
      <span class="arrow">↗</span>
    </a>
  {% else %}
    <div class="empty-note"><strong>Archive initializing.</strong> Set <code>featured: true</code> in any lab, writing, or project Markdown file to show it here.</div>
  {% endfor %}
  </div>
</section>

<section class="statement">
  <p>I study how software behaves at the <em>binary, memory, and operating-system level</em>—then turn the findings into analysis others can reproduce.</p>
  <a href="{{ '/about/' | relative_url }}">About the lab →</a>
</section>
