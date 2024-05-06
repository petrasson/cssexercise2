const html = (strings, ...values) =>
  String.raw(
    {
      raw: strings,
    },
    ...values
  );

/*********fetch API-data*********/

const url = "https://nextjs-dashboard-6sedkcpnq-rayproud.vercel.app/api";
let allFundsInCategory;
let allFunds;
let toggleCompleted = true;

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
      callback(null, error);
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
const toggle = document.getElementById("toggle");
const rightArrow = document.querySelector(".right-arrow");
const applyButton = document.getElementById("apply");
const filterContainer = document.querySelector(".filter-container");

document.addEventListener("DOMContentLoaded", function () {
  fetchAPI(url, (data, error) => {
    if (error) {
      console.error("Error fetching data:", error);
      return;
    }
    allFunds = data.funds;
    allFundsInCategory = allFunds;
    const cardsPageLoading = filterCompletedCards(allFunds);
    console.log("cardsPageLoading", cardsPageLoading);
    renderCards(cardsPageLoading);
    updateButtonText();
  });
});

function filterCompletedCards(cards) {
  const allCompletedCards = cards.filter((card) => card.completed === true);
  return allCompletedCards;
}

function renderCards(cards) {
  cardsGrid.innerHTML = "";
  cards.forEach((card) => {
    let truncatedDescription =
      card.description.length > 100
        ? card.description.slice(0, 100) + "..."
        : card.description;
    let attendees = "";
    if (card.attendees.length > 3) {
      for (let i = 0; i < 3; i++) {
        attendees += `<p class="image-avatar-wrapper"><img src="images/${card.attendees[i]}.png" /></p>`;
      }
      attendees += `<p class="image-avatar-wrapper-purple"><img src="images/purple-image.png"/><p class ="attendee-number">+${
        card.attendees.length - 3
      }</p></p>`;
    } else {
      attendees = card.attendees
        .map(
          (name) =>
            `<p class="image-avatar-wrapper"><img src="images/${name}.png" /></p>`
        )
        .join("");
    }
    cardsGrid.insertAdjacentHTML(
      "beforeend",
      html`
        <div class="card">
          <p class="sub-header">${card.category}</p>
          <p class="card-header">${card.title}</p>
          <p class="sub-header">
            Funding amount:
            ${card.funding_amount_from}-${card.funding_amount_to}
          </p>
          <p class="card-text">${truncatedDescription}</p>
          <div class="avatar-container">${attendees}</div>
        </div>
      `
    );
  });
  cardsCurrentlyShowing = cards;
  console.log("cardsCurrentlyShowing", cardsCurrentlyShowing);
}

/******event delegation filters******/

let selectedFilter;
filterContainer.addEventListener("click", function (event) {
  let target = event.target;
  if (
    target.classList.contains("menu-filter") ||
    (target.classList.contains("button") &&
      target.classList.contains("_primary"))
  ) {
    highlight(target);
    console.log("target", target);
  }
});

function highlight(element) {
  if (selectedFilter) {
    selectedFilter.classList.remove("highlight");
  }
  selectedFilter = element;
  selectedFilter.classList.add("highlight");
}

/******filters*******/

buttonAll.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  if (toggleCompleted) {
    const completedFunds = filterCompletedCards(allFunds);
    renderCards(completedFunds);
    console.log("render only completed cards", completedFunds);
    console.log("toggleCompleted", toggleCompleted);
  } else {
    renderCards(allFunds);
    allFundsInCategory = allFunds;
    console.log("render all cards", allFunds);
    console.log("toggleCompleted", toggleCompleted);
  }
});

tech.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  const allTechCards = allFunds.filter(
    (card) => card.category === "Technical/Tool Development"
  );
  allFundsInCategory = allTechCards;
  console.log("allFundsInCategory", allFundsInCategory);
  if (toggleCompleted) {
    const completedTechCards = filterCompletedCards(allTechCards);
    renderCards(completedTechCards);
  } else {
    renderCards(allTechCards);
  }
});

governance.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  const allGovCards = allFunds.filter((card) => card.category === "Governance");
  allFundsInCategory = allGovCards;
  console.log("allFundsInCategory", allFundsInCategory);
  if (toggleCompleted) {
    const completeGovCards = filterCompletedCards(allGovCards);
    renderCards(completeGovCards);
  } else {
    renderCards(allGovCards);
  }
});

growth.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  const allGrowthCards = allFunds.filter(
    (card) => card.category === "Growth / Marketing"
  );
  allFundsInCategory = allGrowthCards;
  console.log("allFundsInCategory", allFundsInCategory);
  if (toggleCompleted) {
    const completedGrowthCards = filterCompletedCards(allGrowthCards);
    renderCards(completedGrowthCards);
  } else {
    renderCards(allGrowthCards);
  }
});

analytics.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  const allAnalyticsCards = allFunds.filter(
    (card) => card.category === "Analytics"
  );
  allFundsInCategory = allAnalyticsCards;
  console.log("allFundsInCategory", allFundsInCategory);
  if (toggleCompleted) {
    const completedAnalyticsCards = filterCompletedCards(allAnalyticsCards);
    renderCards(completedAnalyticsCards);
  } else {
    renderCards(allAnalyticsCards);
  }
});

thirdParty.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  const allThirdPartyCards = allFunds.filter(
    (card) => card.category === "Third Party Provider"
  );
  allFundsInCategory = allThirdPartyCards;
  console.log("allFundsInCategory", allFundsInCategory);

  if (toggleCompleted) {
    const completedThirdPartyCards = filterCompletedCards(allThirdPartyCards);
    renderCards(completedThirdPartyCards);
  } else {
    renderCards(allThirdPartyCards);
  }
});

toggle.addEventListener("click", () => {
  if (toggleCompleted) {
    renderCards(allFundsInCategory);
  } else {
    const completedFunds = filterCompletedCards(allFundsInCategory);
    renderCards(completedFunds);
  }
  toggleCompleted = toggleCompleted;
});

/**apply**/

function updateButtonText() {
  if (window.innerWidth > 1022) {
    applyButton.textContent = "Apply for grant";
  } else {
    applyButton.textContent = "Apply";
  }
}
window.addEventListener("resize", updateButtonText);
