export function openForm() {
  window.location.href = "#landing_page";
  document.querySelector("#form-slide_first").scrollIntoView({ behavior: "smooth", block: "end" });
  setTimeout(() => {
    document.querySelector("#landing_page").style.display = "none";
    document.querySelector("nav").classList.remove("hidden");
  }, 500);
}
