let curs = document.querySelector("#curser")
let blur = document.querySelector("#curser-blur")
document.addEventListener("mousemove", (dets) => {
    curs.style.left = dets.x+"px"
    curs.style.top = dets.y+'px'
    
    blur.style.left = dets.x- '150' + "px"
    blur.style.top = dets.y - '150' + 'px'
})

gsap.to('.header', {
    backgroundColor: 'black',
    duration: 1,
    height:90,
    scrollTrigger:{
        trigger:'.header',
        scroller:'body',
        start: 'top -10%',
        end: 'top -11%',
        scrub: 2,
    }
})
gsap.to(".mian", {
    backgroundColor: "black",
    scrollTrigger:{
        trigger:'.main',
        scroller:'body',
        start:'top -16%',
        end:'top -100%',
        scrub:3,
        duration:5,
        opacity:0
    }
})

gsap.to(".grene h5", {
     rotate:1,
     scrub:1,
     yoyo:1
})
gsap.from(".grene h5", {
    rotate:-1,
    stagger:4,
    repeat:-1,
    yoyo:1,
})
gsap.to(".lastright img", {
    borderRadius: 50,
    repeat:-1,
    duration:2,
    yoyo:5,
})
gsap.to(".lastright img", {
    borderRadius: -50,
})

let time = gsap.timeline()
time.to(".lastright img", {
    rotate:190,
    scrollTrigger:{
        trigger:".lastright img",
        scroller:"body",
        rotate:360,
        scrub:3,
        // markers:true,
        start:"top 50%",
        end:"top -50%",
    }
})

gsap.from(".lastleft, .lastleft h2, .lastleft h6, .lastleft p",{
    x:-500,
    duration:1,
    delay:0.6,
    scrollTrigger:".lastleft, .lastleft h2, .lastleft h6, .lastleft p"
})

gsap.from(".write h2",{
    y:60,
    duration:1,
    delay:0.6,
    scrollTrigger:".write h2"
})

gsap.from(".footerLogo h3, .icon h6, .footer2 h5, .footer3 h6",{
    y:-80,
    duration:1,
    delay:0.6,
    scrollTrigger:".footer",
    opacity:0
})