let headerLogInButton = document.getElementById('header_log_in_button');
let viewButton = document.getElementById('view_button');
let menuButton = document.getElementById('menu_button');
let fullMenuBg = document.getElementById('full_menu_bg');
let fullMenu = document.getElementById('full_menu');
let fullMenuCloseButton = document.getElementById('full_menu_close');
let viewImg = document.getElementById('view_img');
let hideImg = document.getElementById('hide_img');
let password = document.getElementById('password');
let loginForm = document.getElementById('login_form');
let bool = true;

menuButton.addEventListener('click', (event) => {
    fullMenu.classList.remove('full_menu_animation');
    fullMenuBg.classList.remove('z_index0');
    fullMenu.classList.add('full_menu_animation');
})

window.addEventListener('click', (event) => {
    if (event.target == fullMenuBg){
        fullMenuBg.classList.add('z_index0');
        // fullMenu.classList.remove('full_menu_animation');
    }
})

fullMenuCloseButton.addEventListener('click', (event) => {
    fullMenuBg.classList.add('z_index0');
    // fullMenu.classList.remove('full_menu_animation');
})

headerLogInButton.addEventListener('click', (event) => {
    loginForm.classList.remove('z_index0');
    fullMenu.classList.remove('full_menu_animation');
})

window.addEventListener('click', (event) => {
    if (event.target == loginForm){
        loginForm.classList.add('z_index0');
    }
})

viewButton.addEventListener('click', (event) => {
    viewImg.classList.toggle('display_none');
    hideImg.classList.toggle('display_none');
    if (bool){
        password.type = 'text';
        bool = false;
    } else {
        password.type = 'password';
        bool = true;
    }
})