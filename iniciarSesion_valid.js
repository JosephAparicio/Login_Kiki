const email=document.querySelector("#email")
const password=document.querySelector("#password")
const btn=document.querySelector("#submit")
const contenedor_email=document.querySelector("#contenedor-email")
const contenedor_password=document.querySelector("#contenedor-password")
const loginForm = document.querySelector("#loginForm")

btn.addEventListener("click",function(event){
    event.preventDefault() //detener la acción predeterminada del formulario
    if(email.value==""){
        contenedor_email.classList.add("errorField")
        
    }
    if(password.value==""){
        contenedor_password.classList.add("errorField")
    }
    else {
        window.location.href = "https://mail.google.com/mail/u/0/#inbox"
    }
})

contenedor_email.addEventListener("keyup",function(){
    contenedor_email.classList.remove("errorField")
})

contenedor_password.addEventListener("keyup",function(){
    contenedor_password.classList.remove("errorField")
})

