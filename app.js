

/* Cuando hago CLICK .button, .nav TOGGLE 'activo' */
const button = document.querySelector('.bars-nav')
const nav   = document.querySelector('.nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('active')
})


