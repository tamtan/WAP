<%--
  Created by IntelliJ IDEA.
  User: vinhtam92
  Date: 2019-08-07
  Time: 23:39
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Beer Selection</title>
</head>
<body>
<h1 align="center">Beer Selection Page</h1>
<form method="POST" action="SelectBeer.do">
    Select beer charateristics
    Color:
    <select name="color" size="1">
        <option value="light"> light</option>
        <option value="amber"> amber</option>
        <option value="brown"> brown</option>
        <option value="dark"> dark</option>
    </select>
    <br><br>
    <center>
        <input type="submit"/>
    </center>
</form>
</body>
</html>
