// Login
function processData(event) {
    event.preventDefault()
    const username = event.target.username.value
    const email = event.target.email.value
    const password = event.target.password.value
    if(username === 'syarif' && email === 'syarif@gmail.com' && password === '1234'){
        alert('Login Success!')
    }else if(username === '' && email === '' && password === ''){
        alert('Enter your account to Login')
    }else{
        alert('The data you entered is incorrect!')
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

// Footer
function appendElement(elementId, contentChild) {
    const container = document.getElementById(elementId)

    // for (let i = 0; i < arr.length; i++){
    //     const content = document.createElement('span')
    //     content.textContent = arr[i]
    //     if (arr[i] == arr[0]) {
    //         content.classList.add('header')
    //     }
    //     container.appendChild(content)
    // }

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

const eventFilm = document.createElement('div')
eventFilm.classList.add('film')

const spanShadow = document.createElement('span')
spanShadow.classList.add('shadow')

const dayEvent = document.createElement('div')
dayEvent.classList.add('day')
dayEvent.textContent = 'Wed, 15 Nov, 4:00 PM'

const titleEvent = document.createElement('div')
titleEvent.classList.add('title')
titleEvent.textContent = 'Sights & Sounds Exhibition'

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
eventFilm.appendChild(spanShadow)
contentFilm.appendChild(eventFilm)