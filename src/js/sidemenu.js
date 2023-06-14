function showSidebar() {
  let sidebarBtn = document.querySelector(".sidebar-btn");
  let sidebar = document.querySelector(".sidebar");
  sidebarBtn.addEventListener("click", () => {
    sidebar.style.left = "0";
  });
}

showSidebar();

function closeSidebar() {
  let sidebarBtn = document.querySelector(".sidebar-btn_close");
  let sidebar = document.querySelector(".sidebar");

  sidebarBtn.addEventListener("click", () => {
    sidebar.style.left = "-320px";
  });
}

closeSidebar();
