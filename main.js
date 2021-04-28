import "./sass/main.scss";
import { startChooseGame } from "./js/choosegame";
import { postForm } from "./js/post";
import { openForm } from "./js/landingpage";
import {scrollProgressBar} from "./js/scroll_progress_bar.js"

window.addEventListener("DOMContentLoaded", initialize);

function initialize() {
  addListeners();
  startChooseGame();
  scrollProgressBar();
}

function addListeners() {
  document.querySelector("button[type=submit]").addEventListener("click", postForm);
  document.querySelector("#landing_page button:nth-of-type(2)").addEventListener("click", openForm);
}
