"use strict";

//新版头图
$(".note_guide").mouseenter(function () {
  $('.zhegaia').stop().animate({
    width: "100%"
  }, 150);
  $('.zhegaib,.zhegaic,.zhegaid').stop().animate({
    width: "0"
  }, 150);
  $(".guidePic").css({
    backgroundImage: "url('https://www.imageoss.com/images/2021/08/23/YfLHgA4bce712fc8cb83c9.jpg')"
  });
});
$(".nintendo_guide").mouseenter(function () {
  $('.zhegaib').stop().animate({
    width: "100%"
  }, 150);
  $('.zhegaia,.zhegaic,.zhegaid').stop().animate({
    width: "0"
  }, 150);
  $(".guidePic").css({
    backgroundImage: "url('https://anuluca.gitee.io/me/other/gddtaj.jpg')"
  });
});
$(".jay_guide").mouseenter(function () {
  $('.zhegaic').stop().animate({
    width: "100%"
  }, 150);
  $('.zhegaia,.zhegaib,.zhegaid').stop().animate({
    width: "0"
  }, 150);
  $(".guidePic").css({
    backgroundImage: "url('https://www.imageoss.com/images/2021/08/24/2145F6682FBCE287815AF6DC59D0C5A5518de00258cb8630.png')"
  });
});
$(".home_guide").mouseenter(function () {
  $('.zhegaid').stop().animate({
    width: "100%"
  }, 150);
  $('.zhegaia,.zhegaib,.zhegaic').stop().animate({
    width: "0"
  }, 150);
  $(".guidePic").css({
    backgroundImage: "url('https://www.imageoss.com/images/2021/08/23/waoh6O8b7ea1e3474439ac.jpg')"
  });
}); //作品

$(".shits>div").mouseenter(function () {
  $(this).find(".shit_title_img").animate({
    width: "340px",
    height: "220px",
    marginTop: "-6px",
    marginLeft: "-6px"
  }, 150);
  $(this).find("span:first-of-type").animate({
    bottom: "5px",
    fontSize: "22px"
  }, 80);
  $(this).find("span:last-of-type").animate({
    height: "0px"
  }, 200);
}).stop().mouseleave(function () {
  $(this).find(".shit_title_img").animate({
    width: "320px",
    height: "200px",
    marginTop: "4px",
    marginLeft: "4px"
  }, 150);
  $(this).find("span:first-of-type").animate({
    bottom: "20px",
    fontSize: "18px"
  }, 80);
  $(this).find("span:last-of-type").animate({
    height: "12px"
  }, 200);
}).stop();