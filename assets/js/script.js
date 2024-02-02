// Jquery


//---------- hamburgur --------
$(".hamburger").click(function() {
  $(".hamburger").toggleClass("is-active");
  $(".menu").toggleClass("is-active");

  if ($(".menu").hasClass("is-active")) {
      $("body").css("overflow", "hidden");
  } else {
      $("body").css("overflow", "auto");
  }
});

//---------- search box--------
$(document).click(function (event) {
if ($(event.target).closest(".search-box, .search").length) {
  return;
}

if ($(".search-box").hasClass("is-active")) {
  $(".search").removeClass("is-active");
  $(".search-box").removeClass("is-active");
}
});

$(".search").click(function (event) {
event.stopPropagation();

$(".search").toggleClass("is-active");
$(".search-box").toggleClass("is-active");

});

$(".keyword-close").click(function () {

if ($(".search-box").hasClass("is-active")) {
  $(".search").removeClass("is-active");
  $(".search-box").removeClass("is-active");
}
});


var lastScrollTop = 0;

$(window).scroll(function () {
var currentScrollTop = $(this).scrollTop();

if (
  currentScrollTop > lastScrollTop &&
  currentScrollTop - lastScrollTop >= 100
) {
  if ($(".search-box").hasClass("is-active")) {
    $(".search-box").removeClass("is-active");
    $(".search").removeClass("is-active");
  }
  lastScrollTop = currentScrollTop;
} else if (currentScrollTop < lastScrollTop) {
  lastScrollTop = currentScrollTop;
}
});


// -----smart phone modal acordion-----

$(document).ready(function () {
$(".menu-left-title, .menu-tag-title").on("click", function (e) {
  e.stopPropagation();

  if ($(window).width() <= 768) {
    const target = $($(this).data("target"));
    target.slideToggle();

    $(this).parent(".menu-item").toggleClass("is-open");
  }
});
});


document.addEventListener("DOMContentLoaded", function () {
var tagsContainer = document.getElementById("tagsContent");
var showMore = document.querySelector(".show-more");
var hideTags = document.querySelector(".hide-tags");

showMore.addEventListener("click", function (e) {
  e.preventDefault();
  tagsContainer.style.maxHeight = "none";
  showMore.style.display = "none";
  hideTags.style.display = "inline-block";
});

hideTags.addEventListener("click", function (e) {
  e.preventDefault();
  tagsContainer.style.maxHeight = "14em";
  hideTags.style.display = "none";
  showMore.style.display = "inline-block";
});
});


// ---------header menu-----------

$(document).ready(function () {
var lastScrollTop = 0;
$(window).on("scroll", function () {
  var scrollTop = $(this).scrollTop();
  if (scrollTop > lastScrollTop && scrollTop - lastScrollTop >= 200) {
    $("header").addClass("hidden");
    lastScrollTop = scrollTop;
  } else if (scrollTop < lastScrollTop) {
    $("header").removeClass("hidden");
    lastScrollTop = scrollTop;
  }
});
});

// ---------- Slider ------------
$('.slide-nav').on('click', function(e) {
  e.preventDefault();
  // get current slide
  var current = $('.flex--active').data('slide'),
    // get button data-slide
    next = $(this).data('slide');

  $('.slide-nav').removeClass('active');
  $(this).addClass('active');

  if (current === next) {
    return false;
  } else {
    $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
    $('.flex--active').addClass('animate--end');
    setTimeout(function() {
      $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
      $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
    }, 800);
  }
});

// ---------- to top --------
$(document).ready(function() {
$(window).scroll(function() {
  if ($(this).scrollTop() > 600) {
      $('#backToTop').fadeIn();
  } else {
      $('#backToTop').fadeOut();
  }
});

$('#backToTop').click(function() {
  $('html, body').animate({
      scrollTop: 0
  }, 600); //
  return false;
});
});

// ---------category------------

$(document).ready(function () {
$('div[data-content="content-1"]').fadeIn().addClass("active");
$(".category-btn").on("click", function () {
  
  $(".category-content.active").fadeOut(function () {
    $(this).removeClass("active");
  });

  $(".category-btn").removeClass("active");

  $(this).addClass("active");

  var targetContent = $(this).data("content");
  $('div[data-content="' + targetContent + '"]')
    .delay(400)
    .fadeIn()
    .addClass("active");
});
});


// ----------tag-------------
$(document).ready(function() {
$(".hide-tags-tag").hide();

$(".show-more-tag").click(function() {
  $(".tags-container-items").css("max-height", "none");
  $(this).hide();
  $(".hide-tags-tag").show();
  return false;
});

$(".hide-tags-tag").click(function() {
  $(".tags-container-items").css("max-height", "4em");
  $(this).hide();
  $(".show-more-tag").show();
  return false; 
});
});

// -----tag list-------
$(document).ready(function () {
$(".hide-tags-link").hide();

$(".show-more-list").click(function () {
  $(".tags-list-items").css("max-height", "none");
  $(this).hide();
  $(".hide-tags-link").show();
  return false;
});

$(".hide-tags-link").click(function () {
  $(".tags-list-items").css("max-height", "4em");
  $(this).hide();
  $(".show-more-list").show();
  return false;
});
});


// -------Contact---------
$(document).ready(function(){
   $(".contact-btn").hover(
       function(){
           $(".contact").addClass("hovered");
       },
       function(){
          $(".contact").removeClass("hovered");
       }
   );
});


// swiper------
$(document).ready(function () {
initSwiper();
})

  var swiper = new Swiper('.mySwiper', {
  speed: 1500,
  loop: true,
  loopedSlides: 2,
  centeredSlides: true,
  slidesPerView: 1.3,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {

    577: {
        slidesPerView: 2.2,
        spaceBetween: 15
    },

    769: {
        slidesPerView: 2.8,
        spaceBetween: 15
    },

    992: {
        slidesPerView: 3.8,
        spaceBetween: 20
    },

    1200: {
      slidesPerView: 3.8,
        spaceBetween: 40
    }
  }
});


// category-list

 $(document).ready(function () {
   $(".category-card-btn").on("click", function (e) {
     e.preventDefault();

     $(".category-card-btn").removeClass("active");

     $(this).addClass("active");
   });
 });

