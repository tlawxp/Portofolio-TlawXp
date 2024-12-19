let btnOpen = document.getElementById("btn-open");
let btnClose = document.getElementById("btn-close");
let sidebar = document.getElementById("bg-sidebar");
let text = document.getElementById("text");
let navbar = document.getElementById("navbar");

btnOpen.onclick = () => {
  sidebar.style.display = "block";
  sidebar.style.animation = "btnOpen .5s ease forwards alternate";
}
btnClose.onclick = () => {
  sidebar.style.animation = "btnClose .5s ease forwards alternate";
}
window.addEventListener("scroll", () => {
  let valueY = window.scrollY;
  /* text.style.marginLeft = valueY * 1 + "px"; */
  if (valueY > 200) {
    navbar.style.animation = "Animasinavbar .5s ease forwards alternate";
    navbar.style.position = "fixed";
  } else if (valueY < 10) {
    navbar.style.position = "inherit";
    navbar.style.animation = "none";
  }
})
