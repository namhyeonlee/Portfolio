//project animation

gsap.registerPlugin(ScrollTrigger);


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

// //about me text animation
// gsap.to(".fill", {
  
//     duration: 2,
//     color: "red", 
    
// });

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
  .from(".fill", {color: "#fff4be"})
  .addLabel("spin")
  .to(".fill", {color: "#fff4be"})
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


// tabBtn.addEventListener('click', (e) => {
//   const target = e.target;

//   const filter = e.target.dataset.filter;
  
//   if (filter == null) {
//     return;
//   }
//   tabBtns.forEach((btn) => {
//     if (target === btn) {
//       btn.classList.add('selected');
//     } else {
//       btn.classList.remove('selected');
//     }
// })

  

//   descriptions.forEach((project) => {
//     if (filter === project.dataset.type) {
//       project.classList.add('visible');
//     } else {
//       project.classList.remove('visible');
//     }
//   })
// });


