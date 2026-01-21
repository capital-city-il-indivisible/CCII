---
title: Upcoming Events
layout: base.njk
---

{% for event in collections.events %}
## {{ event.data.title }}
📅 {{ event.data.date | date: "%B %d, %Y" }}
📍 {{ event.data.location }}
🕒 {{ event.data.time }}

{{ event.data.description }}

---
{% endfor %}
