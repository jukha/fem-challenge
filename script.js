"use strict";
const cardsParent = document.querySelector(".cards");
const tabsParent = document.querySelector(".tabs");
const tabs = document.querySelectorAll(".tabs a");
let activeTab = "daily";
const card = (title, currHrs, prevHrs) => {
  const cardHTML = `<div class="card">
    <div class="card-bg"></div>
    <div class="card-content">
    <div class="card-title">
        <h3>${title}</h3>
        <img src="images/icon-ellipsis.svg" alt="">
      </div>
      <h2 class="header"><span class="currHrs">${currHrs}</span>hrs</h2>
      <p class="duration">Last Week - <span class="prevHrs">${prevHrs}</span>hrs</p>
    </div>
  </div>`;
  const div = document.createElement("div");
  div.innerHTML = cardHTML;
  return div.firstChild;
};
const data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const makeCards = () => {
  for (let i = 0; i < data.length; i++) {
    const currObj = data[i];
    cardsParent.append(
      card(
        currObj.title,
        currObj.timeframes[activeTab].current,
        currObj.timeframes[activeTab].previous
      )
    );
  }
};

const changeHrs = () => {
  const prevHrsEl = document.querySelectorAll(".prevHrs");
  const currHrsEl = document.querySelectorAll(".currHrs");
  for (let i = 0; i < data.length; i++) {
    currHrsEl[i].textContent = data[i].timeframes[activeTab].current;
    prevHrsEl[i].textContent = data[i].timeframes[activeTab].previous;
  }
};

makeCards();

tabsParent.addEventListener("click", (e) => {
  for (let i = 0; i < tabs.length; i++) {
    if (e.target === tabs[i]) {
      activeTab = e.target.textContent.toLowerCase();
      tabs[i].classList.add("active");
      changeHrs();
    } else {
      if (e.target === tabsParent) {
        break;
      }
      tabs[i].classList.remove("active");
    }
  }
});
