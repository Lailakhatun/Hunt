$(function () {

  'use strict';

  // banner slider
  $('.banner_image').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
    nextArrow: '<i class="fa-solid fa-arrow-right nexta"></i>',
    prevArrow: '<i class="fa-solid fa-arrow-left preva"></i>'
  });

  // headline js
  $('.selector').animatedHeadline();

  // protfolio venobox
  new VenoBox({
    selector: '.venobox',
    spinner: 'wave',
    spinColor: '#000'
  });

  // testimonial slider
  $('.first_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.second_slider',
  });
  $('.second_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.first_slider',
    dots: true,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: 0,
  });

  // counter up
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });


  // logo
  $('.logo-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  // pre-loader start
  $(window).on('load', function () {
    $('.pre-loader').delay(1000).fadeOut();
  });
  
  // scroll smooth
  $("a").on('click', function (event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html,body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });

  // Back to top button
  // Back to top button
  $('.back-to-top').on('click', function () {
    $('html,body').animate({
      scrollTop: 0,
    }, 1000);
  });
  $(window).on('scroll', function () {
    var scrolling2 = $(this).scrollTop();

    if (scrolling2 > 200) {
      $('.back-to-top').fadeIn();

    } else {
      $('.back-to-top').fadeOut()
    }

  });

  // scrollify
  $.scrollify({
    section: ".scrollify",
    scrollSpeed: 500,
    setHeights: false,
    updateHash: false,
    scrollbars: false,
    overflowScroll: false,
  });

  // sticky menu
  var navOff = $('.top_menu').offset().top;

  $(window).on('scroll', function () {
    var scrolling = $(this).scrollTop();
    if (scrolling > navOff) {
      $('.top_menu').addClass('menu-fix');
    } else {
      $('.top_menu').removeClass('menu-fix');
    }
  });

});





// java script code

function closeMenu() {
  document.getElementById('navbar').style.height = "0%"
}

function openMenu() {
  document.getElementById('navbar').style.height = "100%"
}