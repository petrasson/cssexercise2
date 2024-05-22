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
    })
    .catch((error) => {
      callback(null, error);
      console.log("error", error);
    });
};

const cardsGrid = document.querySelector(".card-grid-section");
const buttonAll = document.getElementById("all-cards");
const hamburger = document.querySelector(".hamburger");
const closeX = document.querySelector(".close");
const menuText = document.querySelector(".nav-text");
const tech = document.getElementById("tech-filter");
const governance = document.getElementById("governance-filter");
const growth = document.getElementById("growth-filter");
const analytics = document.getElementById("analytics-filter");
const thirdParty = document.getElementById("third-party-filter");
const toggleBox = document.querySelector(".toggle-box");
const circle = document.querySelector(".circle");
const checkBox = document.getElementById("checkbox");
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
  }
});

function highlight(element) {
  if (selectedFilter) {
    selectedFilter.classList.remove("highlight");
  }
  selectedFilter = element;
  selectedFilter.classList.add("highlight");
}

/*********hamburger menu *********/
hamburger.addEventListener("click", () => {
  console.log("hej", hamburger);
  hamburger.classList.add("active"); /* display none */
  menuText.classList.add("active"); /* display flex, column */
  closeX.classList.add("active"); /* display block, (colum)*/
});

closeX.addEventListener("click", () => {
  menuText.classList.remove("active");
  hamburger.classList.remove("active");
  closeX.classList.remove("active");
});

/******filters*******/

buttonAll.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  if (toggleCompleted) {
    const completedFunds = filterCompletedCards(allFunds);
    renderCards(completedFunds);
  } else {
    renderCards(allFunds);
    allFundsInCategory = allFunds;
  }
});

tech.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  const allTechCards = allFunds.filter(
    (card) => card.category === "Technical/Tool Development"
  );
  allFundsInCategory = allTechCards;
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
  if (toggleCompleted) {
    const completedThirdPartyCards = filterCompletedCards(allThirdPartyCards);
    renderCards(completedThirdPartyCards);
  } else {
    renderCards(allThirdPartyCards);
  }
});

toggleBox.addEventListener("click", function (event) {
  // Prevent the event from bubbling up further.
  event.stopPropagation();

  if (toggleCompleted) {
    renderCards(allFundsInCategory);
    circle.style.left = "-3px";
    toggleBox.style.backgroundColor = "var(--primary-text-color)";
  } else {
    circle.style.left = "15px";
    toggleBox.style.backgroundColor = "var(--accent-color)";
    const completedFunds = filterCompletedCards(allFundsInCategory);
    renderCards(completedFunds);
  }

  toggleCompleted = !toggleCompleted;
});

checkBox.addEventListener("click", function (event) {
  event.stopPropagation();
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
