/* global bootstrap: false */
(function ($) {
  "use strict";
  /* ----------- navbar ------------ */
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
  $("#toggle").on("click", function () {
    processMenu(200);
  });
  $(document).on("click", function (event) {
    if (!$(event.target).closest("#navbar").length) {
      processMenu(200, true);
    }
  });
  /* ----------- smooth scroll ------------ */
  $(".go-to").click(function () {
    let target = $("#" + $(this).data("value"));
    let targetOffset = target.offset().top - $("#navbar").outerHeight(true);
    console.log(targetOffset);
    $("html, body").animate({ scrollTop: targetOffset }, 100);
  });
})(jQuery);
