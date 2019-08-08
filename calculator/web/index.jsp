<%--
  Created by IntelliJ IDEA.
  User: vinhtam92
  Date: 2019-08-07
  Time: 21:13
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Improved Calculator</title>
</head>
<body>
<form action="calculate" method="post">
    <div>
        <input name="firstNum" type="text" value="5">
        +
        <input name="secondNum" type="text" value="6">
        =
        <input name="sum" type="text">
    </div>
    <div>
        <input name="thirdNum" type="text" value="5">
        *
        <input name="fourthNum" type="text" value="6">
        =
        <input name="product" type="text">
    </div>
    <div>
        <input id="btnSubmit" type="submit">
    </div>

</form>
</body>
</html>
