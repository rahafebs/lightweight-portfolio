/* global bootstrap: false */
(function ($) {
  "use strict";
  let id = window.location.href.split("?")[0].split("/").pop().substring(1);

  /* ----------- side nav ------------ */
  function focusSideNave(id) {
    let focused = false;
    $(".side-nav a").each(function () {
      $(this).removeClass("active");
      if ($(this).data("value") === id) {
        $(this).addClass("active").siblings().removeClass("active");
        focused = true;
      }
      if (!focused) {
        $(".side-nav").find(">:first-child").addClass("active");
      }
    });
  }
  focusSideNave(id);
  $("#toggle").on("click", function () {
    processMenu(200);
  });
  // focus side nav on scroll
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
  /* ----------- navbar ------------ */
  function focusNave(id) {
    $(".nav-link").each(function () {
      $(this).removeClass("active");
      if ($(this).data("value") === id) {
        $(this).addClass("active").siblings().removeClass("active");
      }
    });
  }
  focusNave(id);
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
  /* ----------- show / hide scroll to top ------------ */
  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 300) {
      $(".scroll-top").fadeIn();
    } else {
      $(".scroll-top").fadeOut();
    }
  });
  /* ----------- gallery lightbox ------------ */
  const lightbox = $(".lightbox");
  const close = $(".close");
  const lightboxImg = lightbox.children(".image-box").children("img");
  const lightboxTitle = lightbox.children(".image-box").children("h2");
  const lightboxLink = lightbox.children(".image-box").children("a");
  const galleryItem = $(".project-container a");
  galleryItem.click(function (e) {
    e.preventDefault();
    lightbox.css("display", "flex");
    lightbox.fadeIn();
    lightboxImg.attr("src", e.target.src);
    lightboxTitle.text($(this).data("title"));

    if ($(this).data("href") != "") {
      lightboxLink.css("display", "block");
      lightboxLink.text("Lear More");
      lightboxLink.attr("href", $(this).data("href"));
    }
  });
  close.click(function () {
    lightbox.fadeOut(function () {
      lightbox.css("display", "none");
      lightboxLink.css("display", "none");
    });
  });
})(jQuery);
