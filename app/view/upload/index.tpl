<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Page Title</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
  <script src="main.js"></script>
</head>
<body>
  <form method="POST" action="/uploader?_csrf={{ ctx.csrf | safe }}" enctype="multipart/form-data">
    title: <input name="title" />
    file: <input name="file" type="file" />
    <button type="submit">上传</button>
  </form>
</body>
</html>