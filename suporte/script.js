document.getElementById("menuButton").addEventListener("click", function() {
    this.classList.toggle("active");
    document.getElementById("menuList").classList.toggle("active");
});

function toggleTheme() {
    document.body.classList.toggle("White-mode");
    document.querySelector(".nav_bar").classList.toggle("White-mode");
    document.getElementById("menuList").classList.toggle("White-mode");
    document.querySelectorAll(".menu_line").forEach(line => line.classList.toggle("White-mode"));
    document.querySelector(".button_change").classList.toggle("White-mode");
    document.querySelectorAll("#menuList li a").forEach(link => link.classList.toggle("White-mode"));
    document.querySelectorAll(".h1_titulo, .nav_body p").forEach(element => {
        element.classList.toggle("White-mode");
    
    });
    document.querySelectorAll(".h1_titulo").classList.toggle("White-mode")
}
        