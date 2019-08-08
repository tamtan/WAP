package cs472.mum;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "CalculatorServlet")
public class CalculatorServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Integer firstSumNum = null;
        Integer secondSumNum = null;
        Integer firstMulNum = null;
        Integer secondMulNum = null;
        try {
            firstSumNum = Integer.valueOf(request.getParameter("firstNum"));
            secondSumNum = Integer.valueOf(request.getParameter("secondNum"));
        } catch (NumberFormatException e) {
            // do nothing
        }

        try {
            firstMulNum = Integer.valueOf(request.getParameter("thirdNum"));
            secondMulNum = Integer.valueOf(request.getParameter("fourthNum"));
        } catch (NumberFormatException e) {
            // do nothing
        }

        StringBuilder sb = new StringBuilder("<form action='calculate' method='post'>");
        buildForm(firstSumNum, secondSumNum, sb, "firstNum", "secondNum", "+");
        buildForm(firstMulNum, secondMulNum, sb, "thirdNum", "fourthNum", "*");
        sb.append("<br><input type='submit' value='Submit'/></form>");

        response.setContentType("text/html");

        PrintWriter out = response.getWriter();
        out.print(sb.toString());
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
    private void buildForm(Integer firstNum, Integer secondNum, StringBuilder sb, String firstInputName,
                           String secondInputName, String action) {
        sb.append("<div>");
        sb.append("<input type='text' name='" + firstInputName +"'");
        if(firstNum != null) {
            sb.append("value='" + firstNum + "'");
        }
        sb.append("/> " + action +" <input type='text' name='" + secondInputName + "'");
        if (secondNum != null) {
            sb.append("value='" + secondNum + "'");
        }
        sb.append("'/>=<input type='text' name='" + action + "'");
        if (firstNum!= null && secondNum != null) {
            sb.append("value='" + ("+".equals(action) ? (firstNum + secondNum) : (firstNum * secondNum)) + "'");
        }
        sb.append("</div>");
    }
}
