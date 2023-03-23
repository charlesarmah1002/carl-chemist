var menuButton = document.querySelector('.menu-toggle');
var menu = document.querySelector('.menu')

menuButton.addEventListener('click', function(){
    menu.classList.toggle('active');
    menuButton.classList.toggle('active');
});

function shutMenu() {
    menu.classList.remove('active')
    menuButton.classList.remove('active')
};