const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
const themeBtn = document.getElementById("theme-toggle");
const body = document.body;

window.addEventListener("scroll", function()
{
    if(window.scrollY > 80)
    {
        navbar.classList.add("navbar-fixed");
    }
    else
    {
        navbar.classList.remove("navbar-fixed");
    }
});

// load stored theme
if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    themeBtn.innerHTML = '<i class="bi bi-sun"></i>';
  }
  
  themeBtn.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
  
    if (body.classList.contains("dark-mode")) {
      themeBtn.innerHTML = '<i class="bi bi-sun"></i>';
      localStorage.setItem("dark-mode", "enabled");
    } else {
      themeBtn.innerHTML = '<i class="bi bi-moon"></i>';
      localStorage.setItem("dark-mode", "disabled");
    }
});  

navBtn.addEventListener('click', function()
{
    sidebar.classList.add("show-sidebar");
})

closeBtn.addEventListener('click', function()
{
    sidebar.classList.remove("show-sidebar");
})

date.innerHTML = new Date().getFullYear();

// ********** nav toggle ************
// select button and links
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => 
{
    links.classList.toggle("show-links");
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => 
{
    link.addEventListener("click", e => 
    {
        // prevent default
        e.preventDefault();
        links.classList.remove("show-links");

        const id = e.target.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        let position = element.offsetTop - 62;

        window.scrollTo(
        {
            left: 0,
            top: position,
            behavior: "smooth"
        });
    });
});