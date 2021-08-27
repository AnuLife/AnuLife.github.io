//游戏页面
$(".suipai-item").mouseenter(function () {
    $(this).find('.suipai-pages').animate({ right: "0" }, 150);
    $(this).find('.bp').animate({ opacity: 0.3 }, 150);
});
$(".suipai-item").mouseleave(function () {
    $(this).find('.suipai-pages').animate({ right: "-80" }, 150);
    $(this).find('.bp').animate({ opacity: 0 }, 150);
});