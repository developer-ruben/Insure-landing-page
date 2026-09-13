const button = document.getElementById("menu-button");
const buttonIcon = button.querySelector("img");

const menu = document.getElementById("menu");

button.addEventListener("click", () => {
  const isOpen = menu.classList.contains("nav--open");
  menu.classList.toggle("nav--open", !isOpen);
  button.classList.toggle("header__button--rotate", !isOpen);
  setTimeout(() => {
    buttonIcon.src = isOpen
      ? "./images/icon-hamburger.svg"
      : "./images/icon-close.svg";
  }, 400);
  button.setAttribute(
    "aria-label",
    isOpen ? "Open navigation menu" : "Close navigation menu",
  );
  button.setAttribute("aria-expanded", isOpen ? "false" : "true");
});
