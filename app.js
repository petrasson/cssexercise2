const html = (strings, ...values) =>
  String.raw(
    {
      raw: strings,
    },
    ...values
  );

/********* fetch API-data *********/

const url = "https://nextjs-dashboard-6sedkcpnq-rayproud.vercel.app/api";
let allFunds; /*to have maximum funds avaliable for toggling "all button"*/
let allCurrentFunds; /*to have maximum funds avaliable for toggling*/
let chosenFunds; /*current funds to render*/
let toggleCompleted = true;
let selectedFilter = null;

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
      console.log("API request failed. Trying local JSON file.", error);

      fetch("data.json")
        .then((localResponse) => {
          if (!localResponse.ok) {
            throw new Error(
              `Local file error! Status: ${localResponse.status}`
            );
          }
          return localResponse.json();
        })
        .then((localData) => {
          callback(localData);
        })
        .catch((localError) => {
          callback(null, localError);
          console.log("Local file fetch failed as well.", localError);
        });
    });
};

const applyButton = document.getElementById("apply");
const filterContainer = document.querySelector(".filter-container");
const filterWrapper = document.querySelector(".filter-wrapper");
const toggle = document.getElementById("toggle");
const buttonAll = document.getElementById("all-funds");
const cardsGrid = document.querySelector(".card-grid-section");

/************************ FUNCTIONS ********************************/

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

/******** Highlight current filter ********/

function highlight(filter) {
  if (selectedFilter) {
    selectedFilter.classList.remove("highlight");
  }
  selectedFilter = filter;
  selectedFilter.classList.add("highlight");
}

/******** Filter funds ********/

function filterCompleted(funds) {
  const completedFunds = funds.filter((fund) => fund.completed === true);
  return completedFunds;
}

function filterOnCategory(category) {
  const allFundsInCategory = allFunds.filter(
    (fund) => fund.category === category
  );
  allCurrentFunds = allFundsInCategory;
  return allFundsInCategory;
}

/******** Render cards ********/

function renderCards(funds) {
  cardsGrid.innerHTML = "";
  funds.forEach((fund) => {
    let attendees = "";

    if (fund.attendees.length > 3) {
      for (let i = 0; i < 3; i++) {
        attendees += `<div class="image-avatar-wrapper"><img src="images/${fund.attendees[i]}.png" alt="Avatar for participant" /></div>`;
      }
      attendees += `<div class="image-avatar-wrapper"><div class="purple-circle"><p class ="attendee-number">+${
        fund.attendees.length - 3
      }</p></div></div>`;
    } else {
      attendees = fund.attendees
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
          <p class="sub-title">${fund.category}</p>
          <p class="card-title">${fund.title}</p>
          <p class="sub-title">
            Funding amount:
            ${fund.funding_amount_from}-${fund.funding_amount_to}
          </p>
          <p class="card-text">${fund.description}</p>
          <div class="avatar-container">${attendees}</div>
        </div>
      `
    );
  });
}

/************************** EVENTLISTENERS ********************************/

/****** Fetch data when page loads *******/

document.addEventListener("DOMContentLoaded", function () {
  fetchAPI(url, (data, error) => {
    if (error) {
      console.error("Error fetching data:", error);
      return;
    }
    allFunds = data.funds;
    allCurrentFunds = allFunds;
    chosenFunds = filterCompleted(allFunds);
    renderCards(chosenFunds);
    updateButtonText();
  });
});

/****** Update text on Apply button *******/

window.addEventListener("resize", updateButtonText);

/****** Filters *******/

buttonAll.addEventListener("click", () => {
  allCurrentFunds = allFunds;
  if (toggleCompleted) {
    const completedFunds = filterCompleted(allFunds);
    chosenFunds = completedFunds;
  } else {
    chosenFunds = allFunds;
  }
  renderCards(chosenFunds);
});

filterWrapper.addEventListener("click", function (event) {
  if (event.target.matches(".menu-filter")) {
    const category = event.target.getAttribute("data-filter");
    allCurrentFunds = filterOnCategory(category);
    if (toggleCompleted) {
      const completedFundsInCategory = filterCompleted(allCurrentFunds);
      chosenFunds = completedFundsInCategory;
    } else {
      chosenFunds = allCurrentFunds;
    }
    renderCards(chosenFunds);
  }
});

toggle.addEventListener("click", function (event) {
  event.stopPropagation();
  if (toggleCompleted) {
    chosenFunds = allCurrentFunds;
  } else {
    chosenFunds = filterCompleted(allCurrentFunds);
  }
  renderCards(chosenFunds);
  toggleCompleted = !toggleCompleted;
});

/****** Highlight active filters ******/

filterContainer.addEventListener("click", function (event) {
  let target = event.target;
  if (target.classList.contains("menu-filter") || target.id === "all-funds") {
    highlight(target);
  }
});
