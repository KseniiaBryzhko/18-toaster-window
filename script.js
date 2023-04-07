const toaster = document.querySelector(".toaster");
const closeButton = document.querySelector(".close-toaster");

let alreadyOpened = false;

const toogleToaster = (shouldBeOpen) => {
  if (shouldBeOpen && !alreadyOpened) {
    toaster.classList.remove("collapsed");
    alreadyOpened = true;
    setTimeout(() => {
      toaster.classList.add("collapsed");
    }, 10000);
  } else {
    toaster.classList.add("collapsed");
  }
};

closeButton.addEventListener("click", () => toogleToaster(false));

// document.addEventListener("mouseout", () => {
//   toogleToaster(true);
// });

document.addEventListener("mouseout", (e) => {
  if (!e.relatedTarget) {
    toogleToaster(true);
  }
});
