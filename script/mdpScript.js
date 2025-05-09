const mdp = document.getElementById("mdp");
const btn = document.getElementById("btn-visibilite-password");
const mdpVerif = document.getElementById("mdpVerif");

btn.addEventListener("click", () => {             //creation de la visibilité du mdp au click sur l'icone oeil
  if (mdp.type === "password") {
    mdp.type = "text";
    mdpVerif.type = "text";
    oeil.src = "/images/eye-open.png";
  } else {
    mdp.type = "password";
    mdpVerif.type = "password";
    oeil.src = "/images/eye-close.png";
  }
});

const mdpCo = document.getElementById("mdpCo");

btn.addEventListener("click", () => {
  if (mdpCo.type === "password") {
    mdpCo.type = "text";
    oeil.src = "/images/eye-open.png";
  } else {
    mdpCo.type = "password";
    oeil.src = "/images/eye-close.png";
  }
});

document.getElementById("mdp").addEventListener("input",function(){     //foction pour tester la force du mot de passe
  const mdp =this.value;
  const force =document.getElementById("forceMdp");
  const aMaj = /[A-Z]/.test(mdp);
  const aChiffre = /\d/.test(mdp);
  const aSymbole = /[\W_]/.test(mdp);

  let niveau = "faible";
  let couleur = "red";

  if (mdp.length >= 9 && aMaj && aChiffre && aSymbole) {
    niveau = "fort";
    couleur = "green";
  } else if (mdp.length >= 6 && (aMaj || aChiffre || aSymbole)) {
    niveau = "moyen";
    couleur = "orange";
  }
  force.textContent = `Force du mot de passe : ${niveau}`;
  force.style.color = couleur;
});



