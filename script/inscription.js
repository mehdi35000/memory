document.addEventListener("DOMContentLoaded", () => {
  const formInscription = document.getElementById("inscriptionForm");

  formInscription.addEventListener("submit", (e) => {
    e.preventDefault(); //empêche l'envoi du formulaire

    //Je stock les valeurs de mes champs dans les constantes
    const nomUtilisateur = document.getElementById("nomUtilisateur").value;
    const email = document.getElementById("email").value;
    const mdp = document.getElementById("mdp").value;
    const mdpVerif = document.getElementById("mdpVerif").value;

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexNom = /^[A-Za-z0-9]{3,}$/;
    const regexMdp =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6,}$/;

    // verification des champs avec les regex ( si la valeur du champs nom utilisateur n'est pas valide avec la regex)
    if (!regexNom.test(nomUtilisateur)) {
      alert("Nom utilisateur invalide !");
      return;
    }

    if (!regexMdp.test(mdp)) {
      alert("Mot de passe invalide !");
      return;
    }

    if (!regexEmail.test(email)) {
      alert("Email invalide !");
      return;
    }

    //je compare mon mot de passe avec la confirmation de mon mot de passe
    if (mdp !== mdpVerif) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }

    //Je récupère les utilisateurs existants || [] est utilisé car je ne peux pas faire un null.find ensuite donc j'ajoute une valeur vide
    const utilisateurs = JSON.parse(localStorage.getItem("utilisateurs")) || [];

    // Je compare l'email avec ceux déja existant
    const emailUtilise = utilisateurs.find((u) => u.email === email);
    if (emailUtilise) {
      alert("Cet email existe déja !");
      return;
    }

    //Ajoute le nouvel utilisateur
    const nouvelUtilisateur = {
      nomUtilisateur,
      email,
      mdp,
    };

    //J'ajoute mon utilisateur au tableau d'utilisateurs
    utilisateurs.push(nouvelUtilisateur);

    //J'enregistre mon objet dans le local storage au format json sous forme de texte
    localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));

    alert("Compte crée avec succès");

    //je redirige vers la page souhaité une fois le formulaire valide
    window.location.href = "/html/connexion.html";
  });
});
