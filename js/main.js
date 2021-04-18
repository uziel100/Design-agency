const $menu = document.querySelector('.drawer__menu');
const $menuIcon = document.querySelector('.header__menu-icon');
const $menuClose = document.querySelector('.drawer__button--close');

$menuIcon.addEventListener('click', showOrHiddenMenuDrawer );
$menuClose.addEventListener('click', showOrHiddenMenuDrawer );

function showOrHiddenMenuDrawer(){
    $menu.classList.toggle('drawer__menu--close');
}