document.addEventListener("DOMContentLoaded",()=>{
    const formInscription = document.getElementById("inscriptionForm");

    formInscription.addEventListener("submit",(e)=>{
        e.preventDefault(); //empêche l'envoi du formulaire

        //Je stock les valeurs de mes champs dans les constantes
        const nomUtilisateur = document.getElementById("nomUtilisateur").value;
        const email = document.getElementById("email").value;
        const mdp = document.getElementById("mdp").value;
        const mdpVerif = document.getElementById("mdpVerif").value;

        //je compare mon mot de passe avec la confirmation de mon mot de passe 
        if (mdp !== mdpVerif) {
            alert("Les mots de passe ne correspondent pas !");
            return;
        }

        const utilisateur = {
            nomUtilisateur:nomUtilisateur,
            email:email,
            mdp:mdp
        };

        //J'enregistre mon objet dans le local storage au format json sous forme de texte
        localStorage.setItem("utilisateur",JSON.stringify(utilisateur));

        alert("Compte crée avec succès");

        //je redirige vers la page souhaité une fois le formulaire valide
        window.location.href = "/html/connexion.html"

    });
});