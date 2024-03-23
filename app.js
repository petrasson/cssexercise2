const html = (strings, ...values) => String.raw({
  raw: strings
}, ...values);


/*********fetch API-data*********/

const url = "https://nextjs-dashboard-6sedkcpnq-rayproud.vercel.app/api";
let funds;
const fetchAPI = (url, callback) => {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      callback(data);
      console.log("data", data);
    })
    .catch((error) => {
      callback(null, error)
      console.log("error", error);
    });
};



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

/*let updatedCards = funds; */
/*keeps track of the cards currently rendered on the page */
/* Rendering all cards that are completed when page loads */

document.addEventListener('DOMContentLoaded', function() {
  fetchAPI(url, (data, error) => {
    if (error) {
      console.error("Error fetching data:", error);
      return;
    }
    let funds = data.funds;
    
    const loadingCards = funds.filter((card) => card.completed === true);
    renderCards(loadingCards);
    updateButtonText();
  });
});

function renderCards(cards) {
  cardsGrid.innerHTML = "";
  cards.forEach((card) => {
    let truncatedDescription = card.description.length > 100 ? card.description.slice(0, 100) + "..." : card.description;
    let attendees = "";
    if (card.attendees.length > 3) {
      for (let i = 0; i < 3; i++) {
        attendees += `<p class="image-avatar"><img src="images/${card.attendees[i]}.png" /></p>`;
      }
      attendees += `<p class="image-avatar">+${card.attendees.length-3}<img src="images/purple-image.png" /></p>`;
    } else {
      attendees = card.attendees.map(name => `<p class="image-avatar"><img src="images/${name}.png" /></p>`).join("");
    }
      cardsGrid.insertAdjacentHTML(
          "beforeend",
          html`
    <div class="card">
    <p class="sub-header">${card.category}</p>
    <p class="card-header">${card.title}</p>
    <p class="sub-header">Funding amount: ${card.funding_amount_from}-${card.funding_amount_to}</p>
    <p class="card-text">${truncatedDescription}</p>
    <div class="avatar-wrapper">${attendees}</div>
    </div>
    `
    );
  });
}
/*<img src="images/purpe-image.png" /> */

/******filters*******/


buttonAll.addEventListener("click", () => {
  funds.innerHTML = "";
  if (toggleCompleted) {
      const allCards = funds.filter((card) => card.completed === true);
      console.log("allCards",allCards)
      renderCards(allCards);
  } else {
      renderCards(funds);
  }
  category = "All";
});

tech.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  if (toggleCompleted) {
      const allCompletedTechCards = funds.filter((card) => card.completed === true && card.category === "Technical");
      renderCards(allCompletedTechCards);
      console.log("allCompletedTechCards",allCompletedTechCards)
  } else {
      const allTechCards = funds.filter((card) => card.category === "Technical");
      renderCards(allTechCards);
  }
  category = "Technical";
});


governance.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  if (toggleCompleted) {
      const allCompletedGovernanceCards = funds.filter((card) => card.completed === true && card.category === "Governance");
      renderCards(allCompletedGovernanceCards);
  } else {
      const allGovernanceCards = funds.filter((card) => card.category === "Governance");
      renderCards(allGovernanceCards);
  }
  category = "Governance";
});

growth.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  if (toggleCompleted) {
      const allCompletedGrowthCards = funds.filter((card) => card.completed === true && card.category === "Growth");
      renderCards(allCompletedGrowthCards);
  } else {
      const allGrowthCards = funds.filter((card) => card.category === "Growth");
      renderCards(allGrowthCards);
  }
  category = "Growth";
});

analytics.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  if (toggleCompleted) {
      const allCompletedAnalyticsCards = funds.filter((card) => card.completed === true && card.category === "Analytics");
      renderCards(allCompletedAnalyticsCards);
  } else {
      const allAnalyticsCards = funds.filter((card) => card.category === "Analytics");
      renderCards(allAnalyticsCards);
  }
  category = "Analytics";
});

thirdParty.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  if (toggleCompleted) {
      const allCompletedthirdPartyCards = funds.filter((card) => card.completed === true && card.category === "ThirdParty");
      renderCards(allCompletedthirdPartyCards);
  } else {
      const allthirdPartyCards = funds.filter((card) => card.category === "ThirdParty");
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
      const trueCards = funds.filter((card) => card.completed === true);
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
