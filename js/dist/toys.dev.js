"use strict";

//玩具页面
$(".toy_div").mouseenter(function () {
  $(this).find('.back_black').stop().animate({
    opacity: 0.3
  }, 100);
});
$(".toy_div").mouseleave(function () {
  $(this).find('.back_black').stop().animate({
    opacity: 0
  }, 100);
});