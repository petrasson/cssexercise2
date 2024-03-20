/*import jsonData from './data.json' assert { type: "json" };
console.log("jsonData",jsonData);*/

const html = (strings, ...values) => String.raw({
  raw: strings
}, ...values);

const cardsData = [{
      "id": "card1",
      "categoryTitle": "Category",
      "category": "Technical",
      "fundTitle": "Hedgie banner",
      "fundingAmount": "$5.000-$6.000",
      "completed": true,
      "descriptionText": "They can be used to deliver spacecraft to the ends of the solar system with hyper-pinpoint accuracy.",
      "avatar": '<img src="images/avatar.svg" aria-hidden="true" class="image-avatar"/>'
  },
  {
      "id": "card2",
      "categoryTitle": "Category",
      "category": "Governance",
      "fundTitle": "Hedgie banner2",
      "fundingAmount": "$5.000-$6.000",
      "completed": true,
      "descriptionText": "They can be used to deliver spacecraft to the ends of the solar system with hyper-pinpoint accuracy.",
      "avatar": '<img src="images/avatar.svg" aria-hidden="true" class="image-avatar"/>'
  },
  {
      "id": "card3",
      "categoryTitle": "Category",
      "category": "Growth",
      "fundTitle": "Hedgie banner3",
      "fundingAmount": "$5.000-$6.000",
      "completed": false,
      "descriptionText": "They can be used to deliver spacecraft to the ends of the solar system with hyper-pinpoint accuracy.",
      "avatar": '<img src="images/avatar.svg" aria-hidden="true" class="image-avatar"/>'
  },
  {
      "id": "card4",
      "categoryTitle": "Category",
      "category": "Analytics",
      "fundTitle": "Hedgie banner4",
      "fundingAmount": "$5.000-$6.000",
      "completed": true,
      "descriptionText": "They can be used to deliver spacecraft to the ends of the solar system with hyper-pinpoint accuracy.",
      "avatar": '<img src="images/avatar.svg" aria-hidden="true" class="image-avatar"/>'
  },
  {
      "id": "card5",
      "categoryTitle": "Category",
      "category": "ThirdParty",
      "fundTitle": "Hedgie banner5",
      "fundingAmount": "$5.000-$6.000",
      "completed": false,
      "descriptionText": "They can be used to deliver spacecraft to the ends of the solar system with hyper-pinpoint accuracy.",
      "avatar": '<img src="images/avatar.svg" aria-hidden="true" class="image-avatar"/>'
  },
  {
      "id": "card6",
      "categoryTitle": "Category",
      "category": "Technical",
      "fundTitle": "Hedgie banner6",
      "fundingAmount": "$5.000-$6.000",
      "completed": true,
      "descriptionText": "They can be used to deliver spacecraft to the ends of the solar system with hyper-pinpoint accuracy.",
      "avatar": '<img src="images/avatar.svg" aria-hidden="true" class="image-avatar"/>'
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
const applyButton = document.getElementById("apply");

let toggleCompleted = true;
let category = "all";

/*let updatedCards = cardsData; */
/*keeps track of the cards currently rendered on the page */
/* Rendering all cards that are completed when page loads */

document.addEventListener('DOMContentLoaded', function() {
  const loadingCards = cardsData.filter((card) => card.completed === true);
  renderCards(loadingCards);
  console.log("loadingCards", loadingCards);
  updateButtonText();
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

/******filters*******/


buttonAll.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  if (toggleCompleted) {
      const allCards = cardsData.filter((card) => card.completed === true);
      console.log("allCards",allCards)
      renderCards(allCards);
  } else {
      renderCards(cardsData);
  }
  category = "All";
});

tech.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  if (toggleCompleted) {
      const allCompletedTechCards = cardsData.filter((card) => card.completed === true && card.category === "Technical");
      renderCards(allCompletedTechCards);
      console.log("allCompletedTechCards",allCompletedTechCards)
  } else {
      const allTechCards = cardsData.filter((card) => card.category === "Technical");
      renderCards(allTechCards);
  }
  category = "Technical";
});


governance.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  if (toggleCompleted) {
      const allCompletedGovernanceCards = cardsData.filter((card) => card.completed === true && card.category === "Governance");
      renderCards(allCompletedGovernanceCards);
  } else {
      const allGovernanceCards = cardsData.filter((card) => card.category === "Governance");
      renderCards(allGovernanceCards);
  }
  category = "Governance";
});

growth.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  if (toggleCompleted) {
      const allCompletedGrowthCards = cardsData.filter((card) => card.completed === true && card.category === "Growth");
      renderCards(allCompletedGrowthCards);
  } else {
      const allGrowthCards = cardsData.filter((card) => card.category === "Growth");
      renderCards(allGrowthCards);
  }
  category = "Growth";
});

analytics.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  if (toggleCompleted) {
      const allCompletedAnalyticsCards = cardsData.filter((card) => card.completed === true && card.category === "Analytics");
      renderCards(allCompletedAnalyticsCards);
  } else {
      const allAnalyticsCards = cardsData.filter((card) => card.category === "Analytics");
      renderCards(allAnalyticsCards);
  }
  category = "Analytics";
});

thirdParty.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  if (toggleCompleted) {
      const allCompletedthirdPartyCards = cardsData.filter((card) => card.completed === true && card.category === "ThirdParty");
      renderCards(allCompletedthirdPartyCards);
  } else {
      const allthirdPartyCards = cardsData.filter((card) => card.category === "ThirdParty");
      renderCards(allthirdPartyCards);
  }
  category = "ThirdParty";
});


/**Kanske kan kolla vilken categori o värdet på toggleCompleted för att rendera rätt värde.
Men jag får inte toggle att funka. Den klickar två gånger**/

/* 
toggle.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  if (toggleCompleted) {
      console.log("Showing all cards since the value was true.");
      renderCards(updatedCards); // Render all cards
  } else {
      console.log("Showing only true cards.");
      const trueCards = cardsData.filter((card) => card.completed === true);
      renderCards(trueCards);
  }
  toggleCompleted = !toggleCompleted;
});
*/


/**apply**/

function updateButtonText() {
  if (window.innerWidth > 1022) {
    applyButton.textContent = "Apply for grant";
  } else {
    applyButton.textContent = "Apply";
  }
}
window.addEventListener("resize", updateButtonText);


/******/