// const themeCookieName = 'theme';
// const themeDark = 'dark';
// const themeLight = 'light';


// const body = document.getElementsByTagName('body')[0];
// const switchThemeDark = document.querySelector('#switch-theme');

// function setCookie(cname, cvalue, exdays) {
//     var d = new Date()
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 60 * 1000))
//     var expires = "expires=" + d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + "jpath=/"
// }

// // const nameFunction = (adsf) => {

// // }

// const getCookie = (cname) => {
//     let name = cname + "=";
//     let ca = document.cookie.split(';');
//     for (let i = 0; i < ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// }

// const loadTheme = () => {
//     let theme = getCookie(themeCookieName)
//     body.classList.add(theme === "" ? themeLight : theme)
// }

// const switchTheme = () => {
//     if (body.classList.contains(themeLight)) {
//         body.classList.remove(themeLight);
//         body.classList.add(themeDark);
//         setCookie(themeCookieName, themeDark)
//     } else {
//         body.classList.remove(themeDark);
//         body.classList.add(themeLight);
//         setCookie(themeCookieName, themeLight)

//     }
// }

const menuBtn = document.querySelector('.menu-btn');
const sideNav = document.querySelector('.side-nav');

sideNav.style.right = "-250px";
menuBtn.onclick = function(){
    (sideNav.style.right == "-250px") ? sideNav.style.right = "-35px" : sideNav.style.right = "-250px";
}
