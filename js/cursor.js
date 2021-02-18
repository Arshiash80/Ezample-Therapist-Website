gsap.set('.cursor', {xPercent: -50, yPercent: -50})
gsap.set('.cursorBorder', {xPercent: -50, yPercent: -50})

const cursor = document.querySelector(".cursor");
const cursorBorder = document.querySelector(".cursorBorder");


window.addEventListener('mousemove', e => {
    gsap.to(cursor, 0.1, {x: e.clientX, y: e.clientY});
    gsap.to(cursorBorder, 0.2, {x: e.clientX, y: e.clientY});
})


const navLinks = document.querySelectorAll('a');

navLinks.forEach((link) => {
    link.addEventListener('mouseover', () => {
        cursor.classList.add("cursor-shrink");
        cursorBorder.classList.add("cursorBorder-red");

    })
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove("cursor-shrink");
        cursorBorder.classList.remove("cursorBorder-red");

    })
})

document.querySelector('.content-portfolio .port-img').addEventListener('mouseover', () => {
    cursorBorder.classList.add("cursorBorder-grow");
    cursor.classList.add('cursor-grow')
})
document.querySelector('.content-portfolio .port-img').addEventListener('mouseleave', () => {
    cursorBorder.classList.remove("cursorBorder-grow");
    cursor.classList.remove('cursor-grow')
    
})
