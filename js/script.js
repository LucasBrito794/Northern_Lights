let button = document.querySelector(".button_menu");
let img_container = document.querySelector("#img_container");
let conteiner_menu = document.querySelector("#conteiner_menu");
let img_fechar_container = document.querySelector("#img_fechar_container");

// Botões de link para os Títulos do Site Mobile
let button_1 = document.querySelector("#button_1");
let button_2 = document.querySelector("#button_2");
let button_3 = document.querySelector("#button_3");
let button_4 = document.querySelector("#button_4");

button.addEventListener("click", () => {
  conteiner_menu.classList.remove("hidden");
});

img_fechar_container.addEventListener("click", () => {
  conteiner_menu.classList.add("hidden");
});

button_1.addEventListener("click", () => {
  conteiner_menu.classList.add("hidden");
});

button_2.addEventListener("click", () => {
  conteiner_menu.classList.add("hidden");
});

button_3.addEventListener("click", () => {
  conteiner_menu.classList.add("hidden");
});

button_4.addEventListener("click", () => {
  conteiner_menu.classList.add("hidden");
});
