"use strict";

//clipboard初始化  
var clipboard = new ClipboardJS('.btn');
clipboard.on('success', function (e) {
  $(".clipboard_success").css({
    display: "block"
  });
  setTimeout(function () {
    $(".clipboard_success").stop().animate({
      opacity: 1
    }, 5);
    $(".clipboard_success").delay(600).animate({
      opacity: 0
    }, 150);
  }, 0);
});
clipboard.on('error', function (e) {});