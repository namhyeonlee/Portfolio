//scroll to section

const navbarMenu = document.querySelector('.navbar__menu>ul');
navbarMenu.addEventListener('click', (e) => {
  const target = e.target;
  const link = target.dataset.link;
  if (link === null) {
    return;
  }
  
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior:'smooth'});

  
});

//home transparent

// const homeContainer = document.querySelector('.home__container');
// const homeHeight = homeContainer.getBoundingClientRect().height;
// const profile = document.querySelector('.profile');
// console.log(homeHeight);
// document.addEventListener('scroll', () => {
//   profile.style.opacity = 1 - window.screenY / homeHeight;
  
// })


//gsap

// home animation
gsap.from(".home__title", { x: -200, duration: 1 });
gsap.from(".home__description", { x: 200, duration: 1 });

//skill graph

gsap.from(".graph>div", {
  scrollTrigger: {
    trigger: "#skill",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  },
  scaleX: 0, 
  transformOrigin: "left center", 
  ease: "none"
});


gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "restart pause resume pause"
});

//project animation
let sections = gsap.utils.toArray(".p");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".projectWrap ",
      pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: () => "+=" + document.querySelector(".projectWrap ").offsetWidth
  }
});

// about me text animation

let tl = gsap.timeline({
   
  scrollTrigger: {
    trigger: "#about",
    pin: true,
    start: "-=400",
    end: "+=200",
    scrub: 1,
    snap: {
      snapTo: "labels",
      duration: { min: 0.2, max: 0.3 },
      delay: 0.2,
      ease: "power3.inOut"
    }
  }
});
tl.addLabel("start")
  .from(".fill", {color: "transparent"})
  .addLabel("color")
  .from(".fill", {color: "#fdff77"})
  .addLabel("spin")
  .to(".fill", {color: "#fdff77"})
  .addLabel("end");



//project tab 


tabBtn = document.querySelector('.tabBtn');
tabBtns = document.querySelectorAll('.tabBtn>button');
descriptions = document.querySelectorAll('.tabBox>div');

tabBtn2 = document.querySelector('.tabBtn2');
tabBtns2 = document.querySelectorAll('.tabBtn2>button');
descriptions2 = document.querySelectorAll('.tabBox2>div');

tabBtn3 = document.querySelector('.tabBtn3');
tabBtns3 = document.querySelectorAll('.tabBtn3>button');
descriptions3 = document.querySelectorAll('.tabBox3>div');

tabBtn4 = document.querySelector('.tabBtn4');
tabBtns4 = document.querySelectorAll('.tabBtn4>button');
descriptions4 = document.querySelectorAll('.tabBox4>div');


function tab(name,name2,name3) {
  name.addEventListener('click', (e) => {
  const target = e.target;

  const filter = e.target.dataset.filter;
  
  if (filter == null) {
    return;
  }
  name2.forEach((btn) => {
    if (target === btn) {
      btn.classList.add('selected');
    } else {
      btn.classList.remove('selected');
    }
})

  

  name3.forEach((project) => {
    if (filter === project.dataset.type) {
      project.classList.add('visible');
    } else {
      project.classList.remove('visible');
    }
  })
});
  
}

tab(tabBtn, tabBtns, descriptions);
tab(tabBtn2, tabBtns2, descriptions2);
tab(tabBtn3, tabBtns3, descriptions3);
tab(tabBtn4, tabBtns4, descriptions4);


