$(document).ready(function () {
    var isWin = true;
    var isStarted = false;

    let startGame = function () {
        if (!isStarted) {
            isStarted = true;
        } else {
            isStarted = false;
            isWin = true;
        }
    };

    let finishGame = function () {
        if (!isStarted) {
            return;
        }
        if (isWin) {
            $("#status").text("You win!:]");
            isStarted = false;
            isWin = true;
        } else {
            $("#status").text("You lose!!!");
            isStarted = false;
            isWin = false;
        }

    };


    let addLoseWarning = function () {
        $("#maze .boundary").addClass("youlose");
    };

    let resetLoseWarning = function () {
        $("#maze .boundary").removeClass("youlose");
    };

    let loseWarning = function () {
        if (isStarted) {
            addLoseWarning();
            isWin = false;
        }
    };


    $("#start").click(startGame);
    $("#end").mouseover(finishGame);
    $("#maze .boundary").mouseover(loseWarning);
    $("#maze .boundary").mouseout(resetLoseWarning);
    $("#maze").mouseleave(loseWarning);
});