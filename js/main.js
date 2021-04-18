function $(selector){
    return document.querySelector(selector);
}
const $menu = $('.drawer__menu');
const $menuIcon = $('.header__menu-icon');
const $menuClose = $('.drawer__button--close');
const $swithTheme = $('.header__btn-theme');
const $iconTheme = $('.theme__dark');

$menuIcon.addEventListener('click', showOrHiddenMenuDrawer );
$menuClose.addEventListener('click', showOrHiddenMenuDrawer );

$swithTheme.addEventListener('click', () => {   
    const isLigthMode = document.documentElement.getAttribute('data-theme') === 'ligth';
    document.documentElement.setAttribute('data-theme', isLigthMode? 'dark' : 'ligth');    
    $iconTheme.classList.toggle('theme__ligth');
} );


function showOrHiddenMenuDrawer(){
    $menu.classList.toggle('drawer__menu--close');
}







