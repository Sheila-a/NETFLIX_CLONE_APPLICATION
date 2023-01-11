var iccon = document.getElementById("iccon");

iccon.onclick = function () {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    iccon.src = "assets/icons/moon.png";
    // iccon.style = "background-color: white";
  } else {
    iccon.src = "assets/icons/sun.png";
    iccon.style = "background-color: none";
  }
};
