const loginr=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
registerlink.addEventListener('click',()=>{
    loginr.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginr.classList.remove('active')
})
