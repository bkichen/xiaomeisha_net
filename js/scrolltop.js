// JavaScript Document
function goTopEx() {
    var obj = document.getElementById("img3");
    function getScrollTop() {
        return $(document).scrollTop();
    }
    function setScrollTop(value) {
        $(document).scrollTop(value)
    }
    //window.onscroll=function(){getScrollTop()>0?obj.style.display="":obj.style.display="none";}
    obj.onclick = function () {
        var goTop = setInterval(scrollMove, 10);
        function scrollMove() {
            setScrollTop(getScrollTop() / 1.1);
            if (getScrollTop() < 1) clearInterval(goTop);
        }
    }
}



function mouseOver(index) {
    document.getElementById("img" + index).src = "Images/foot/" + index + "-2.png";
    if (index == "0" || index=="1" || index=="2") {
        document.getElementById("img" + index + "s").style.display = "";

    }
}
function mouseOut(index) {
    document.getElementById("img" + index).src = "Images/foot/" + index + "-1.png";
    if (index == "0" || index == "1" || index == "2") {
        document.getElementById("img" + index + "s").style.display = "none";
    }
}

