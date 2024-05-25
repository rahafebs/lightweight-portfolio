/* global bootstrap: false */
(function ($) {
  "use strict";
  let id = window.location.href.split("?")[0].split("/").pop().substring(1);

  /* =================== side nav =================== */
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
  /* =================== navbar =================== */
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

  /* =================== smooth scroll =================== */
  $(".go-to").click(function () {
    let target = $("#" + $(this).data("value"));
    let targetOffset = target.offset().top - $("#navbar").outerHeight(true);
    $("html, body").animate({ scrollTop: targetOffset }, 100);
    focusNave($(this).data("value"));
    focusSideNave($(this).data("value"));
  });
  /* =================== show / hide scroll to top =================== */
  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 300) {
      $(".scroll-top").fadeIn();
    } else {
      $(".scroll-top").fadeOut();
    }
  });
  /* =================== gallery lightbox =================== */
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
      lightboxLink.text("Learn More");
      lightboxLink.attr("href", $(this).data("href"));
    }
  });
  close.click(function () {
    lightbox.fadeOut(function () {
      lightbox.css("display", "none");
      lightboxLink.css("display", "none");
    });
  });
  /* =================== projects gallery shuffle =================== */
  const projectItem = $(".project-container .item");
  $(".shuffle a").click(function (e) {
    $(this).addClass("active").siblings().removeClass("active");
    e.preventDefault();
    let type = $(this).data("value");
    projectItem.each(function () {
      let types = $(this).data("value").split(" ");
      if (jQuery.inArray(type, types) !== -1) {
        if ($(this).css("display") == "none") {
          $(this).show();
        }
      } else {
        $(this).hide();
      }
    });
  });
  /* =================== scheme color =================== */
  function light() {
    $(".mode-change .light").hide();
    $(".mode-change .dark").show();
  }
  function dark() {
    $(".mode-change .light").show();
    $(".mode-change .dark").hide();
  }
  const scheme_color = {
    dark: {
      primary_color: "#7c58d0",
      link_color: "#fff",
      link_hover_color: "#c7afff",
      link_hover_secondary_color: "#5833ad",
      secondary_color: "#eee",
      primary_bg: "#0f172a",
      secondary_bg: "#292f3b",
      primary_text: "#fff",
      active_color: "#c7afff",
      secondary_text: "#eee",
      section_gradient_bg:
        "linear-gradient(to right top, #292f3b, #242a38, #1f2634, #1a2131, #151d2e, #151d2e, #151d2e, #151d2e, #1a2131, #1f2634, #242a38, #292f3b)",
    },
    light: {
      primary_color: "#7c58d0",
      link_color: "#7c58d0",
      link_hover_color: "#0f172a",
      link_hover_secondary_color: "#0f172a",
      secondary_color: "#1a171d",
      primary_bg: "#fff",
      secondary_bg: "#fbf7ff",
      primary_text: "#0f172a",
      active_text: "#0f172a",
      secondary_text: "#4d5055",
      section_gradient_bg:
        "linear-gradient(to right top, #fbf7ff, #f6efff, #f1e7ff, #ebdfff, #e5d7ff, #e5d8ff, #e4d9ff, #e4daff, #eae3ff, #f1edff, #f8f6ff, #ffffff)",
    },
  };
  let currentMode = localStorage.getItem("theme_scheme")
    ? localStorage.getItem("theme_scheme")
    : "light";
  function detectTheme() {
    if (currentMode === "dark") {
      dark();
    } else {
      light();
    }
    change_scheme(currentMode);
  }
  detectTheme();

  function change_scheme(scheme) {
    $("body")
      .get(0)
      .style.setProperty("--primary-color", scheme_color[scheme].primary_color);
    $("body")
      .get(0)
      .style.setProperty("--link-color", scheme_color[scheme].link_color);
    $("body")
      .get(0)
      .style.setProperty(
        "--link-hover-color",
        scheme_color[scheme].link_hover_color
      );
    $("body")
      .get(0)
      .style.setProperty(
        "--link-hover-secondary-color",
        scheme_color[scheme].link_hover_secondary_color
      );
    $("body")
      .get(0)
      .style.setProperty(
        "--secondary-color",
        scheme_color[scheme].secondary_color
      );
    $("body")
      .get(0)
      .style.setProperty("--primary-bg", scheme_color[scheme].primary_bg);
    $("body")
      .get(0)
      .style.setProperty("--secondary-bg", scheme_color[scheme].secondary_bg);
    $("body")
      .get(0)
      .style.setProperty("--primary-text", scheme_color[scheme].primary_text);
    $("body")
      .get(0)
      .style.setProperty("--active-color", scheme_color[scheme].active_color);
    $("body")
      .get(0)
      .style.setProperty(
        "--secondary-text",
        scheme_color[scheme].secondary_text
      );
    $("body")
      .get(0)
      .style.setProperty(
        "--section-gradient-bg",
        scheme_color[scheme].section_gradient_bg
      );
  }

  function toggleTheme() {
    if (currentMode === "dark") {
      localStorage.setItem("theme_scheme", "light");
      currentMode = "light";
      light();
    } else {
      localStorage.setItem("theme_scheme", "dark");
      currentMode = "dark";
      dark();
    }
    change_scheme(currentMode);
  }

  $(".mode-change").click(function () {
    toggleTheme();
  });
})(jQuery);
