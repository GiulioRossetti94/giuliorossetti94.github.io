---
layout: default
title: Home
permalink: /
description: "Giulio Rossetti — Houlden Fellow and Post-Doc Researcher at Warwick Business School. Research in financial econometrics and asset pricing, with a focus on asset returns, corporate bond factors, and risk premia."
---
# About Giulio Rossetti

I am a Postdoctoral Researcher (Houlden Fellow) at the [University of Warwick -- Warwick Business School](http://wbs.ac.uk/).

I completed a PhD in Finance and Econometrics at the University of Warwick -- WBS in 2024, under the supervision of Professors [Cesare Robotti](https://cesarerobotti.com) and [Philippe Mueller](https://www.wbs.ac.uk/about/person/philippe-mueller/).

My research lies at the intersection of financial econometrics and asset pricing, with a particular focus on asset returns.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Giulio Rossetti",
  "givenName": "Giulio",
  "familyName": "Rossetti",
  "jobTitle": "Postdoctoral Researcher (Houlden Fellow)",
  "affiliation": {
    "@type": "CollegeOrUniversity",
    "name": "Warwick Business School, University of Warwick",
    "url": "https://www.wbs.ac.uk/"
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "University of Warwick — Warwick Business School"
  },
  "knowsAbout": [
    "Financial Econometrics",
    "Asset Pricing",
    "Corporate Bond Factors",
    "Risk Premia Estimation",
    "Factor Models"
  ],
  "url": "https://giuliorossetti94.github.io",
  "image": "https://giuliorossetti94.github.io/assets/img/GRround.png",
  "sameAs": [
    "https://github.com/GiulioRossetti94",
    "https://linkedin.com/in/rossettigiulio",
    "https://x.com/gi_r94",
    "https://www.wbs.ac.uk/about/person/giuliorossetti-/"
  ]
}
</script>

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
