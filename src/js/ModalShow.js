function showModal() {
  let btn = document.querySelectorAll(".modalCall_active");
  let modal = document.querySelector(".modal-container");
  let wrapper = document.querySelector(".wrapper");

  btn.forEach((item) => {
    item.addEventListener("click", () => {
      modal.style.display = "block";
      wrapper.style.opacity = "20%";
    });
  });
}

showModal();

function modalClose() {
  let modal = document.querySelector(".modal-container");
  let btn = document.querySelectorAll(".modal_close");
  let wrapper = document.querySelector(".wrapper");

  btn.forEach((item) => {
    item.addEventListener("click", () => {
      modal.style.display = "none";
      wrapper.style.opacity = "100";
    });
  });
}

modalClose();

function autoClose() {
  let wrapper = document.querySelector(".wrapper");
  let modal = document.querySelector(".modal-container");

  wrapper.addEventListener("click", () => {
    modal.style.display = "none";
    modal.style.opacity = "0";
    wrapper.style.opacity = "100";
  });
}

autoClose();
