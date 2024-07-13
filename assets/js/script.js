
// Footer
const footerText = ['footer-1', 'footer-2', 'footer-3']

function addContent(elementId, contentChild) {
    const container = document.getElementById(elementId)
    
    contentChild.forEach(item => {
        const content = document.createElement('span')
        content.textContent = item
        container.appendChild(content)
        
        if (item == contentChild[0]) {
            content.classList.add('header')
        }
    })
}

const contentChild = [['Wetick', 'About Us', 'Features', 'Blog', 'Payments', 'Mobile App'],
['Features', 'Booking', 'Create Event', 'Discover', 'Register'],
['Company', 'Partnership', 'Help', 'Terms of Service', 'Privacy Policy', 'Sitemap']
]

footerText.forEach((item, index) => {
    addContent(item, contentChild[index])
})

// Button Navbar
const btnToLogin = document.getElementById('to-login')
btnToLogin.addEventListener('click', () => {
    window.location = 'sign-page.html'
})

const btnToSignup = document.getElementById('to-signup')
btnToSignup.onclick = () => {
    window.location = 'sign-page.html'
}

// Navbar
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