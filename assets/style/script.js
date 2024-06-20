const menuBtn = document.getElementById('menu')
const nav = document.getElementById('nav')
const navCenter = nav.getElementsByClassName('navbar-opt').item(0)
const navRight = nav.getElementsByClassName('navbar-button').item(0)

menuBtn.onclick = () => {
    if (navCenter.getAttribute('style')) {
        navCenter.removeAttribute('style')
    } else {
        navCenter.setAttribute('style', 'display:none')
    }
    if (navRight.getAttribute('style')) {
        navRight.removeAttribute('style')
    } else {
        navRight.setAttribute('style', 'display:none')
    }
}