'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');



///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);

//   console.log(e.target.getBoundingClientRect());

//   console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

//   console.log(
//     'height/width viewport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

//////////////////////////////
// Page Navigation

// Smooth SCrolling

// document.querySelectorAll(".nav__link").forEach(el => {
//   el.addEventListener("click", function(e) {
//     e.preventDefault();
//     const id = this.getAttribute("href")
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
//   })
// })



// Smooth Scrolling - Event Delegation
// 1- Add Event Listener to common parent element
// 2- Determine what element originated the event

document.querySelector(".nav__links").addEventListener("click", function(e){
  e.preventDefault()

  // Matching strateg to match elements that are relevant
  if(e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href")
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  }
})

///////////////////////////
// DOM Traversing
// const h1 = document.querySelector("h1");
// // Going Downwards
// console.log(h1.querySelectorAll(".highlight"))
// console.log(h1.childNodes)
// console.log(h1.children)
// h1.firstElementChild.style.color = "red"

// // Going Downwards
// console.log(h1.parentNode)
// console.log(h1.parentElement)

// h1.closest(".header").style.background = "var(--gradient-secondary)"
// h1.closest("h1").style.background = "var(--gradient-secondary)"

// // Going Sideways - siblings
// console.log(h1.previousElementSibling)
// console.log(h1.nextElementSibling)
// console.log(h1.parentElement.children)


//////////////////////////////
// Tabs
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener("click", (e) => {
  // tabs buttons
  const clicked = e.target.closest(".operations__tab");
  // Guard Clause
  if(!clicked) return; //if clicked outside "closest" will be undefined. So return early to break the process

  // Remove active classes
	tabs.forEach(t=> t.classList.remove("operations__tab--active"))
  tabsContent.forEach(c=> c.classList.remove("operations__content--active"))

  // Activate tab
  clicked.classList.add("operations__tab--active")

  // Active content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add("operations__content--active")

})

/////////////////////////////////
// Menu Fade Animation 

const handleHover = function(e) {
  // match element that we are looking for
  if(e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this
    })
    logo.style.opacity = this
  }
}
const nav = document.querySelector('.nav');
// mouseover and mouseenter are similar, but mouserenter doesn't allow bubbling effect
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1))


//////////////////////////////////////
Sticky Navigation
const initalCoords = section1.getBoundingClientRect()
console.log(initalCoords)
window.addEventListener("scroll", function(){
  if(window.scrollY > initalCoords.top){
    nav.classList.add("sticky")
  }
  else {
    nav.classList.remove("sticky")
  }
})

