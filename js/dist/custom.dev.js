"use strict";

//判断访问设备
var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端

var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

var windowWidth = $(window).width(); // //获取当前时间
// var ifDrink = (new Date()).getHours()

$(function () {
  //如果当前时间是三点或凌晨三点则播放视频
  // if(ifDrink == 15 || ifDrink == 3){
  // $(".drink-time").show()
  // }
  //判断访问设备
  if (isAndroid == true || isiOS == true) {
    // alert('安卓端')
    hidePics();
  }

  if (windowWidth <= 1725) {
    hidePics();
  } else {
    showPics();
  }

  setWidth();

  var str = function str() {
    /*
         ▄▄▄       ███▄    █  █    ██  ██▓     █    ██  ▄████▄   ▄▄▄      
    ▒████▄     ██ ▀█   █  ██  ▓██▒▓██▒     ██  ▓██▒▒██▀ ▀█  ▒████▄    
    ▒██  ▀█▄  ▓██  ▀█ ██▒▓██  ▒██░▒██░    ▓██  ▒██░▒▓█    ▄ ▒██  ▀█▄  
    ░██▄▄▄▄██ ▓██▒  ▐▌██▒▓▓█  ░██░▒██░    ▓▓█  ░██░▒▓▓▄ ▄██▒░██▄▄▄▄██ 
    ▓█   ▓██▒▒██░   ▓██░▒▒█████▓ ░██████▒▒▒█████▓ ▒ ▓███▀ ░ ▓█   ▓██▒
    ▒▒   ▓▒█░░ ▒░   ▒ ▒ ░▒▓▒ ▒ ▒ ░ ▒░▓  ░░▒▓▒ ▒ ▒ ░ ░▒ ▒  ░ ▒▒   ▓▒█░
    ▒   ▒▒ ░░ ░░   ░ ▒░░░▒░ ░ ░ ░ ░ ▒  ░░░▒░ ░ ░   ░  ▒     ▒   ▒▒ ░
    ░   ▒      ░   ░ ░  ░░░ ░ ░   ░ ░    ░░░ ░ ░ ░          ░   ▒   
      ░  ░         ░    ░         ░  ░   ░     ░ ░            ░  ░
                                               ░                  
                                                                                                
    */
  };

  console.log(str.getMultiLine());
});

Function.prototype.getMultiLine = function () {
  var lines = new String(this);
  lines = lines.substring(lines.indexOf("/*") + 3, lines.lastIndexOf("*/"));
  return lines;
}; //窗口大小改变时的监听事件


$(window).resize(function () {
  var windowWidth = $(window).width();
  setWidth();

  if (windowWidth <= 1725) {
    hidePics();
  } else {
    showPics();
  }
}); //gitalk&valine双评论端

$(".gitalk_btn").click(function () {
  $("#vcomments").css({
    display: "none"
  });
  $("#gitalk-container").css({
    display: "block"
  });
  $(".valine_btn").css({
    color: "black"
  });
  $(".gitalk_btn").css({
    color: "blue"
  });
  $(".moving").animate({
    "width": "180px",
    "marginLeft": "120px"
  });
});
$(".valine_btn").click(function () {
  $("#gitalk-container").css({
    display: "none"
  });
  $("#vcomments").css({
    display: "block"
  });
  $(".valine_btn").css({
    color: "blue"
  });
  $(".gitalk_btn").css({
    color: "black"
  });
  $(".moving").animate({
    "width": "120px",
    "marginLeft": "0px"
  });
}); //右下角链接互动

$(".link_l").mouseenter(function () {
  $(this).stop().css({
    backgroundColor: "white"
  });
  $(this).find("span").css({
    color: "#3B3E40"
  });
  $(this).find("div").css({
    "background-position": "0 -29px"
  });
}).stop().mouseleave(function () {
  $(this).stop().css({
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    border: "0"
  });
  $(this).find("span").css({
    color: "white"
  });
  $(this).find("div").css({
    "background-position": "0 0"
  });
}); //获取右下角宽度

function setWidth() {
  var rightWidth = $(".col-2").innerWidth();
  $(".bottom").css({
    width: rightWidth
  });
} //宽度过低时对页面进行调整


function hidePics() {
  //头图切换
  $(".newGuide").hide();
  $(".backlogo").hide();
  $(".mobileimg").show(); //作品栏调整

  $(".shits>div").css({
    marginLeft: "0px"
  });
} //正常展示图片


function showPics() {
  //头图切换
  $(".newGuide").show();
  $(".mobileimg").hide();
  $(".backlogo").show();
}