var swiper = new Swiper(".utp-slider", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-1",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1440: {
      slidesPerView: 5,
    },
  },
});
var swiper = new Swiper(".review-slider", {
  slidesPerView: 2.5,
  slidesPerGroup: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination-cust",
  },
  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-1",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2.5,
    },
    1440: {
      slidesPerView: 2.5,
    },
  },
});
var swiper = new Swiper(".review2-slider", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination-cust-2",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1439: {
      slidesPerView: 3,
    },
  },
});
var swiper = new Swiper(".offices-slider", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination-cust-3",
  },
  navigation: {
    nextEl: ".swiper-button-next-3",
    prevEl: ".swiper-button-prev-2",
  },
});

$(function() {
    //caches a jQuery object containing the header element
    var menu = $(".menu");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 5) {
            menu.addClass("bg-dark shadow-lg");
        } else {
            menu.removeClass("bg-dark shadow-lg");
        }
    });
});

$(".navbar-toggler").on('click', function(){
  var menu = $(".menu");
  menu.addClass("bg-dark");
});
