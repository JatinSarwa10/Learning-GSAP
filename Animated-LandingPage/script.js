var tl = gsap.timeline()

tl.from("nav h1 , nav h4 , nav button",{
    y:-30,
    opacity:0,
    delay:0.5,
    duration:0.5,
    stagger:0.15,
})
tl.from(".center-part1 h1",{
    x:-200,
    opacity:0,
    duration:0.5,
})
tl.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.4,
})
tl.from(".center-part1 button",{
    opacity:0,
})
tl.from(".center-part2 img",{
    opacity:0,
},"-=0.3")
tl.from(".section1bottom img",{
    y:30,
    opacity:0,
    stagger:0.15,
    duration:0.6,
})
