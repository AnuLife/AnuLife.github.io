function playChangeAnime(type) {
  if (type === "light" && sessionStorage.getItem("theme") !== "light") {
    //最光发光
    $("#nike_shine").animate({ bottom: $("html").height() / 2 - 200 }, 1000);
    $("#shine").animate({ bottom: $("html").height() / 2 - 50 }, 1000);
    $("#shine")
      .delay(200)
      .animate(
        {
          opacity: 1,
          width: $("html").width(),
          height: $("html").height(),
          bottom: 0,
          left: 0,
        },
        1000
      );
    // $("#shine").rotate({animateTo:180});
    $("#cantSeeAnything_white").delay(1000).css({ display: "block" });
    $("#cantSeeAnything_white")
      .delay(800)
      .animate({ display: "block", opacity: 1 }, 500);
    //清除动画
    $("#nike_shine").delay(1400).animate({ bottom: "-400px" }, 0);
    $("#shine")
      .delay(200)
      .animate(
        {
          opacity: 0,
          bottom: "-100px",
          left: $("html").width() / 2 - 20,
          width: 100,
          height: 100,
        },
        50
      );
    $("#cantSeeAnything_white").animate({ opacity: 0 }, 1200);
    setTimeout(() => {
      $("#cantSeeAnything_white").css({ display: "none" });
    }, 3500);
  } else if (type === "dark") {
    //最光发光
    $("#nike_dark").animate({ bottom: $("html").height() / 2 - 200 }, 1000);
    $("#absorb").animate({ bottom: 0 }, 1000);
    $("#absorb").animate({ opacity: 1 }, 200, "swing");
    $("#absorb").animate(
      {
        opacity: 1,
        bottom: $("html").height() / 2 - 100,
        left: $("html").width() / 2 - 100,
        width: 200,
        height: 200,
      },
      1000,
      "swing"
    );
    // $("#shine").rotate({animateTo:180});
    $("#cantSeeAnything_black").delay(700).css({ display: "block" });
    $("#cantSeeAnything_black")
      .delay(700)
      .animate({ display: "block", opacity: 1 }, 900);
    //清除动画
    $("#nike_dark").delay(1200).animate({ bottom: "-400px" }, 0);
    $("#absorb")
      .delay(200)
      .animate(
        {
          bottom: -$("html").height(),
          left: 0,
          width: $("html").width(),
          height: $("html").height(),
          opacity: 0,
        },
        0
      );
    $("#cantSeeAnything_black").animate({ opacity: 0 }, 1200);
    setTimeout(() => {
      $("#cantSeeAnything_black").css({ display: "none" });
    }, 3300);
  }
}

function toOldSite() {
  window.location.href = "/1840";
}
