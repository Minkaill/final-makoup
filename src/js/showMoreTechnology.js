function showMoreOff() {
  let btn = document.querySelector(".btn-read_th");
  let itemsBlock = document.querySelector(".technologys");
  let btnIcon = document.querySelector(".btn-block__icon");
  btn.addEventListener("click", () => {
    itemsBlock.style.height = "160px";
    btnIcon.style.transform = "rotate(0deg)";
    checkHeightForDisabledShow();
  });
}

function showMoreOn() {
  let btn = document.querySelector(".btn-read_th");
  let itemsBlock = document.querySelector(".technologys");
  let btnIcon = document.querySelector(".btn-block__icon");
  btn.addEventListener("click", () => {
    itemsBlock.style.height = "auto";
    btnIcon.style.transform = "rotate(180deg)";
    checkHeightForEnabledShow();
  });
}
function checkHeightForEnabledShow() {
  let btn = document.querySelector(".btn-read_th");
  let itemsBlock = document.querySelector(".technologys");
  var wrapperHeight = itemsBlock.offsetHeight;
  if (wrapperHeight !== 160) {
    btn.textContent = "Скрыть все";
    showMoreOff();
  }
}
checkHeightForEnabledShow();

function checkHeightForDisabledShow() {
  let btn = document.querySelector(".btn-read_th");
  let itemsBlock = document.querySelector(".technologys");
  var wrapperHeight = itemsBlock.offsetHeight;
  if (wrapperHeight === 160) {
    btn.textContent = "Показать все";
    showMoreOn();
  }
}

checkHeightForDisabledShow();
