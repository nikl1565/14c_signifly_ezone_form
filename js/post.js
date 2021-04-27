export function postForm(event) {
  event.preventDefault();
  // Get form
  const form = document.querySelector("form");

  // Get form data
  const formData = new FormData(form);

  console.log(form.checkValidity());

  const formFields = Object.fromEntries(formData.entries());
  const games = formData.getAll("games");

  const formObject = {
    username: formFields.username,
    password: formFields.password,
    email: formFields.email,
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

  console.log(formObject);
}
