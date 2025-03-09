const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toogle = body.querySelector(".toogle"),
  navHeader = body.querySelector(".nav-header");

  toogle.addEventListener("click", () => {
    navHeader.classList.toggle("hide");
});

toogle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  });