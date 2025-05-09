const mesImages = [
  "/images/1.webp",
  "/images/1.webp",
  "/images/2.webp",
  "/images/2.webp",
  "/images/3.webp",
  "/images/3.webp",
  "/images/4.webp",
  "/images/4.webp",
  "/images/5.webp",
  "/images/5.webp",
  "/images/6.webp",
  "/images/6.webp",
];
const plateau = document.getElementById("plateau");
mesImages.sort(() => Math.random() - 0.5);

for (let index = 0; index < mesImages.length; index++) {
    const img = document.createElement("img");
    img.src = "/images/question.svg";
    img.dataset.value = mesImages[index];
    img.classList.add("carte");

    img.addEventListener("click",()=>{
        img.src = mesImages[index] ;
    });
    
plateau.appendChild(img);
    
}
let secondes = 0;

const compteur = document.getElementById("compteur");

setInterval(() => {
  secondes++;
  compteur.textContent = secondes;
  compteur.innerHTML=`<p>Chronometre : </p>${secondes}`;
}, 1000);




    

