//gestion du form de contact
let sectionForm = document.querySelector(".formContact");
let btnEnvoi = document.querySelector("#btnEnvoi");
let inputNom = document.querySelector("#nom");

btnEnvoi.addEventListener("submit", (event)=>{
    event.preventDefault();

    console.log("bouton cliqué !")

    let nomUser = inputNom.value;
    sectionForm.innerHTML=``;
    sectionForm.innerHTML=`Merci pour votre message + ${nomUser} ! <br> Je vous recontacterai au plus vite:)`;
})