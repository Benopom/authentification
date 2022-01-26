const btnInscription = document.querySelector(".btn-inscription");
const btnConnection = document.querySelector(".btn-connection");
const btnDeconnection = document.querySelector(".btn-deconnection");

const formInscription = document.querySelector(".form-inscription");
const formConnection = document.querySelector(".form-connection");

const emailInscription = document.querySelector(".email-inscription");
const mdpiInscription = document.querySelector(".mdp-inscription");

const emailConnection = document.querySelector(".email-connection");
const emailMdp = document.querySelector(".email-mdp");

btnInscription.addEventListener('click', () => {

    if(formConnection.classList.contains('apparition')){
          formConnection.classList.remove('apparition');
    }
       formInscription.classList.toggle('apparition');
})

btnConnection.addEventListener('click', () => {

    if(formInscription.classList.contains('apparition')){
        formInscription.classList.remove('apparition');
    }


    formConnection.classList.toggle('apparition');
})


formInscription.addEventListener('submit', (e) => {
    e.preventDefault();

    const mailValeur = emailInscription.value;
    const mdpInscriptionValeur = mdpiInscription.value;

    auth.createUserWithEmailAndPassword(mailValeur, mdpInscriptionValeur)
    .then(cred => {
        console.log(cred);
        formInscription.reset();
        formInscription.classList.toggle('apparition');
    }) 

})

btnDeconnection.addEventListener('click', (e) => {
    e.preventDefault();

    auth.signOut().then( () => { 
        console.log("Vous êtes déconnecté");
    })
})



formConnection.addEventListener('submit', (e) => {
    e.preventDefault();

    const mailValeur = emailConnection.value;
    const mdpConnectionValeur = mdpConnection.value;

    auth.signInWithEmailAndPassword(mailValeur, mdpConnectionValeur)
    .then(cred => {
        console.log("Vous êtes connecté", cred.user);
        formConnection.reset();
        formConnection.classList.toggle('apparition');
    }) 

})

const info = document.querySelector (".infos");
const h1 = document.querySelector ("h1");

auth.onAuthStateChanged(Utilisateur => {
    if(Utilisateur) {
        info.innerText = "Voici le contenu privé";
        h1.innerText = "Vous voilà de retour"
    } else {
        console.log("L'utilisateur s'est deconnecté");
        info.innerText = "Contenu public";
        h1.innerText = "Bienvenu, inscrivez-vous ou connectez-vous";
    }
})