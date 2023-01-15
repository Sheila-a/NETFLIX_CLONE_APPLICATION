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

// slider
var homeHeroFlexInner = document.getElementById("home-hero-flex-inner");
var slidess = homeHeroFlexInner.getElementsByClassName("hero-slides");
function next() {
  homeHeroFlexInner.append(slidess[0]);
}
// var currentIndex = 1;
// displaySlides(currentIndex);

// function setSlides(num) {
//   displaySlides((currentIndex += num));
// }

// function displaySlides(num) {
//   var k;
//   var slides = document.getElementsByClassName("hero-slides");
//   if (num > slides.length) {
//     currentIndex = 1;
//   }
//   if (num < 1) {
//     currentIndex = slides.length;
//   }
//   for (k = 0; k < slides.length; k++) {
//     slides[k].style.display = "none";
//   }
//   slides[currentIndex - 1].style.display = "block";
// }
