---
layout: blog-layout.html
---

# blog time

Welcome to the blog section of my website. This is going to be where I share things like playlogs of the devices I'm running, thoughts on tamagotchi and virtual pets in general, and also progress on the virtual pet game I'm making - Whimsykins!

{% for post in collections.blog %}
<h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
<p class='blog'>{{ post.content }}</p>
{%endfor%}