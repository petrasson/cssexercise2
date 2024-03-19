import jsonData from './data.json' assert { type: "json" };
console.log("jsonData",jsonData);

const html = (strings, ...values) => String.raw({ raw: strings }, ...values);

const cardsData = [
  {
  "id": "card1",
  "categoryTitle": "Category",
  "category": "Technical",
  "fundTitle": "Hedgie banner",
  "fundingAmount": "$5.000-$6.000",
  "completed": "true",
  "descriptionText": "They can be used to deliver spacecraft to the ends of the solar system with hyper-pinpoint accuracy."
},
{
  "id": "card2",
  "categoryTitle": "Category",
  "category": "Governance",
  "fundTitle": "Hedgie banner2",
  "fundingAmount": "$5.000-$6.000",
  "completed": "true",
  "descriptionText": "They can be used to deliver spacecraft to the ends of the solar system with hyper-pinpoint accuracy."
},
{
  "id": "card3",
  "categoryTitle": "Category",
  "category": "Growth",
  "fundTitle": "Hedgie banner3",
  "fundingAmount": "$5.000-$6.000",
  "completed": "false",
  "descriptionText": "They can be used to deliver spacecraft to the ends of the solar system with hyper-pinpoint accuracy."
},
{
  "id": "card4",
  "categoryTitle": "Category",
  "category": "Analytics",
  "fundTitle": "Hedgie banner4",
  "fundingAmount": "$5.000-$6.000",
  "completed": "true",
  "descriptionText": "They can be used to deliver spacecraft to the ends of the solar system with hyper-pinpoint accuracy."
}
,
{
  "id": "card5",
  "categoryTitle": "Category",
  "category": "ThirdParty",
  "fundTitle": "Hedgie banner5",
  "fundingAmount": "$5.000-$6.000",
  "completed": "false",
  "descriptionText": "They can be used to deliver spacecraft to the ends of the solar system with hyper-pinpoint accuracy."
},
{
  "id": "card6",
  "categoryTitle": "Category",
  "category": "Technical",
  "fundTitle": "Hedgie banner6",
  "fundingAmount": "$5.000-$6.000",
  "completed": "true",
  "descriptionText": "They can be used to deliver spacecraft to the ends of the solar system with hyper-pinpoint accuracy."
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


function renderCards(cards) {
/*  cardsGrid.innerHTML = "";*/
cards.forEach((card) => {
    cardsGrid.insertAdjacentHTML(
      "beforeend",
      html`
      <div class="card">
      <p class="sub-header">Category</p>
      <p class="card-header">${card.fundTitle}</p>
      <p class="sub-header">Funding amount: ${card.fundingAmount}</p>
      <p class="card-text">${card.descriptionText}</p>
      </div>
      `
    );
  });
}

renderCards(cardsData);

buttonAll.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  renderCards(cardsData);
});

toggle.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  const completed = cardsData.filter((card) => card.completed === "true");
  renderCards(completed);
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