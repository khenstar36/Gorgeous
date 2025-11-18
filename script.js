const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));
const cursor = document.querySelector(' .cursor')
let mouseX = 0, mouseY = 0

const cursorMove = () => {
    cursor.style.left = `${mouseX}px`
    cursor.style.top = `${mouseY}px`
    cursor.style.transform = `translate(-50%, -50%)`

    requestAnimationFrame(cursorMove)
}
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX 
    mouseY = e.clientY
})
cursorMove()

const a = document.querySelectorAll('a')

a.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursor.classList.add('hide-cursor')
    })
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hide-cursor')
    })
})

hamburger.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursor.classList.add('hide-cursor')
    })
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hide-cursor')
    })
})
