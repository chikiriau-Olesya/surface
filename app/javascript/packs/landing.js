///bURGER MENU
let btnOpen = document.querySelector('.landing-header')
let menu = document.querySelector('.landing-header__menu')
let links = document.getElementsByClassName('header__menu__links')

//add class for open/close menu
function toggleMenu() {
  btnOpen.classList.toggle('landing-header-active')
}
btnOpen.onclick = function() {
    menu.style.transition = 'all .33s linear;'
    toggleMenu()
}
//add class for close menu for links in menu
for (var i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    toggleMenu()
  }
}
