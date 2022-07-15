let lis = document.querySelectorAll(".collapse .navbar-nav .nav-item a")

lis.forEach((li) => {
  li.addEventListener("click", removeActive);
})

function removeActive() {
  lis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  })
}