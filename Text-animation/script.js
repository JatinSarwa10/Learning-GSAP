function breakTheText(){
var h1 = document.querySelector("h1")
var h1text = h1.textContent

var splittedText = h1text.split("")

var clutter = ""

splittedText.forEach(function(elem){
    clutter += `<span>${elem} </span>`
})
h1.innerHTML = clutter

}
breakTheText()

gsap.from("h1 span",{
    y:100,
    opacity:0,
    duration:1,
    delay:0.5,
})