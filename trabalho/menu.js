const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const menuIcon = document.querySelector(".menuIcon");


function toggleMenu() {
    console.log('clicou')
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      hamburger.classList.remove("corBranca");
    } else {
      menu.classList.add("showMenu");
      hamburger.classList.add("corBranca");
    }
  }


  hamburger.addEventListener("click", toggleMenu);
