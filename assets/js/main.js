/* global bootstrap: false */
(function ($) {
  "use strict";
  let id = window.location.href.split("?")[0].split("/").pop().substring(1);
  function processMenu(speed, outer = false) {
    const menu = $("#nav-menu");
    if (menu.length) {
      if (menu.hasClass("show")) {
        menu.removeClass("show");
      } else {
        if (!outer) {
          menu.slideDown(speed);
          menu.addClass("show");
        }
      }
    }
  }

  function focusNave(id) {
    $(".nav-link").each(function () {
      $(this).removeClass("active");
      if ($(this).data("value") === id) {
        $(this).addClass("active").siblings().removeClass("active");
      }
    });
  }
  focusNave(id);
  function focusSideNave(id) {
    $(".side-nav a").each(function () {
      $(this).removeClass("active");
      if ($(this).data("value") === id) {
        $(this).addClass("active").siblings().removeClass("active");
      }
    });
  }
  focusSideNave(id);
  $("#toggle").on("click", function () {
    processMenu(200);
  });
  /* ----------- navbar ------------ */

  $(document).on("click", function (event) {
    if (!$(event.target).closest("#navbar").length) {
      processMenu(200, true);
    }
  });

  /* ----------- smooth scroll ------------ */
  $(".go-to").click(function () {
    let target = $("#" + $(this).data("value"));
    let targetOffset = target.offset().top - $("#navbar").outerHeight(true);
    // console.log(targetOffset);
    $("html, body").animate({ scrollTop: targetOffset }, 100);
    focusNave($(this).data("value"));
    focusSideNave($(this).data("value"));
  });
  
  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 300) {
      $(".scroll-top").fadeIn();
    } else {
      $(".scroll-top").fadeOut();
    }
  });
  let section = document.querySelectorAll("section");
window.onscroll = () => {
  section.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 200;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
          focusNave(id);
          focusSideNave(id);
      }
  });
};
})(jQuery);
