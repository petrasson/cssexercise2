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

const hamburgBtn = document.querySelector(".hamburger-btn");
const closeBtn = document.querySelector(".close-btn");
const navWrapper = document.querySelector(".top-nav-wrapper");
const body = document.body;

const toggle = document.getElementById("toggle");
const buttonAll = document.getElementById("all-cards");
const filterContainer = document.querySelector(".filter-container");
const filterWrapper = document.querySelector(".filter-wrapper");
const cardsGrid = document.querySelector(".card-grid-section");

const applyButton = document.getElementById("apply");

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
    let attendees = "";

    if (card.attendees.length > 3) {
      for (let i = 0; i < 3; i++) {
        attendees += `<div class="image-avatar-wrapper"><img src="images/${card.attendees[i]}.png" alt="Avatar for participant" /></div>`;
      }
      attendees += `<div class="image-avatar-wrapper"><div class="purple-circle-wrapper"><div classname ="purple-circle"><p class ="attendee-number">+${
        card.attendees.length - 3
      }</p></div></div></div>`;
    } else {
      attendees = card.attendees
        .map(
          (name) =>
            `<p class="image-avatar-wrapper"><img src="images/${name}.png" alt="Avatar for participant" /></p>`
        )
        .join("");
    }
    cardsGrid.insertAdjacentHTML(
      "beforeend",
      html`
        <div class="card">
          <p class="sub-title">${card.category}</p>
          <p class="card-title">${card.title}</p>
          <p class="sub-title">
            Funding amount:
            ${card.funding_amount_from}-${card.funding_amount_to}
          </p>
          <p class="card-text">${card.description}</p>
          <div class="avatar-container">${attendees}</div>
        </div>
      `
    );
  });
  cardsCurrentlyShowing = cards;
}

/****** Highligt active filters ******/

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

/********* Hamburger menu *********/

hamburgBtn.addEventListener("click", () => {
  [hamburgBtn, closeBtn, navWrapper, body].forEach((e) => {
    e.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  console.log("hello");
  [hamburgBtn, closeBtn, navWrapper, body].forEach((e) => {
    e.classList.remove("active");
  });
});

/****** Filters *******/

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

filterWrapper.addEventListener("click", function (event) {
  if (event.target.matches(".menu-filter")) {
    const filterType = event.target.getAttribute("data-filter");
    filterAndRenderCards(filterType);
  }
});

function filterAndRenderCards(category) {
  cardsGrid.innerHTML = "";
  const allTechCards = allFunds.filter((card) => card.category === category);

  allFundsInCategory = allTechCards;
  if (toggleCompleted) {
    const completedTechCards = filterCompletedCards(allTechCards);
    renderCards(completedTechCards);
  } else {
    renderCards(allTechCards);
  }
}

toggle.addEventListener("click", function (event) {
  event.stopPropagation();

  if (toggleCompleted) {
    renderCards(allFundsInCategory);
  } else {
    const completedFunds = filterCompletedCards(allFundsInCategory);
    renderCards(completedFunds);
  }

  toggleCompleted = !toggleCompleted;
});

/******** Text on Apply Button ********/

function updateButtonText() {
  let applyButtonText = "";
  if (window.innerWidth > 1022) {
    applyButtonText = "Apply for grant";
  } else {
    applyButtonText = "Apply";
  }
  applyButton.textContent = applyButtonText;
}
window.addEventListener("resize", updateButtonText);
