function showMoreOn() {
  let btn = document.querySelector(".btn-read");
  let itemsBlock = document.querySelector(".brands");
  btn.addEventListener("click", () => {
    itemsBlock.style.height = "auto";
    checkHeightForEnabledShow();
  });
}

function showMoreOff() {
  let btn = document.querySelector(".btn-read");
  let itemsBlock = document.querySelector(".brands");
  btn.addEventListener("click", () => {
    itemsBlock.style.height = "160px";
    checkHeightForDisabledShow();
  });
}

function checkHeightForDisabledShow() {
  let btn = document.querySelector(".btn-read");
  let itemsBlock = document.querySelector(".brands");
  var wrapperHeight = itemsBlock.offsetHeight;
  if (wrapperHeight === 160) {
    btn.textContent = "Показать все";
    showMoreOn();
  }
}

checkHeightForDisabledShow();

function checkHeightForEnabledShow() {
  let btn = document.querySelector(".btn-read");
  let itemsBlock = document.querySelector(".brands");
  var wrapperHeight = itemsBlock.offsetHeight;
  if (wrapperHeight !== 160) {
    btn.textContent = "Скрыть все";
    showMoreOff();
  }
}

checkHeightForEnabledShow();
