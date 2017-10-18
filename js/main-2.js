
var $closemenu = $('.close-menu');
var $menu = $('.menu');
var $openmenu = $('.open-menu');
var $nav = $('.nav-2');

window.onload = hiddenMenu;

$closemenu.click(function() {
    $menu.hide();
});

$openmenu.click(function() {
  showMenu();
});

function hiddenMenu() {
  $menu.hide();
};

function showMenu() {
  $menu.show();
}
