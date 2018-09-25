<html>

<head>
  <title>Hacker News</title>
  <link rel="stylesheet" href="/public/css/news.css" />
</head>

<body>
  <img src="/public/image/aa.jpg" alt="">
  <ul class="news-view view">
    {% for item in list %}
    <li class="item">
      <a href=" https://cnodejs.org/api/v1/topic/{{ item.id }}">{{ item.title }}</a>
      <span>{{helper.zoneTime(item.create_at)}}</span>
      <!-- <span>{{ item.create_at }}</span> -->
    </li>
    {% endfor %}
  </ul>
</body>

</html>