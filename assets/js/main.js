/* global bootstrap: false */
(function ($) {
  "use strict";
  /* =================== loader =================== */
  $(window).on("load", function () {
    $("#loader-overlay").fadeOut("slow");
  });
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
    let y = $(this).scrollTop();
    if (y > 300) {
      $(".scroll-top").fadeIn(200);
      $(".side-nav").addClass("slide");
    } else {
      $(".scroll-top").fadeOut(200);
      $(".side-nav").removeClass("slide");
    }
  });

  /* =================== gallery lightbox =================== */
  const projects = {
    sari: {
      title: "SARI - Multipurpose Blogging WordPress Theme",
      href: "https://itechonics.com/",
      type: "web",
      tags: ["Web Design", "Web Development", "wordpress"],
      images: [
        "assets/images/project/sari/01.avif",
        "assets/images/project/sari/02.avif",
        "assets/images/project/sari/03.avif",
        "assets/images/project/sari/04.avif",
        "assets/images/project/sari/05.avif",
        "assets/images/project/sari/06.avif",
      ],
      description:
        "SARI is a versatile and feature-rich blog theme designed for multiple authors. \
      It boasts a full-width header with an interactive slider to showcase featured posts and topics. \
      This theme is highly customizable, making it suitable for various blog niches including technology, \
      fashion, travel, food, and photography. SARI is translation-ready and supports right-to-left (RTL) languages, \
      offering both light and dark modes for a personalized experience. \
      Take advantage of SARI's promo boxes feature to display advertisements or highlight popular posts. \
      Additionally, customizable widgets and an integrated contact form enhance user engagement. \
      By integrating Google reCAPTCHA v3, SARI helps prevent messaging and commenting spam effectively.",
    },
    kremsi: {
      title: "Kremsi - Wordpress Agency Theme",
      href: "https://alnahdalarabia.com/en",
      embed: "",
      type: "web",
      tags: ["Web Design", "Web Development", "wordpress"],
      images: [
        "assets/images/project/kremsi/01.avif",
        "assets/images/project/kremsi/02.avif",
        "assets/images/project/kremsi/03.avif",
        "assets/images/project/kremsi/04.avif",
        "assets/images/project/kremsi/05.avif",
      ],
      description:
        "Kremsi is a feature-rich agency theme designed for multiple authors, offering ample customization options. \
      It includes a full-width header with an interactive slider to showcase featured projects and topics. \
      Suitable for agency niches like real estate and commercial, Kremsi is translation-ready and supports right-to-left (RTL) languages. \
      The theme also features customizable widgets, an integrated contact form, job and rating applications. \
      By integrating Google reCAPTCHA v3, Kremsi effectively prevents messaging spam. \
      Developed for Alnahda Al-Arabiah Attijaria Company, Kremsi is tailored to meet the needs of modern agencies.",
    },
    syshop: {
      title: "SyriaShops Website",
      href: "",
      embed: "",
      type: "web",
      tags: ["Web Design", "Web Development"],
      images: [
        "assets/images/project/syshop/01.avif",
        "assets/images/project/syshop/02.avif",
        "assets/images/project/syshop/03.avif",
        "assets/images/project/syshop/04.avif",
        "assets/images/project/syshop/05.avif",
        "assets/images/project/syshop/06.avif",
        "assets/images/project/syshop/07.avif",
      ],
      description:
        "SyriaShops is a cutting-edge E-Commerce platform that offers users a comprehensive selection of \
      products, stores, and exclusive deals. Our goal is to streamline the shopping experience for customers by providing a \
      diverse range of options to meet their daily purchasing needs. Additionally, we empower stores to effectively showcase \
      their brands and reach a wider audience of customers with ease and flexibility. With SyriaShops, \
      convenience and accessibility are at the forefront of our mission to enhance the online shopping experience for all.",
    },
    yeni: {
      title: "YENI - Portfolio WordPress Theme",
      href: "",
      embed: "",
      type: "web",
      tags: ["Web Design", "Web Development", "wordpress"],
      images: [
        "assets/images/project/yeni/01.avif",
        "assets/images/project/yeni/02.avif",
        "assets/images/project/yeni/03.avif",
        "assets/images/project/yeni/04.avif",
        "assets/images/project/yeni/05.avif",
        "assets/images/project/yeni/06.avif",
        "assets/images/project/yeni/07.avif",
        "assets/images/project/yeni/08.avif",
      ],
      description:
        "YENI is a versatile and feature-rich portfolio theme designed for multi-purpose use. \
        Highly customizable, it caters to a wide range of users. \
        With both light and dark modes available for a personalized touch, customizable widgets, \
        ready-to-use blocks, and an integrated contact form enhance user engagement. \
        Integration of Google reCAPTCHA v3 effectively prevents messaging and commenting spam.",
    },
    soul: {
      title: "Islamic Videos Design",
      href: "https://www.youtube.com/playlist?list=PLKN9mLJOZBdUh_QyVcl8zWW_5CUxZbOBh",
      embed:
        "https://www.youtube.com/embed/videoseries?si=4dPVFXsprjOqHopv&amp;list=PLKN9mLJOZBdUh_QyVcl8zWW_5CUxZbOBh&rel=0",
      type: "video",
      tags: ["Video Design"],
      images: [],
      description: null,
    },
    promo: {
      title: "Promotional Video Design",
      href: "https://www.youtube.com/playlist?list=PLKN9mLJOZBdVOvtLYBFgva3mlkhXmfGiD",
      embed:
        "https://www.youtube.com/embed/videoseries?si=tB0qhnjN6XEPz4eu&amp;list=PLKN9mLJOZBdVOvtLYBFgva3mlkhXmfGiD&rel=0",
      type: "video",
      tags: ["Video Design"],
      images: [],
      description: null,
    },
  };
  $(".project-image img").each(function () {
    $(this).on("load", function () {
      $(this).parent(".project-image").children(".img-loader-overlay").hide();
    });
  });
  const lightbox = $(".lightbox"),
    close = $(".close"),
    info = $(".pro-desc"),
    showInfo = $(".show-desc"),
    hideInfo = $(".close-desc"),
    lightboxImg = lightbox.children(".image-box").children("img"),
    lightboxTitle = lightbox.children(".image-box").find("h2"),
    lightboxLink = lightbox.children(".image-box").find("a"),
    lightboxEmbed = lightbox
      .children(".image-box")
      .children(".embed-container"),
    lightboxIframe = lightbox
      .children(".image-box")
      .children(".embed-container")
      .find("iframe"),
    galleryItem = $(".project-container .item-link"),
    lightBoxIcons = $(".lightbox .images-icons"),
    lightBoxIcon = $(".lightbox .images-icons .icon-box img");

  lightboxLink.css("display", "none");
  galleryItem.click(function (e) {
    e.preventDefault();
    const id = $(this).data("id");
    lightbox.css("display", "flex");
    lightboxImg.attr("src", e.target.src);
    lightboxTitle.text(projects[id].title);
    lightBoxIcons.css("display", "flex");
    let lightBoxIconsHtml =
      '<div class="icon-box active"><img src="' +
      e.target.src +
      '" alt="project image" width="50" height="50" data-type="web"></div>';

    if (projects[id].images.length > 0) {
      for (const imageIndex in projects[id].images) {
        lightBoxIconsHtml +=
          '<div class="icon-box"><img src="' +
          projects[id].images[imageIndex] +
          '" alt="project image" width="50" height="50" data-type="' +
          projects[id].type +
          '"></div>';
      }
    } else {
      lightBoxIconsHtml +=
        '<div class="icon-box"><img src="assets/images/project/video.avif" alt="project image" width="50" height="50" data-type="' +
        projects[id].type +
        '" data-embed="' +
        projects[id].embed +
        '"></div>';
    }
    lightBoxIcons.html(lightBoxIconsHtml);
    if (projects[id].href != "") {
      lightboxLink.css("display", "block");
      lightboxLink.text("Learn More");
      lightboxLink.attr("href", projects[id].href);
    }
    if (projects[id].description !== null) {
      info.find("p").text(projects[id].description);
      showInfo.show();
    }
  });
  function closeLightBox() {
    lightbox.fadeOut(function () {
      lightbox.css("display", "none");
      lightboxLink.css("display", "none");
      lightboxImg.attr("src", "");
      lightboxImg.show();
      lightboxTitle.text("");
      lightBoxIcons.html("");
      lightboxEmbed.hide();
      lightboxIframe.attr("src", "");
      info.find("p").text("");
      showInfo.hide();
    });
  }
  close.click(function () {
    closeLightBox();
  });
  showInfo.click(function () {
    info.fadeIn(200);
  });
  $(document).on("click", function (event) {
    if (!$(event.target).closest(".desc-box").length) {
      info.fadeOut(200);
    }
  });
  hideInfo.click(function () {
    info.fadeOut(200);
  });
  $("body").on("click", lightBoxIcon, function (e) {
    if ($(e.target).data("type") === "web") {
      lightboxImg.show();
      lightboxImg.attr("src", e.target.src);
      lightboxEmbed.hide();
    } else if ($(e.target).data("type") === "video") {
      lightboxImg.attr("src", "");
      lightboxImg.hide();
      lightboxEmbed.show();
      lightboxIframe.attr("src", $(e.target).data("embed"));
    }
    $(e.target)
      .parent(".icon-box")
      .addClass("active")
      .siblings()
      .removeClass("active");
  });

  /* =================== projects gallery shuffle =================== */
  const projectItem = $(".project-container .item .item-link");
  $(".shuffle a").click(function (e) {
    $(this).addClass("active").siblings().removeClass("active");
    e.preventDefault();
    let type = $(this).data("value");
    projectItem.each(function () {
      let types = String($(this).data("value")).split(" ");
      if (jQuery.inArray(type, types) !== -1) {
        if ($(this).parent().css("display") === "none") {
          $(this).parent().fadeIn(100);
        }
      } else {
        $(this).parent().hide();
      }
    });
  });

  /* =================== testimonials =================== */
  const leftArrow = $(".testim-container .left"),
    rightArrow = $(".testim-container .right");

  function checkClients() {
    if ($(window).width() > 767) {
      $(".client:first").hasClass("active")
        ? leftArrow.hide()
        : leftArrow.show();
      $(".client:last").hasClass("active")
        ? rightArrow.hide()
        : rightArrow.show();
    }
  }
  checkClients();
  $(".testim-container .arrow").click(function () {
    if ($(this).hasClass("right")) {
      $(".testim-container .active").fadeOut(100, function () {
        $(this)
          .removeClass("active")
          .next(".client")
          .addClass("active")
          .fadeIn();
        checkClients();
      });
    } else {
      $(".testim-container .active").fadeOut(100, function () {
        $(this)
          .removeClass("active")
          .prev(".client")
          .addClass("active")
          .fadeIn();
        checkClients();
      });
    }
    window.clearInterval();
  });
  function autoSlideTestime() {
    $(".testim-container .active").fadeOut(100, function () {
      if ($(this).next(".client").length > 0) {
        $(this)
          .removeClass("active")
          .next(".client")
          .addClass("active")
          .fadeIn();
      } else {
        $(this)
          .removeClass("active")
          .parent()
          .find(">:first-child")
          .addClass("active")
          .fadeIn();
      }
      checkClients();
    });
  }
  window.setInterval(autoSlideTestime, 8000);

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
