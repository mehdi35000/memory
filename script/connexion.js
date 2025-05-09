document.addEventListener("DOMContentLoaded",()=>{
    const connexionForm = document.getElementById("connexionForm");

    connexionForm.addEventListener("submit",(e)=>{ //pour empecher le rechargement de la page lors du submit
        e.preventDefault();

        const emailCo = document.getElementById("emailCo").value; 
        const mdpCo = document.getElementById("mdpCo").value;

        //Je récupère mon utilisateur stocké dans le local storage
        const utilisateurs = JSON.parse(localStorage.getItem("utilisateurs"));

        const utilisateur = utilisateurs.find(u => u.email ===emailCo && u.mdp===mdpCo);

        //Je verifie si mon utilisateur existe bien dans le local storage
        if (utilisateur) {
          alert("Connexion réussie");
          //J'enregistre l'utilisateur connecté en session
            sessionStorage.setItem(
                  "utilisateurConnecte",
                  JSON.stringify(utilisateur)
                );

          window.location.href = "/html/profil.html";
          return;
        } else {
          alert("L'email ou le mot de passe est incorrect");
        }
    });
});