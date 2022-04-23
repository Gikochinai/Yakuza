const overlay = document.querySelector("#overlay");

document.querySelector('#show-model').addEventListener("click", () => {
  overlay.style.display="block";
});

document.querySelector('#close-model-btn').addEventListener("click", () => {
  overlay.style.display="none";
});
