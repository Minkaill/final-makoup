function showModal() {
  let btn = document.querySelectorAll(".modalCall_active");
  let modal = document.querySelector(".modal-container_call");
  let wrapper = document.querySelector(".wrapper");
  let header = document.querySelector(".header");
  let sidebar = document.querySelector(".sidebar");

  btn.forEach((item) => {
    item.addEventListener("click", () => {
      modal.style.display = "block";
      wrapper.style.opacity = "20%";
      header.style.opacity = "20%";
      sidebar.style.opacity = "20%";
    });
  });
}

showModal();

function modalClose() {
  let modal = document.querySelector(".modal-container_call");
  let btn = document.querySelectorAll(".modal_close_call");
  let wrapper = document.querySelector(".wrapper");
  let header = document.querySelector(".header");
  let sidebar = document.querySelector(".sidebar");

  btn.forEach((item) => {
    item.addEventListener("click", () => {
      modal.style.display = "none";
      wrapper.style.opacity = "100";
      header.style.opacity = "100";
      sidebar.style.opacity = "100";
    });
  });
}

modalClose();

function autoClose() {
  let wrapper = document.querySelector(".wrapper");
  let modal = document.querySelector(".modal-container_call");
  let header = document.querySelector(".header");
  let sidebar = document.querySelector(".sidebar");

  wrapper.addEventListener("click", () => {
    modal.style.display = "none";
    wrapper.style.opacity = "100";
    sidebar.style.opacity = "100";
    header.style.opacity = "100";
  });
}

autoClose();
