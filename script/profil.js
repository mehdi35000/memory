// Je récupère les infos de l'utilisateur connecté et stock dans utilisateur
const utilisateur = JSON.parse(sessionStorage.getItem("utilisateurConnecte"));
const lienConnexion = document.getElementById("connexion");

if (!utilisateur) {
  alert("Vous devez d'abbord être connecté !");
  window.location.href = "/html/connexion.html";
} else if(utilisateur) {
  const profil = document.getElementById("infoProfil");
  profil.innerHTML = `<p><strong>Nom utilisateur : </strong>${utilisateur.nomUtilisateur}</p><br>
                       <p><strong>Email :  </strong>${utilisateur.email}</p>
                             <a class="btn btnForm" href="/html/memory.html">Jouer</a>

                       `;
  lienConnexion.textContent = "Deconnexion";
  lienConnexion.href = "#";
  lienConnexion.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.removeItem("utilisateurConnecte");
    window.location.href = "/html/connexion.html";
  });
}
