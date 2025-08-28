function breakTheText(){
var h1 = document.querySelector("h1")
var h1text = h1.textContent

var splittedText = h1text.split("")
var halfValue = splittedText.length/2;

var clutter = ""

splittedText.forEach(function(elem , idx ){
    if(idx < halfValue){
        clutter += `<span class = "a">${elem}</span>`
    }else{
        clutter += `<span class= "b">${elem}</span>`
    }
})
h1.innerHTML = clutter

}
breakTheText()

gsap.from("h1 .a",{
    y:50,
    opacity:0,
    duration:0.8,
    delay:0.2,
    stagger:0.15
})
gsap.from("h1 .b",{
    y:-50,
    opacity:0,
    duration:0.8,
    delay:0.2,
    stagger:-0.15
})