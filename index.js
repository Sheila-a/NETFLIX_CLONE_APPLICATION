// theme settings
var iccon = document.getElementById("iccon");

iccon.onclick = function () {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    iccon.src = "assets/icons/moon.png";
  } else {
    iccon.src = "assets/icons/sun.png";
    iccon.style = "background-color: none";
  }
};

// theme for hidde-me
var iccon2 = document.getElementById("iccon2");

iccon2.onclick = function () {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    iccon2.src = "assets/icons/moon.png";
  } else {
    iccon2.src = "assets/icons/sun.png";
    iccon2.style = "background-color: none";
  }
};

// theme for iccon3
var iccon3 = document.getElementById("iccon3");

iccon3.onclick = function () {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    iccon3.src = "assets/icons/moon.png";
  } else {
    iccon3.src = "assets/icons/sun.png";
    iccon3.style = "background-color: none";
  }
};

// faq dropdown
var acc = document.getElementsByClassName("FAQ-list");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// slider 1
var homeHeroFlexInner = document.getElementById("home-hero-flex-inner");
var slidess = homeHeroFlexInner.getElementsByClassName("hero-slides");
function next() {
  homeHeroFlexInner.append(slidess[0]);
}

// slider 2
var homeHeroFlexInner2 = document.getElementById("home-hero-flex-inner2");
var slidess = homeHeroFlexInner2.getElementsByClassName("hs2");
function next2() {
  homeHeroFlexInner2.append(slidess[0]);
}

// slider 3
var homeHeroFlexInner3 = document.getElementById("home-hero-flex-inner2");
var slidess = homeHeroFlexInner3.getElementsByClassName("hs2");
function next3() {
  homeHeroFlexInner3.append(slidess[0]);
}

// hamburger
// const menu = document.querySelector(".menu");
// const menuItems = document.querySelectorAll(".menuItem");
// const hamburger = document.querySelector(".hamburger");
// const closeIcon = document.querySelector(".closeIcon");
// const menuIcon = document.querySelector(".menuIcon");

// function toggleMenu() {
//   if (menu.classList.contains("showMenu")) {
//     menu.classList.remove("showMenu");
//     closeIcon.style.display = "none";
//     menuIcon.style.display = "block";
//   } else {
//     menu.classList.add("showMenu");
//     closeIcon.style.display = "block";
//     menuIcon.style.display = "none";
//   }
// }

// hamburger.addEventListener("click", toggleMenu);

// menuItems.forEach(function (menuItem) {
//   menuItem.addEventListener("click", toggleMenu);
// });
// window.onload = function () {
//   // window.addEventListener("scroll", function(e){
//   //   if(window.scrollX > 100){
//   //     this.document.querySelector("header").classList.add()
//   //   }
//   // })

const hed_btn = document.querySelector(".burg");

hed_btn.addEventListener("click", function () {
  hed_btn.classList.toggle("is-active");
});
// };
