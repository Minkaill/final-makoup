function readMore() {
  let block = document.querySelector(".content__info-text");
  let btn = document.querySelector(".btn-readmore");

  btn.addEventListener("click", () => {
    block.style.height = "auto";
    btn.textContent = "Скрыть";
    disableMore();
  });
}

readMore();

function disableMore() {
  let block = document.querySelector(".content__info-text");
  let btn = document.querySelector(".btn-readmore");

  btn.addEventListener("click", () => {
    block.style.height = "90px";
    btn.textContent = "Читать далее";
    readMore();
  });
}

