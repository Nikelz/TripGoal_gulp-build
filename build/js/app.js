"use strict";

var animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
  var offset = function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrolltop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrolltop,
      left: rect.left + screenLeft
    };
  };

  var animOnScroll = function animOnScroll() {
    for (var index = 0; index < animItems.length; index++) {
      var animItem = animItems[index];
      var animItemHeight = animItem.offsetHeight;
      var animItemOffset = offset(animItem).top;
      var animStart = 3;
      var animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('no-anim')) {
          animItem.classList.remove('_active');
        }
      }
    }
  };

  window.addEventListener('scroll', animOnScroll);
  setTimeout(function () {
    animOnScroll();
  }, 1000);
}

;

if (document.querySelector('.location-slider')) {
  new Splide('.location-slider', {
    classes: {
      arrows: 'splide__arrows rooms-slider__controls',
      prev: 'splide__arrow--prev slider-arrow_prev',
      next: 'splide__arrow--next slider-arrow_next'
    },
    pagination: false,
    perPage: 3,
    gap: 30,
    breakpoints: {
      1024: {
        perPage: 2,
        perMove: 2,
        gap: 10
      },
      580: {
        perPage: 1,
        perMove: 1,
        focus: 'center'
      }
    }
  }).mount();
}

;

if (document.querySelector('.testimonials-slider')) {
  new Splide('.testimonials-slider', {
    pagination: true,
    arrows: false,
    type: 'loop',
    perPage: 1
  }).mount();
}

;

if (document.querySelector('.social-feed__slider')) {
  new Splide('.social-feed__slider', {
    pagination: false,
    arrows: false,
    type: 'loop',
    perPage: 1,
    autoplay: true,
    gap: 25,
    start: 1,
    focus: 'center',
    autoWidth: true,
    interval: 0,
    speed: 20000,
    easing: 'linear'
  }).mount();
}

;
;

window.onload = function () {
  // Menu Burger
  var navButton = document.querySelector('.menu-icon');

  if (navButton) {
    var nav = document.querySelector('.header__nav');
    navButton.addEventListener("click", function (e) {
      navButton.classList.toggle('_active');

      if (!nav.classList.contains('header__nav--active')) {
        nav.classList.add('header__nav--active');
      } else {
        nav.classList.remove('header__nav--active');
      }
    });
  }

  ;

  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;

      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  } // DropDown Menu


  document.querySelectorAll(".booking-dropdown").forEach(function (dropDownWrapper) {
    var dropDownBtn = dropDownWrapper.querySelector(".booking-dropdown__btn");
    var dropDownList = dropDownWrapper.querySelector(".booking-dropdown__list");
    var dropDownListItems = dropDownList.querySelectorAll(".booking-dropdown__item");
    var dropDownSelected = dropDownWrapper.querySelector(".booking-dropdown__selected");
    var dropDownInput = dropDownWrapper.querySelector(".dropdown__input-hidden");
    dropDownBtn.addEventListener("click", function (e) {
      dropDownList.classList.toggle("_active");
      this.classList.add("_active");
    });
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation();
        dropDownSelected.innerHTML = this.innerText;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove("_active");
      });
    });
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("_active");
        dropDownList.classList.remove("_active");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("_active");
        dropDownList.classList.remove("_active");
      }
    });
  }); // Popup Video

  if (document.querySelector(".popup")) {
    var openVideo = function openVideo() {
      popup.classList.add("active");
      video.setAttribute("src", "video/videoplayback.mp4");
      setTimeout(function () {
        video.play();
      }, 1000);
    };

    var closeVideo = function closeVideo() {
      popup.classList.remove("active");
      video.setAttribute("src", "/");
      setTimeout(function () {
        video.pause();
        video.currentTime = 0;
      }, 400);
    };

    var popup = document.querySelector('.popup');
    var openPopup = document.querySelector('.popup-open');
    var closePopup = document.querySelector('.popup__close');
    var video = document.querySelector('.video');
    openPopup.addEventListener("click", function (e) {
      openVideo();
    });
    closePopup.addEventListener("click", function (e) {
      closeVideo();
    });
    document.getElementById("video-popup").addEventListener("click", function (e) {
      if (!e.target.closest(".popup__body")) {
        closeVideo();
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        closeVideo();
      }
    });
  }
};