// TODO: Add animations to lines
// TODO: Add animation to texts and navigation bar
// TODO: Add animation to image

let lines_tl = gsap.timeline({
    defaults: {
        duration: 5,
        opacity: 0.2,
        ease: "back.out(1.7)"
    },
    repeat: -1,
    yoyo:true,
})
.addLabel("linesAnim")
lines_tl.to(".line-1", {
    width: 500,
},'linesAnim')
.to(".line-2", {
    width: 900,
},'linesAnim')
.to(".line-3", {
    width: 700,
},'linesAnim')
.to(".line-4", {
    width: 290,
},'linesAnim')
.to(".line-5", {
    width: 120,
},'linesAnim')
.to(".line-6", {
    width: 420,
},'linesAnim')
.to(".line-7", {
    width: 920,
},'linesAnim')
.to(".line-8", {
    width: 720,
},'linesAnim')
.to(".line-9", {
    width: 320,
},'linesAnim')
.to(".line-10", {
    width: 920,
},'linesAnim')
.to(".line-11", {
    width: 190,
},'linesAnim')
.to(".line-12", {
    width: 520,
},'linesAnim')
.to(".line-13", {
    width: 990,
},'linesAnim');




