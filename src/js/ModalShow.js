function showModal() {
  let btn = document.querySelectorAll(".modalCall_active");
  let modal = document.querySelector(".modal-container");
  let wrapper = document.querySelector(".wrapper");

  btn.forEach((item) => {
    item.addEventListener("click", () => {
      modal.style.right = "0px";
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
      modal.style.right = "-320px";
      wrapper.style.opacity = "100";
    });
  });
}

modalClose();

function autoClose() {
  let wrapper = document.querySelector(".wrapper");
  let modal = document.querySelector(".modal-container");

  wrapper.addEventListener("click", () => {
    modal.style.right = "-320px";
    wrapper.style.opacity = "100";
  });
}

autoClose();
