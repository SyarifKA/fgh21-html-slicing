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
const film = document.createElement('div')
const spanShadow = document.createElement('span')
const avatar = ['people1', 'people2', 'people3', 'people4']
const shadowImage = ['day', 'title', 'people']

contentFilm.appendChild(film)
film.classList.add('film')
film.appendChild(spanShadow)
spanShadow.classList.add('shadow')

for (let i = 0; i < shadowImage.length; i++){
    const listContent = document.createElement('div')
    listContent.classList.add(shadowImage[i])
    spanShadow.appendChild(listContent)
    if (shadowImage[i] === 'people') {
        for (let j = 0; j < avatar.length; j++){
            const contentPeople = document.createElement('div')
            contentPeople.classList.add(avatar[j])
            shadowImage.appendChild(contentPeople)
            if (avatar[j] === 'people4') {
                const textSpan = document.createElement('span')
                textSpan.textContent = '+62'
                textSpan.classList.add('layer')
                avatar[j].appendChild(textSpan)
            }
        }
    }
}