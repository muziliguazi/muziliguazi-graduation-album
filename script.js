const viewer = document.querySelector("#viewer");
const viewerImage = document.querySelector("#viewerImage");
const viewerTitle = document.querySelector("#viewerTitle");
const closeButton = document.querySelector(".close");

document.querySelectorAll(".photo-button").forEach((button) => {
  button.addEventListener("click", () => {
    viewerImage.src = button.dataset.full;
    viewerImage.alt = button.dataset.title;
    viewerTitle.textContent = button.dataset.title;
    viewer.showModal();
  });
});

closeButton.addEventListener("click", () => viewer.close());
viewer.addEventListener("click", (event) => {
  if (event.target === viewer) {
    viewer.close();
  }
});
