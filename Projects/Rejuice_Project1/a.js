// Locomotive smoothScrolling Effect
function loco(){
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  }
  loco()


// page1 curser effect 
function cursorEffect(){
    
let cursor = document.querySelector(".cursor")
let page1Conent = document.querySelector(".page1-content")
let page5 = document.querySelector(".page5")
let cur = document.querySelector(".cursor1")


page1Conent.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
})

page1Conent.addEventListener("mouseenter",function(dets){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})

page1Conent.addEventListener("mouseleave",function(dets){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})

// for page5

// page5.addEventListener("mousemove",function(dets){
//   gsap.to(cur,{
//     x:dets.x,
//     y:dets.y
//   })
// })

// page5.addEventListener("mouseenter",function(dets){
//   gsap.to(cur,{
//       scale:1,
//       opacity:1
//   })
// })

// page5.addEventListener("mouseleave",function(dets){
//   gsap.to(cur,{
//       scale:0,
//       opacity:0
//   })
// })


}
cursorEffect()


// page2 animation
function scrollEffect(){
  
  gsap.from(".top",{
    y:50,
    duration:1,
    stagger:.1,
    opacity:0,
    scrollTrigger:{
      trigger:".top",
      scroller:"#main",
      // markers:true,
      scrub:2,
      start:"30% 50%",
      end:"35% 55%"
    }
  })

  gsap.from(".bottom",{
    y:100,
    duration:2,
    stagger:.25,
    opacity:1,
    scrollTrigger:{
      trigger:".bottom",
      scroller:"#main",
      // markers:true,
      start:"0% 50% ",
      end: "80% 90%"
    }
  })
}
scrollEffect()


// page3 
gsap.from(".p3-top h2",{
  y:30,
  duration:1,
  stagger:0.25,
  scrollTrigger:{
    trigger:".p3-top h2",
    scroller:"#main",
    scrub:3,
    start:" 80% 90%",
    end:"80% 90%"
  }
})

// page3 bottom animation
function textsliding(){
  gsap.to(".b-elem h1",{
    scrollTrigger:{
      trigger:'.b-elem h1',
      scroller:"#main",
      scrub:1,
      // markers:true,
      start:"top 90%",
      end:"top 90%"
    },
    top:0,
    duration:1
  })
}
textsliding()

function line(){
  gsap.to(".line",{
    width:"95%",
    duration:1,
    scrollTrigger:{
      trigger:".line",
      scroller:"#main",
      scrub:1,
      start:"top 50%",
      end:"top 50%",
      // markers:true
    }
  })
}
line()

// page4 bottom animation

function textsliding4(){
  gsap.to(".page4 .b-elem h1",{
    scrollTrigger:{
      trigger:'.page4 .b-elem h1',
      scroller:"#main",
      scrub:1,
      // markers:true,
      start:"top 70%",
      end:"top 70%"
    },
    top:0,
    duration:1
  })
}
textsliding4()

function line2(){
  gsap.to(".page4 .line",{
    width:"95%",
    duration:1,
    scrollTrigger:{
      trigger:".page4 .line",
      scroller:"#main",
      scrub:1,
      start:"top 50%",
      end:"top 50%",
      // markers:true
    }
  })
}
line2()


gsap.from(".page4 ",{
    y:100,
    duration:1,
    stagger:0.2,
    scrollTrigger:{
      trigger:'.page4  ',
      scroller:'#main',
      // markers:true,
      start:"50% 90%",
      end:"50%  90%",
      scrub:2
    }
})


// swiper
function infanitSlider(){
  var swiper = new Swiper(".mySwiper", {
    slidersPerView: 1,
    spaceBetwwn:30,
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
  });
}
infanitSlider()

// loader
function loader(){
  let tl1 = gsap.timeline()
tl1.from(".loader h3",{
  x:100,
  opacity:0,
  duration:1,
  stagger:0.1
})
tl1.from(".loader h3",{
  opacity:0,
  x:-100,
  stagger:0.1,
  duration:1
})
tl1.to(".loader",{
  opacity:0
})
tl1.from(".page1-content h1 span",{
  y:100,
  opacity:0,
  stagger:0.1,
  duration:0.5,
  delay:-0.3
})
tl1.to(".loader",{
  display:"none"
  
})

}
loader()

// page 5 amination

let tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:".movecrl",
    scroller:"#main",
    start: "50% 90%",
    end:"50% 90%",
    scrub:4
  }
})
tl2.to(".movecrl",{
  y:10,
  x:80,

},"anm")
tl2.to(".movecrl",{
  y:20,
  x:100,
},"anm")
tl2.to(".movecrl",{
  y:22,
  x:105,
},"anm")


// page7 animation

function scrollEffect7(){
  gsap.from(".p-7-top,.page7",{
    y:50,
    duration:1,
    stagger:.1,
    opacity:0,
    scrollTrigger:{
      trigger:".p-7-top",
      scroller:"#main",
      // markers:true,
      scrub:2,
      start:"30% 50%",
      end:"35% 55%"
    }
  })

  gsap.from(".p-7-bottom",{
    y:100,
    duration:1,
    stagger:.25,
    opacity:1,
    scrollTrigger:{
      trigger:".p-7-bottom",
      scroller:"#main",
      // markers:true,
      start:"0% 50% ",
      end: "80% 90%"
    }
  })
}
scrollEffect7()

function textsliding7(){
  gsap.to(".b-elemp7 h1",{
    scrollTrigger:{
      trigger:'.b-elemp7 h1',
      scroller:"#main",
      scrub:1,
      // markers:true,
      start:"top 90%",
      end:"top 90%"
    },
    top:0,
    duration:.2
  })
}
textsliding7()

// page8

function textAnimation2(){
  gsap.from(".content h1",{
    y:100,
    duration:2,
    stagger:.25,
    opacity:1,
    scrollTrigger:{
      trigger:".content",
      scroller:"#main",
      // markers:true,
      start:"90% 80% ",
      end: "80% 90%",
      scrub:2
    }
  })
}

textAnimation2()

// page9
gsap.from(".lower h1 span",{
  y:-50,
  opacity:0,
  stagger:0.30,
  duration:2,
  scrollTrigger:{
    trigger:".lower h1 span",
    scroller:"#main",
    // markers:true,
    scrub:5,
    start:"0 90%",
    end:"0 90%"
  }
})