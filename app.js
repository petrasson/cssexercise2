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

const body = document.body;
const hamburger = document.querySelector(".hamburger");
const closeX = document.querySelector(".close");
const menuText = document.getElementById("nav-top");
const toggle = document.getElementById("toggle");
const buttonAll = document.getElementById("all-cards");
const filterContainer = document.querySelector(".filter-container");
const filterWrapper = document.querySelector(".filter-wrapper");
const cardsGrid = document.querySelector(".card-grid-section");
const applyButton = document.getElementById("apply");
const socialMedia = document.getElementById("nav-social-media");

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
          <p class="sub-header">${card.category}</p>
          <p class="card-header">${card.title}</p>
          <p class="sub-header">
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

/******highligt active filters******/

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

/*********hamburger menu*********/

hamburger.addEventListener("click", () => {
  hamburger.classList.add("active");
  menuText.classList.add("active");
  closeX.classList.add("active");
  body.classList.add("active");
  socialMedia.classList.add("active");
});

closeX.addEventListener("click", () => {
  menuText.classList.remove("active");
  hamburger.classList.remove("active");
  closeX.classList.remove("active");
  body.classList.remove("active");
  socialMedia.classList.remove("active");
});

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

/******filters*******/

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
  // Prevent the event from bubbling up further.
  event.stopPropagation();

  if (toggleCompleted) {
    renderCards(allFundsInCategory);
  } else {
    const completedFunds = filterCompletedCards(allFundsInCategory);
    renderCards(completedFunds);
  }

  toggleCompleted = !toggleCompleted;
});

checkBox.addEventListener("click", function (event) {
  event.stopPropagation();
});

/********apply********/

function updateButtonText() {
  if (window.innerWidth > 1022) {
    applyButton.textContent = "Apply for grant";
  } else {
    applyButton.textContent = "Apply";
  }
}
window.addEventListener("resize", updateButtonText);
