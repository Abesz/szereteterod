//sidenav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

//Parallax
$(document).ready(function(){
  $('.parallax').parallax();
});

$('.scrollspy').scrollSpy();
