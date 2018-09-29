<html>

<head>
  <title>cnode News</title>
  <link rel="stylesheet" href="/public/css/news.css" />
</head>

<body>
  <img src="/public/image/aa.jpg" alt="">
  <ul class="news-view view">
    {% for item in list %}
    <li class="item">
      <a href="/news/content?id={{ item.id }}">{{ item.title }}</a>
      <span>{{helper.zoneTime(item.create_at)}}</span>
      <!-- <span>{{ item.create_at }}</span> -->
    </li>
    {% endfor %}
  </ul>
</body>

</html>