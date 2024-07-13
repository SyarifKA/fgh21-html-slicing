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
    linkPage.setAttribute('href', 'event-detail.html')

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
