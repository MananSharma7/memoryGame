const cards = document.querySelectorAll(".card");

var isFlipped = false;
var firstCard, secondCard;

cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  this.classList.add("flip");

  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  }
  else {
    secondCard = this;
    checkIt();
  }
}

let checkIt = () => {
  if (firstCard.dataset.image === secondCard.dataset.image)
    success();
  else
    unsuccess();
}

let success = () => {
  firstCard.removeEventListener('click', flip);
  secondCard.removeEventListener('click', flip);
  reset();
}

let reset = () => {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

let unsuccess = () => {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    const clk = document.querySelector(".gameWithBtn");
    const nul = null;
    clk.style.setProperty('pointer-events', nul);
    reset();
  },500);
}

let shuffle = () => {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    //console.log(index);
    card.style.order = index;
  });
}; shuffle();

const rset = document.querySelector(".reset");
rset.addEventListener('click',() => {
  location.reload();
  // cards.forEach((card) => {
  //   card.classList.remove("flip");
  //   card.addEventListener('click', flip);
  // });
  //shuffle();
});
