document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");
  const questions = document.querySelectorAll("[data-faq-question]");

  const heroSection = document.querySelector(".hero");
  const heroHeight = heroSection.clientHeight;

  window.addEventListener("scroll", function () {
    const currentPosition = window.scrollY;

    if (currentPosition < heroHeight) {
      hideElements();
    } else {
      showElements();
    }
  });

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (botao) {
      const targetTab = botao.target.dataset.tabButton;
      const tab = document.querySelector(`[data-tab-id=${targetTab}]`);
      hideTabs();
      tab.classList.add("shows__list--is-active");
      removeButtonActive();
      botao.target.classList.add("shows__tabs__button--is-active");
    });
  }

  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", toggleAnswer);
  }
});

function hideElements() {
  const header = document.querySelector("header");
  header.classList.add("header--is-hidden");
}

function showElements() {
  const header = document.querySelector("header");
  header.classList.remove("header--is-hidden");
}

function hideTabs() {
  const tabsContainer = document.querySelectorAll("[data-tab-id]");

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove("shows__list--is-active");
  }
}

function removeButtonActive() {
  const buttons = document.querySelectorAll("[data-tab-button]");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("shows__tabs__button--is-active");
  }
}

function toggleAnswer(e) {
  const classOpen = "faq__questions__item--is-open";
  const targetParent = e.target.parentNode;

  targetParent.classList.toggle(classOpen);
}
