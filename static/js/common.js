var show = true;
$(".icon").click(function () {
    if (show) {
        $(".nav-m").css({ "display": "block","animation": "left 1s ease" });
        $(".line:nth-child(1)").css({ "transform": "translate(0, 20px)" })
        $(".line:nth-child(2)").css({ "width": "0", "height": "0" })
        $(".line:nth-child(3)").css({ "transform": "translate(0, -30px)", "transform": "rotate(90deg)" })
        $(".icon").css({ "transform": "rotate(45deg)" })

        show = false
    } else {
        $(".line:nth-child(1)").css({ "transform": "translate(0, 0px)" })
        $(".line:nth-child(2)").css({ "width": "30px", "height": "2px" })
        $(".line:nth-child(3)").css({ "transform": "translate(0, 0px)", "transform": "rotate(0deg)" })
        $(".icon").css({ "transform": "rotate(0deg)" })
        $(".nav-m").css("animation","right 1s ease both")




        show = true
    }
})
window.onscroll = function () {
    if (sct() > 800) {
        $(".goTop").css("display", "block");
    } else {
        $(".goTop").css("display", "none");

    }
}
$(".arrow").click(function () {
    var timer = setInterval(function () {
        // 声明起点
        var start = sct();
        // 声明步长
        var step = -start / 10;
        if (step > -1) {
            step = Math.floor(step);
        }
        console.log(step, start, start + step)
        // 运动
        window.scroll(0, start + step);
        // 停止条件
        if (start + step === 0) {
            clearInterval(timer);
            console.log("stop ...");
        }
    }, 10)
})

  
function sct() {
    return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
}
