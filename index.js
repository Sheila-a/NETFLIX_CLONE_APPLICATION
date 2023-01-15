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
