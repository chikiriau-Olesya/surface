///bURGER MENU
let btnOpen = document.querySelector('.admin-actions-menu')
let menu = document.querySelector('.admin-links')
// btnOpen.onclick = function(){
//    menu.style.display = 'block'
//  }

 function toggleMenu() {
   btnOpen.classList.toggle('admin-actions-menu-active')
 }
 btnOpen.onclick = function() {
     menu.style.transition = 'all .0s linear'
     toggleMenu()
 }
