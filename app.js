/*import jsonData from './data.json' assert { type: "json" };
console.log("jsonData",jsonData);*/

const html = (strings, ...values) => String.raw({ raw: strings }, ...values);

const cardsData = [
  {
  "id": "card1",
  "categoryTitle": "Category",
  "category": "Technical",
  "fundTitle": "Hedgie banner",
  "fundingAmount": "$5.000-$6.000",
  "completed": true,
  "descriptionText": "They can be used to deliver spacecraft to the ends of the solar system with hyper-pinpoint accuracy.",
  "avatar":'<img src="images/avatar.svg" aria-hidden="true" class="image-avatar"/>'
},
{
  "id": "card2",
  "categoryTitle": "Category",
  "category": "Governance",
  "fundTitle": "Hedgie banner2",
  "fundingAmount": "$5.000-$6.000",
  "completed": true,
  "descriptionText": "They can be used to deliver spacecraft to the ends of the solar system with hyper-pinpoint accuracy.",
  "avatar":'<img src="images/avatar.svg" aria-hidden="true" class="image-avatar"/>'
},
{
  "id": "card3",
  "categoryTitle": "Category",
  "category": "Growth",
  "fundTitle": "Hedgie banner3",
  "fundingAmount": "$5.000-$6.000",
  "completed": false,
  "descriptionText": "They can be used to deliver spacecraft to the ends of the solar system with hyper-pinpoint accuracy.",
  "avatar":'<img src="images/avatar.svg" aria-hidden="true" class="image-avatar"/>'
},
{
  "id": "card4",
  "categoryTitle": "Category",
  "category": "Analytics",
  "fundTitle": "Hedgie banner4",
  "fundingAmount": "$5.000-$6.000",
  "completed": true,
  "descriptionText": "They can be used to deliver spacecraft to the ends of the solar system with hyper-pinpoint accuracy.",
  "avatar":'<img src="images/avatar.svg" aria-hidden="true" class="image-avatar"/>'
},
{
  "id": "card5",
  "categoryTitle": "Category",
  "category": "ThirdParty",
  "fundTitle": "Hedgie banner5",
  "fundingAmount": "$5.000-$6.000",
  "completed": false,
  "descriptionText": "They can be used to deliver spacecraft to the ends of the solar system with hyper-pinpoint accuracy.",
  "avatar":'<img src="images/avatar.svg" aria-hidden="true" class="image-avatar"/>'
},
{
  "id": "card6",
  "categoryTitle": "Category",
  "category": "Technical",
  "fundTitle": "Hedgie banner6",
  "fundingAmount": "$5.000-$6.000",
  "completed": true,
  "descriptionText": "They can be used to deliver spacecraft to the ends of the solar system with hyper-pinpoint accuracy.",
  "avatar":'<img src="images/avatar.svg" aria-hidden="true" class="image-avatar"/>'
}
]

const cardsGrid = document.querySelector(".card-grid-section");
const buttonAll = document.getElementById("all-cards");
const tech = document.getElementById("tech-filter");
const governance = document.getElementById("governance-filter");
const growth = document.getElementById("growth-filter");
const analytics = document.getElementById("analytics-filter");
const thirdParty = document.getElementById("third-party-filter");
const toggle = document.querySelector(".toggle");
const rightArrow = document.querySelector(".right-arrow");

let toggleCompleted = true;
let updatedCards; /*keeps track of the cards currently rendered on the page*/


/*Rendering all cards that are completed when page loads*/

document.addEventListener('DOMContentLoaded', function() {
  const loadingCards =cardsData.filter((card) => card.completed === true);
  renderCards(loadingCards);
  console.log("loadingCards", loadingCards);
});

function renderCards(cards) {
cardsGrid.innerHTML = "";
cards.forEach((card) => {
    cardsGrid.insertAdjacentHTML(
      "beforeend",
      html`
      <div class="card">
      <p class="sub-header">Category</p>
      <p class="card-header">${card.fundTitle}</p>
      <p class="sub-header">Funding amount: ${card.fundingAmount}</p>
      <p class="card-text">${card.descriptionText}</p>
      <div class="avatar-wrapper"><p class="image-avatar">${card.avatar}</p></div>
      </div>
      `
    );
  });
}

toggle.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  if (toggleCompleted) {
    console.log("Showing all cards since the value was true.");
    renderCards(cardsData);
  } else {
    console.log("Showing only true cards.");
    renderCards(cardsData.filter((card) => card.completed === true));
  }
  toggleCompleted = !toggleCompleted;
});


/******filters*******/
/*

buttonAll.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  if ( toggleCompleted = true ){
    const allCardsCompleted = cardsData.filter((card) => card.completed === "true");
    renderCards(allCardsCompleted);
    rederedCards = allCardsCompleted;
  } else{
  renderCards(cardsData);
}
});


tech.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  const Tech = cardsData.filter((card) => card.category === "Technical");
  renderCards(Tech);
});

governance.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  const Governance = cardsData.filter((card) => card.category === "Governance");
  renderCards(Governance);
});

growth.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  const Growth = cardsData.filter((card) => card.category === "Growth");
  renderCards(Growth);
});

analytics.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  const Analytics = cardsData.filter((card) => card.category === "Analytics");
  renderCards(Analytics);
});

thirdParty.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  const ThirdParty = cardsData.filter((card) => card.category === "ThirdParty");
  renderCards(ThirdParty);
});

*/