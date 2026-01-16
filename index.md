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

<ul class="latest-list">
{% for item in visible_items %}
<li class="latest-item">
  <a href="{{ item.link }}" onclick="gtag('event', 'latest_click', { event_category: 'Engagement', event_label: '{{ item.title | escape }}' });">
    {% if item.badge %}<span class="latest-badge">{{ item.badge }}</span>{% endif %}
    <span class="latest-text">{{ item.title }}</span>
  </a>
</li>
{% endfor %}
</ul>
{% endif %}
