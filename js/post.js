import { settings } from "./settings";

export async function postForm(e) {
  e.preventDefault();
  // Get form
  const form = document.querySelector("form");

  // Get form data
  const formData = new FormData(form);

  console.log(form.checkValidity());

  const formFields = Object.fromEntries(formData.entries());
  const games = formData.getAll("games");

  console.log(formFields);

  const formObject = {
    username: formFields.username,
    email: formFields.email,
    password: formFields.password,
    country: formFields.country,
    date: formFields.day,
    month: formFields.month,
    year: formFields.year,
    games: games,
    playtime: formFields.playtime,
    sleeptime: formFields.sleep,
    wellrested: formFields.wellrested,
    headache: formFields.headache,
    exercise: formFields.exercise,
    meals: formFields.meals,
  };

  const postData = JSON.stringify(formObject);

  // Send the game object to the server
  const response = await fetch(settings.database.url, {
    method: "POST",
    headers: settings.database.headers,
    body: postData,
  });

  // If successfully added to server
  if (response.ok) {
    const json = await response.json();
    console.log(json);

    const submitBtn = document.querySelector("button[type=submit]");
    // TODO: Remove this - Only for fun
    submitBtn.style.backgroundColor = "#abf49d";
    submitBtn.style.borderColor = "#abf49d";
    submitBtn.textContent = "Submitted";
  } else {
    // Else show error
    console.log(`HTTP-Error: ${response.status}`);
  }

  console.log(postData);
}
