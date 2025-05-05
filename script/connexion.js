document.addEventListener("DOMContentLoaded",()=>{
    const connexionForm = document.getElementById("connexionForm");

    connexionForm.addEventListener("submit",(e)=>{
        e.preventDefault();

        const emailCo = document.getElementById("emailCo").value;
        const mdpCo = document.getElementById("mdpCo").value;

        //Je récupère mon utilisateur stocké dans le local storage
        const utilisateur = JSON.parse(localStorage.getItem("utilisateur"));

        //Je verifie si mon utilisateur existe bien dans le local storage
        if (!utilisateur) {
            alert("Aucun utilisateur trouvé");
            return;
        }

        //Je compare l'email et le mots de passe stocké dans le storage avec ceux renseigné dans le formulaire de connexion
        if (utilisateur.email === emailCo && utilisateur.mdp === mdpCo) {
            alert("Connexion réussi !")
            window.location.href = "/html/profil.html"
        }else{
            alert("L'email ou le mot de passe est incorrect");
        }
    });
});