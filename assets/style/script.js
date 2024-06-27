// Login
function processData(event) {
    event.preventDefault()
    const username = event.target.username.value
    const email = event.target.email.value
    const password = event.target.password.value
    if(username === 'syarif' && email === 'syarif@gmail.com' && password === '1234'){
        window.location = 'index.html'
    }else if(username === '' && email === '' && password === ''){
        alert('Enter your account to Login')
    }else{
        const alertElement = document.getElementById('alert')
        alertElement.innerHTML = ''
        alertElement.setAttribute('style', 'padding: 10px; border-radius:10px; color: red; background-color: salmon;')

        const text = document.createElement('span')

        text.textContent = 'Wrong Email or Password'
        alertElement.appendChild(text)
    }
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

// Button Navbar
const btnToLogin = document.getElementById('to-login')
btnToLogin.onclick = () => {
    window.location = 'sign-page.html'
}

const btnToSignup = document.getElementById('to-signup')
btnToSignup.onclick = () => {
    window.location = 'sign-page.html'
}

// Footer
function appendElement(elementId, contentChild) {
    const container = document.getElementById(elementId)

    contentChild.forEach(item => {
        const content = document.createElement('span')
        content.textContent = item

        if (item == contentChild[0]) {
            content.classList.add('header')
        }
        container.appendChild(content)
    })
}

const contentChild = [['Wetick', 'About Us', 'Features', 'Blog', 'Payments', 'Mobile App'],
    ['Features', 'Booking', 'Create Event', 'Discover', 'Register'],
    ['Company', 'Partnership', 'Help', 'Terms of Service', 'Privacy Policy', 'Sitemap']
]

const footertext = ['footer-1', 'footer-2', 'footer-3']

footertext.forEach((item, index) => {
    appendElement(item, contentChild[index])
})


// Card

const contentFilm = document.getElementById('content-film')

const events = [
    {
        title: 'Sights & Sounds Exhibition',
        date: 'Wed, 15 Nov, 4:00 PM',
        image: './assets/image/event-1.png'
    },
    {
        title: 'See it in Gold Class',
        date: 'Thu, 16 Nov, 7:00 PM',
        image: './assets/image/event-2.png'
    },
    {
        title: 'music concert',
        date: 'Sat, 16 Jun, 7:00 PM',
        image: './assets/image/event-3.jpg'
    },
    {
        title: 'MotoGP at Mandalika',
        date: 'Sun, 27 Aug, 10:00 AM',
        image: './assets/image/event-4.jpg'
    },
    {
        title: 'international chess tournament',
        date: 'Sun, 7 Feb, 08:00 AM',
        image: './assets/image/event-5.jpg'
    },
    {
        title: 'Jakarta International Marathon',
        date: 'Sun, 23 Jun, 03:00 AM',
        image: './assets/image/event-6.jpg'
    },
    {
        title: 'Indonesia VS Argentina',
        date: 'Wed, 21 Jul, 18:00 PM',
        image: './assets/image/event-7.jpg'
    }
]

events.forEach(event => {
    const linkPage = document.createElement('a')
    linkPage.setAttribute('href', 'booking-page.html')

    const eventFilm = document.createElement('div')
    eventFilm.classList.add('film')

    const picEvent = document.createElement('img')
    picEvent.setAttribute('src', event.image)
    picEvent.setAttribute('alt', 'Event-1')

    const spanShadow = document.createElement('span')
    spanShadow.classList.add('shadow')

    const dayEvent = document.createElement('div')
    dayEvent.classList.add('day')
    dayEvent.textContent = event.date

    const titleEvent = document.createElement('div')
    titleEvent.classList.add('title')
    titleEvent.textContent = event.title

    const peopleEvent = document.createElement('div')
    peopleEvent.classList.add('people')

    const people1 = document.createElement('div')
    people1.classList.add('people1')

    const people2 = document.createElement('div')
    people2.classList.add('people2')

    const people3 = document.createElement('div')
    people3.classList.add('people3')

    const people4 = document.createElement('div')
    people4.classList.add('people4')

    const spanLayer = document.createElement('span')
    spanLayer.classList.add('layer')
    spanLayer.textContent = '+62'

    people4.appendChild(spanLayer)
    peopleEvent.appendChild(people1)
    peopleEvent.appendChild(people2)
    peopleEvent.appendChild(people3)
    peopleEvent.appendChild(people4)
    spanShadow.appendChild(dayEvent)
    spanShadow.appendChild(titleEvent)
    spanShadow.appendChild(peopleEvent)
    eventFilm.appendChild(picEvent)
    eventFilm.appendChild(spanShadow)
    linkPage.appendChild(eventFilm)
    contentFilm.appendChild(linkPage)
    
})
