document.addEventListener('DOMContentLoaded', function () {

    var mainMenu = document.querySelector('.main_menu');
    var dropMenu = document.querySelector('.drop_menu');

    function showDropMenu() {
        if (dropMenu.style.display !== 'block') {
            dropMenu.style.animation = 'showMenu 1s linear 1';
            dropMenu.style.display = 'block';
        } else {
//            dropMenu.style.animation = 'hideMenu 1s linear 1';
            dropMenu.style.display = 'none';
        }
    }

    mainMenu.addEventListener('click', showDropMenu);
});
