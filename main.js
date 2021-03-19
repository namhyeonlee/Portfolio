//preloading
 TweenMax.to(".loader", 2.2, {
    delay: 5,
    top: "-100%",
    ease: Expo.easeInOut
});
//전체

 

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


//gsap
//intro

      TweenMax.from(".profile", 2, {
			 delay: 5.5,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
      });
      TweenMax.from(".c1", 2.4, {
			opacity: 0,
				y: 60,
				ease: Expo.easeInOut,
				delay: 0.6,
      });
     
     
      TweenMax.from(".navbar__menu > ul", 2, {
					delay: 6.2,
    y: 60,
    opacity: 0,
    ease: Expo.easeInOut
			});
TweenMax.from(".navbar__logo", 2, {
        	delay: 6.2,
    y: 60,
    opacity: 0,
    ease: Expo.easeInOut
				
      });
      TweenMax.from(".home__title", 2, {
				delay: 6,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
      });
      TweenMax.from(".home__description", 2, {
				delay: 6.1,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
      });
      TweenMax.from(".home__contact", 2, {
					delay: 6.2,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
      });
      


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

gsap.from(".aboutme>div", {
  scrollTrigger: {
    trigger: "#about",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=10%"
  },
  x: -100, 
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

//aboutme scroll move

  let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
  clamp = gsap.utils.clamp(-20, 20); 
    
  ScrollTrigger.create({
  onUpdate: (self) => {
      let skew = clamp(self.getVelocity() / -300);

        if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    }
  }
  });

gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });
  



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

tabBtn5 = document.querySelector('.tabBtn5');
tabBtns5 = document.querySelectorAll('.tabBtn5>button');
descriptions5 = document.querySelectorAll('.tabBox5>div');


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
tab(tabBtn5, tabBtns5, descriptions5);


