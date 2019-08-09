<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>The Number Quiz</title>
    <link href="style.css" type="text/css" rel="stylesheet">
</head>
<body>
<h1>The Number Quiz</h1>
${quiz.correctAnswerOfPrevQuestion}
<p>Your current score is ${quiz.score} and you have grade <span class="red">${quiz.grade}</span></p>
</body>
</html>
