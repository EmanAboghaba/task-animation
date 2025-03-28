// // =================================

var preloader = document.getElementsByClassName("preloader")[0];

window.onload = function () {
  setTimeout(function () {
    preloader.style.opacity = 0;
    preloader.style.transition = "opacity 0.3s ease";
    setTimeout(function () {
      preloader.style.display = "none";
    }, 400);
  }, 1000);
};

// =======================================

var header = document.getElementsByTagName("header")[0];
var offers = document.getElementsByClassName("offer");

console.log(offers);

window.onscroll = function () {
  if (scrollY > 440) {
    header.classList.add("fixed-bar");
    offers[0].style.animation = "fadeInUp 1.5s forwards";
    offers[1].style.animation = "fadeInUp 1.5s 0.4s forwards";
    offers[2].style.animation = "fadeInUp 1.5s 0.8s forwards";
  } else {
    header.classList.remove("fixed-bar");
  }
};

// ===================================
