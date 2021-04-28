import "./sass/main.scss";
import { startChooseGame } from "./js/choosegame";
import { postForm } from "./js/post";
import { openForm } from "./js/landingpage";

window.addEventListener("DOMContentLoaded", initialize);

function initialize() {
  addListeners();
  startChooseGame();
}

function addListeners() {
  document.querySelector("button[type=submit]").addEventListener("click", postForm);
  document.querySelector("#landing_page button:nth-of-type(2)").addEventListener("click", openForm);
}
