const email=document.querySelector("#email")
const password=document.querySelector("#password")
const username=document.querySelector("#username")
const btn=document.querySelector("#submit")
const contenedor_email=document.querySelector("#contenedor-email")
const contenedor_password=document.querySelector("#contenedor-password")
const contenedor_username=document.querySelector("#contenedor-username")
const loginForm = document.querySelector("#loginForm")

btn.addEventListener("click",function(event){
    event.preventDefault()
    if(username.value==""){
        contenedor_username.classList.add("errorField")
    }
    if(email.value==""){
        contenedor_email.classList.add("errorField")
        
    }
    if(password.value==""){
        contenedor_password.classList.add("errorField")
    }
    if(username.value!=="" && password.value!=="" && email.value!==""){
        alert("Te registraste correctamente")
        window.location.href = "https://github.com/JosephAparicio?tab=repositories"
    }
})

contenedor_username.addEventListener("keyup",function(){
    contenedor_username.classList.remove("errorField")
})

contenedor_email.addEventListener("keyup",function(){
    contenedor_email.classList.remove("errorField")
})

contenedor_password.addEventListener("keyup",function(){
    contenedor_password.classList.remove("errorField")
})