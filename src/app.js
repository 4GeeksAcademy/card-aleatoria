import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


const cardNumber = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const cardSuit = ["♦", "♥", "♠", "♣"]

window.onload = function () {

  function generateCard() {

    let randomNumber = Math.floor(Math.random() * cardNumber.length);
    let randomSuit = Math.floor(Math.random() * cardSuit.length);
    let numberInCard = cardNumber[randomNumber];
    let suitIncard = cardSuit[randomSuit];

    document.getElementById("card-number").textContent = numberInCard;
    document.getElementById("suit-left").textContent = suitIncard;
    document.getElementById("suit-right").textContent = suitIncard;

    if (suitIncard === "♥" || suitIncard === "♦") {
      document.getElementById("suit-left").style.color = "Red";
      document.getElementById("suit-right").style.color = "Red";
      document.getElementById("card-number").style.color = "Red";

    } else {
      document.getElementById("suit-left").style.color = "Black";
      document.getElementById("suit-right").style.color = "Black";
      document.getElementById("card-number").style.color = "Black";
    }
  }
  generateCard(); // Genera la primera carta al cargar
  setInterval(generateCard, 5000);
  console.log("Hello Rigo from the console!");
};

let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
  location.reload();
})

let size = document.getElementById("apply-size");
apply - size - addEventListener("click", _ => {
  location.apply
})

