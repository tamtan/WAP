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

        PrintWriter out = response.getWriter();

        if (firstSumNum != null && secondSumNum != null) {
            out.print("<p>" + firstSumNum + " + " + secondSumNum + " = " + (firstSumNum + secondSumNum) + "</p>");
        }

        if (firstMulNum != null && secondMulNum != null) {
            out.print("<p>" + firstMulNum + " * " + secondMulNum + " = " + (firstMulNum * secondMulNum) + "</p>");
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
