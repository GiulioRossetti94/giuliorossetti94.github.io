---
layout: default
title: Home
permalink: /
---
# About me

I am a Postdoctoral Researcher (Houlden Fellow) at the [University of Warwick -- Warwick Business School](http://wbs.ac.uk/).

I completed a PhD in Finance and Econometrics at the University of Warwick -- WBS in 2024, under the supervision of Professors [Cesare Robotti](https://cesarerobotti.com) and [Philippe Mueller](https://www.wbs.ac.uk/about/person/philippe-mueller/).

My research lies at the intersection of financial econometrics and asset pricing, with a particular focus on asset returns.

{% assign visible_items = site.data.latest | slice: 0, 4 %}

{% if visible_items.size > 0 %}
## Latest

<div class="latest-container">
{% for item in visible_items %}
<a href="{{ item.link }}" class="latest-item latest-{{ item.type }}" onclick="gtag('event', 'latest_click', { event_category: 'Engagement', event_label: '{{ item.title | escape }}' });">
  <span class="latest-icon">
    {% case item.type %}
      {% when 'paper' %}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
      {% when 'teaching' %}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
      {% when 'code' %}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
      {% when 'talk' %}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      {% else %}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    {% endcase %}
  </span>
  <span class="latest-text">{{ item.title }}</span>
  <span class="latest-date">{{ item.date | date: "%b %d" }}</span>
</a>
{% endfor %}
</div>
{% endif %}
