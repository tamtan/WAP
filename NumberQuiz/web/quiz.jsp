<%@ page import="model.Quiz" %>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>The Number Quiz</title>
</head>
<body>
<form action='quiz' method='POST'>
    <h1>The Number Quiz</h1>
    <p>Your age is ${age}</p>
    ${quiz.correctAnswerOfPrevQuestion}
    <p> Your current score is ${quiz.score}</p>
    <p> Guess the next number in the sequence.</p>
    <p>${quiz.nextQuestion}</p>
    <p> Your answer: <input type='text' name='answer'/></p>
    <p><input type='submit' value='Submit'/></p>
</form>
</body>
</html>
