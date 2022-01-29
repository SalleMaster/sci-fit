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

  // tl.to('.loading-anim1', { duration: 1, opacity: 0 })
  //   .to('.loading-anim2', { duration: 0.5, opacity: 1 })
  //   .to('.loading-anim2', { duration: 0.5, opacity: 0 })
  //   .to('.loading-screen', { duration: 1, scaleY: 0 })
  //   .from('.header-anim1', { duration: 1, opacity: 0 })
  //   .from('.header-anim2-overlay', { duration: 2, scaleY: 1 })
  //   .from('.header-anim3', { duration: 0.7, opacity: 0 })
  //   .from('.header-anim4', { duration: 0.7, opacity: 0 })
  //   .from('.header-anim5', { duration: 2, opacity: 0 }, '-=1.4');

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

// Fade In Left & Right
// const fadeInLeft = document.querySelectorAll('.fade-in-left');
// const fadeInRight = document.querySelectorAll('.fade-in-right');

// fadeInLeft.forEach((fadeIn) => {
//   gsap.from(fadeIn, {
//     scrollTrigger: {
//       // markers: true,
//       trigger: fadeIn,
//       start: 'bottom bottom', // when the Bottom of the trigger hits the Bottom of the viewport
//     },
//     duration: 3,
//     ease: 'power4.out',
//     opacity: '0',
//   });
// });

// fadeInRight.forEach((fadeIn) => {
//   gsap.from(fadeIn, {
//     scrollTrigger: {
//       trigger: fadeIn,
//       start: 'bottom bottom', // when the Bottom of the trigger hits the Bottom of the viewport
//     },
//     duration: 3,
//     ease: 'power4.out',
//     opacity: '0',
//   });
// });

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

// add animations and labels to the timeline
skillsTimeline
  .from('.skill-anim1', { duration: 0.3, scale: 0 })
  .from('.skill-anim2', { duration: 0.3, scale: 0 }, '-=.1')
  .from('.skill-anim3', { duration: 0.3, scale: 0 }, '-=.1')
  .from('.skill-anim4', { duration: 0.3, scale: 0 }, '-=.1')
  .from('.skill-anim5', { duration: 0.3, scale: 0 }, '-=.1')
  .from('.skill-anim6', { duration: 0.3, scale: 0 }, '-=.1')
  .from('.skill-anim7', { duration: 0.3, scale: 0 }, '-=.1')
  .from('.skill-anim8', { duration: 0.3, scale: 0 }, '-=.1')
  .from('.skill-anim9', { duration: 0.3, scale: 0 }, '-=.1')
  .from('.skill-anim10', { duration: 0.3, scale: 0 }, '-=.1')
  .from('.skill-anim11', { duration: 0.3, scale: 0 }, '-=.1')
  .from('.skill-anim12', { duration: 0.3, scale: 0 }, '-=.1')
  .from('.skill-anim13', { duration: 0.3, scale: 0 }, '-=.1')
  .from('.skill-anim14', { duration: 0.3, scale: 0 }, '-=.1')

// Toggle Body Background
const body = document.querySelector('body')

const bgBlack = () => {
  body.classList.add('bg-black')
}

const bgWhite = () => {
  body.classList.remove('bg-black')
}

// Hero Trigger
// ScrollTrigger.create({
//   // markers: true,
//   trigger: '.hero',
//   start: 'top bottom',
//   endTrigger: '.hero',
//   end: 'bottom top',
//   onEnter: () => bgWhite(),
//   onLeave: () => bgWhite(),
//   onEnterBack: () => bgWhite(),
// })

// Hero Trigger
// ScrollTrigger.create({
//   // markers: true,
//   trigger: '#contact',
//   start: 'top bottom',
//   endTrigger: '#contact',
//   end: 'bottom top',
//   onEnter: () => bgWhite(),
//   onLeave: () => bgWhite(),
//   onEnterBack: () => bgWhite(),
// })

// Diagnostics Trigger
// ScrollTrigger.create({
//   // markers: true,
//   trigger: '#diagnostics',
//   start: 'top bottom',
//   endTrigger: '#diagnostics',
//   end: 'bottom top',
//   onEnter: () => bgWhite(),
//   onLeave: () => bgWhite(),
//   onEnterBack: () => bgWhite(),
// })

// How we work Trigger
// ScrollTrigger.create({
//   // markers: true,
//   trigger: '#how-we-work',
//   start: 'top bottom',
//   endTrigger: '#how-we-work',
//   end: 'bottom top',
//   onEnter: () => bgWhite(),
//   onLeave: () => bgWhite(),
//   onEnterBack: () => bgWhite(),
// })

// About studio Trigger
// ScrollTrigger.create({
//   // markers: true,
//   trigger: '#about-studio',
//   start: 'top bottom',
//   endTrigger: '#about-studio',
//   end: 'bottom top',
//   onEnter: () => bgWhite(),
//   onLeave: () => bgWhite(),
//   onEnterBack: () => bgWhite(),
// })

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

// Benefits Trigger
ScrollTrigger.create({
  // markers: true,
  trigger: '.benefits-section',
  start: 'top top',
  endTrigger: '.benefits-section',
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

// // Skills Trigger
// ScrollTrigger.create({
//   // markers: true,
//   trigger: '.skills-section',
//   start: 'center bottom',
//   endTrigger: '.skills-section',
//   end: 'top center',
//   onEnter: () => bgBlack(),
//   onLeave: () => bgWhite(),
//   onEnterBack: () => bgBlack(),
// })

// Footer Year
const year = document.querySelector('.year')

const date = new Date()
const currentYear = date.getFullYear()

year.innerHTML = currentYear

// Scroll to top on Load & Refresh
// history.scrollRestoration = 'manual';

// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// };

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
    // if (li.classList.contains(current)) {
    //   li.classList.add('active')
    // }
  })
}
