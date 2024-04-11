// Animate Width On Scrolling

let section = document.querySelector(".three");
let spnas = document.querySelectorAll(".progress span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 100) {
    spnas.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};
