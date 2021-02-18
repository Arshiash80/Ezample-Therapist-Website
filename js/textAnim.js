const text_tl = gsap.timeline({defaults:{duration:1, x:-300, opacity:0, ease:"power2.out"}})

text_tl.from(".content-text h1", {})
.from(".content-text p", {})