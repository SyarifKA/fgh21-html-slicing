const menuBtn = document.getElementById('menu')
const nav = document.getElementById('nav')
const navCenter = nav.getElementsByClassName('navbar-opt').item(0)

menuBtn.onclick = () => {
    if (navCenter.getAttribute('style')) {
        navCenter.removeAttribute('style')
    } else {
        navCenter.setAttribute('style', 'display:none')
    }
}