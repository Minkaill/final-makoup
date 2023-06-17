function showSidebar() {
  let sidebarBtn = document.querySelector(".sidebar-btn");
  let sidebar = document.querySelector(".sidebar");
  let wrapper = document.querySelector(".wrapper");

  sidebarBtn.addEventListener("click", () => {
    sidebar.style.left = "0";
    wrapper.style.opacity = "20%";
  });
}

showSidebar();

function closeSidebar() {
  let sidebarBtn = document.querySelector(".sidebar-btn_close");
  let sidebar = document.querySelector(".sidebar");
  let wrapper = document.querySelector(".wrapper");

  sidebarBtn.addEventListener("click", () => {
    sidebar.style.left = "-320px";
    wrapper.style.opacity = "100";
  });
}

closeSidebar();

function autoClose() {
  let wrapper = document.querySelector(".wrapper");
  let sidebar = document.querySelector(".sidebar");

  wrapper.addEventListener("click", () => {
    sidebar.style.left = "-320px";
    wrapper.style.opacity = "100";
  });
}

autoClose();

function callClose() {
  let wrapper = document.querySelector(".wrapper");
  let sidebar = document.querySelector(".sidebar");
  let call = document.querySelectorAll(".modalCall_active");

  call.forEach((item) => {
    item.addEventListener("click", () => {
      sidebar.style.left = "-320px";
      wrapper.style.opacity = "100";
    });
  });
}

callClose();
