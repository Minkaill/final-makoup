function showMoreOff() {
  let btn = document.querySelector(".btn-read");
  let itemsBlock = document.querySelector(".brands");
  let btnIcon = document.querySelectorAll(".btn-block__icon");
  btn.addEventListener("click", () => {
    itemsBlock.style.height = "160px";
    btnIcon.forEach((item) => {
      item.style.transform = "rotate(0deg)";
    });
    checkHeightForDisabledShow();
  });
}

function showMoreOn() {
  let btn = document.querySelector(".btn-read");
  let itemsBlock = document.querySelector(".brands");
  let btnIcon = document.querySelector(".btn-block__icon");
  btn.addEventListener("click", () => {
    itemsBlock.style.height = "auto";
    btnIcon.style.transform = "rotate(180deg)";
    checkHeightForEnabledShow();
  });
}
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
