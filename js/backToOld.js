//回到旧站
$(".backtoanulife").mouseenter(function () {
    $(this).css({ boxShadow: "0" });
    $(this).css({ backgroundColor: "#141145" });
});
$(".backtoanulife").mouseleave(function () {
    $(this).css({ boxShadow: "rgb(20, 17, 69) 2px 2px 0px;" });
    $(this).css({ backgroundColor: "#FD4300" });
});
