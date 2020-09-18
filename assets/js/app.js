const themeCookieName = 'theme';
const themeDark = 'dark';
const themeLight = 'light';


const body = document.getElementsByTagName('body')[0];
const switchThemeDarkPC = document.querySelector('#switch-theme-pc');
const switchThemeDarkMobile = document.querySelector('#switch-theme-mobile');
const logoDark = document.querySelector('.logo-dark');
const logoLight = document.querySelector('.logo-light');



function switchThem() {
    let childSun = this.querySelector('.icon-sun');
    let childMoon = this.querySelector('.icon-moon');

    console.log(logoDark);
    if (body.classList.contains(themeLight)) {
        body.classList.remove(themeLight);
        body.classList.add(themeDark);
        childSun.classList.remove('hide');
        childMoon.classList.add('hide');
        logoLight.classList.add('hide');
        logoDark.classList.remove('hide');
        setCookie(themeCookieName, themeDark);
    } else {
        body.classList.remove(themeDark);
        body.classList.add(themeLight);
        childMoon.classList.remove('hide');
        childSun.classList.add('hide');
        logoDark.classList.add('hide');
        logoLight.classList.remove('hide');
        setCookie(themeCookieName, themeLight);
    }
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 60 * 1000))
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + "jpath=/"
}


const getCookie = (cname) => {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

const loadTheme = () => {
    let theme = getCookie(themeCookieName)
    console.log(theme);
    body.classList.add(theme === "" ? themeDark : theme)
    // logoDark.classList.remove('hide');
}


loadTheme()


const menuBtn = document.querySelector('.menu-btn');
const sideNav = document.querySelector('.side-nav');

sideNav.style.right = "-250px";
menuBtn.onclick = function () {
    (sideNav.style.right == "-250px") ? sideNav.style.right = "-35px" : sideNav.style.right = "-250px";
}

switchThemeDarkPC.addEventListener('click', switchThem);
switchThemeDarkMobile.addEventListener('click', switchThem);