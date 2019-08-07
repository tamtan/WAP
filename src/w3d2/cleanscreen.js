$(document).ready(function () {

    function increaseSize(growthAmount) {
        var cirWidth = $(".circle").width();
        var size = parseInt(cirWidth) + parseInt(growthAmount);
        $(".circle").width(size + "px")
            .height(size + "px");

    }

    var removeEle = function () {
        alert(1);
        this.remove();
    };

    var addCircle = function () {

        var cirWidth = $("#widthInput").val();

        $(".circle").width(cirWidth + "px").height(cirWidth + "px");

        var amount = $("#growthAmount").val();

        var rate = $("#growthRate").val();

        var numOfCirs = $("#numOfCircle").val();

        for (let i = numOfCirs; i > 0; i--) {
            var posx = Math.floor(Math.random() * parseInt($(document).width()));
            posx = posx + "px";
            var posy = Math.floor(Math.random() * parseInt($(document).height()));
            posy = posy + "px";
            var hexColor = '#' + (function co(lor) {
                return (lor +=
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'][Math.floor(Math.random() * 16)])
                && (lor.length == 6) ? lor : co(lor);
            })('');
            let divStr = $(`<div class='circle' style='top:${posx}; left:${posy};background-color:${hexColor}'></div>`);

            divStr.on('click', () => {
                divStr.remove();
            });

            $("#container").append(divStr);
        }
        setInterval(function () {
            increaseSize(amount)
        }, rate);
    }

    //2. Make the circle grow by 10px every 250ms.
    // setInterval(increaseSize, 250);

    //3. Remove the circle when you click on it.
    //$(".circle").click(removeEle);

    //4. ‘Start’ is clicked the circle should appear
    $("#btnStart").click(addCircle);

});