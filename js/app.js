// Navbar Toggle
burgerMenu = document.querySelector('.burger-menu')
menuResponsive = document.querySelector('.menu-responsive')
links = document.querySelectorAll('.link')

const toggleNavbar = () => {
  burgerMenu.classList.toggle('active')
  menuResponsive.classList.toggle('active')
}

const removeNavbar = () => {
  burgerMenu.classList.remove('active')
  menuResponsive.classList.remove('active')
}

burgerMenu.addEventListener('click', toggleNavbar)
links.forEach((link) => {
  link.addEventListener('click', removeNavbar)
})

const navLogo = document.querySelector('.nav-logo')

navLogo.addEventListener('click', removeNavbar)

// GSAP Hero Animation
document.addEventListener('DOMContentLoaded', (event) => {
  var tl = gsap.timeline()

  tl.to('.loading-anim1', { duration: 1, opacity: 0 })
    .to('.loading-anim2', { duration: 0.5, opacity: 1 })
    .to('.loading-anim2', { duration: 0.5, opacity: 0 })
    .to('.loading-screen', { duration: 1, scaleY: 0 })
    .from('.header-anim1', { duration: 1, opacity: 0 })
    .from('.header-anim2-overlay', { duration: 2, scaleY: 1 }, '-=1')
    .from('.header-anim3', { duration: 1, opacity: 0 }, '-=2')
    .from('.header-anim4', { duration: 1, opacity: 0 }, '-=2')
    .from('.header-anim5', { duration: 2, opacity: 0 }, '-=2')

  const html = document.querySelector('html')

  setTimeout(() => {
    html.style.overflow = 'auto'
  }, 2000)
})

// Basic Fade In
const fadeIn = document.querySelectorAll('.fade-in')

fadeIn.forEach((fade) => {
  gsap.from(fade, {
    scrollTrigger: {
      trigger: fade,
      start: 'bottom bottom', // when the Bottom of the trigger hits the Bottom of the viewport
    },
    duration: 1.5,
    // ease: 'power4.out',
    y: 30,
    opacity: '0',
  })
})

// Skills Animation

let skillsTimeline = gsap.timeline({
  // yes, we can add it to an entire timeline!
  scrollTrigger: {
    trigger: '.skills-section',
    // pin: true, // pin the trigger element while active
    start: 'top center', // when the top of the trigger hits the top of the viewport
    // end: '+=500', // end after scrolling 500px beyond the start
    // scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    // snap: {
    //   snapTo: 'labels', // snap to the closest label in the timeline
    //   duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
    //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
    //   ease: 'power1.inOut', // the ease of the snap animation ("power3" by default)
    // },
  },
})

// Toggle Body Background
const body = document.querySelector('body')

const bgBlack = () => {
  body.classList.add('bg-black')
}

const bgWhite = () => {
  body.classList.remove('bg-black')
}

// Workouts Trigger
ScrollTrigger.create({
  // markers: true,
  trigger: '.workouts-section',
  start: '-10 top -10 top',
  endTrigger: '.workouts-section',
  end: 'bottom top',
  onEnter: () => bgBlack(),
  onLeave: () => bgWhite(),
  onEnterBack: () => bgBlack(),
  onLeaveBack: () => bgWhite(),
})

// About me Trigger
ScrollTrigger.create({
  // markers: true,
  trigger: '#about-me',
  start: '-200 top -200 top',
  endTrigger: '#about-me',
  end: 'bottom top',
  onEnter: () => bgBlack(),
  onLeave: () => bgWhite(),
  onEnterBack: () => bgBlack(),
  onLeaveBack: () => bgWhite(),
})

// Location Trigger
ScrollTrigger.create({
  // markers: true,
  trigger: '#location',
  start: 'top top',
  endTrigger: '#location',
  end: 'bottom top',
  onEnter: () => bgBlack(),
  onLeave: () => bgWhite(),
  onEnterBack: () => bgBlack(),
  onLeaveBack: () => bgWhite(),
})

// Footer Year
const year = document.querySelector('.year')

const date = new Date()
const currentYear = date.getFullYear()

year.innerHTML = currentYear

// Nav active class
const sections = document.querySelectorAll('section')
const navLi = document.querySelectorAll('.link--io')
window.onscroll = () => {
  var current = ''

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute('id')
    }
  })

  navLi.forEach((li) => {
    li.classList.remove('active')
    if (li.href.includes(current)) {
      li.classList.add('active')
    }
  })
}
