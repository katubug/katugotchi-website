---
layout: blog-layout.html
---
# Hello there

{% for post in collections.blog %}
<h2><a href="{{ post.url }}">{{ post.data.title}}</a></h2>
<p>{{ post.content}}</p>
{%endfor%}