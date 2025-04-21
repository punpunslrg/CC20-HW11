const subMenu = document.querySelector(".sub-menu");
const hamButton = document.querySelector(".ham-button");

window.addEventListener("click",(e) => {
  if (e.target.closest(".ham-button"))
  {
    subMenu.style.display = subMenu.style.display === "flex" ? "none" : "flex";
  } else {
    subMenu.style.display = "none"
  }
});