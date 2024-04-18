const html = (strings, ...values) =>
  String.raw(
    {
      raw: strings,
    },
    ...values
  );

/*********fetch API-data*********/

const url = "https://nextjs-dashboard-6sedkcpnq-rayproud.vercel.app/api";
let allCompletedFunds;
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

document.addEventListener("DOMContentLoaded", function () {
  fetchAPI(url, (data, error) => {
    if (error) {
      console.error("Error fetching data:", error);
      return;
    }
    allFunds = data.funds;
    const allCompletedFundsLoading = allFunds.filter(
      (card) => card.completed === true
    ); //varför måste den vara const här?
    renderCards(allCompletedFundsLoading);
    allCompletedFunds = allCompletedFundsLoading;
    updateButtonText();
  });
});

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

function filterCardsCompleted(cards) {
  const onlyCompleted = cards.filter((card) => card.completed === true);
  return onlyCompleted;
}

/******filters*******/

buttonAll.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  if (toggleCompleted) {
    const completed = filterCardsCompleted(allFunds);
    renderCards(completed);
  } else {
    renderCards(allFunds);
  }
});

tech.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  const techCards = allFunds.filter(
    (card) => card.category === "Technical/Tool Development"
  );
  if (toggleCompleted) {
    const completed = filterCardsCompleted(techCards);
    renderCards(completed);
  } else {
    renderCards(techCards);
  }
});

governance.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  const govCards = allFunds.filter((card) => card.category === "Governance");
  if (toggleCompleted) {
    const completed = filterCardsCompleted(govCards);
    renderCards(completed);
  } else {
    renderCards(govCards);
  }
});

growth.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  const growthCards = allFunds.filter(
    (card) => card.category === "Growth / Marketing"
  );
  if (toggleCompleted) {
    const completed = filterCardsCompleted(growthCards);
    renderCards(completed);
  } else {
    renderCards(growthCards);
  }
});

analytics.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  const analyticsCards = allFunds.filter(
    (card) => card.category === "Analytics"
  );
  if (toggleCompleted) {
    const completed = filterCardsCompleted(analyticsCards);
    renderCards(completed);
  } else {
    renderCards(analyticsCards);
  }
});

thirdParty.addEventListener("click", () => {
  cardsGrid.innerHTML = "";
  const thirdPartyCards = allFunds.filter(
    (card) => card.category === "Third Party Provider"
  );
  if (toggleCompleted) {
    const completed = filterCardsCompleted(thirdPartyCards);
    renderCards(completed);
  } else {
    renderCards(thirdPartyCards);
  }
});

toggle.addEventListener("click", () => {
  if (toggleCompleted) {
    renderCards(allFunds);
  } else {
    renderCards(allCompletedFunds);
  }
  toggleCompleted = !toggleCompleted;
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
