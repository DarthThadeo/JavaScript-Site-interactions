// JavaScript source code
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}


window.onload = function () {
    var sidenav = document.getElementById("mySidenav");
    var openBtn = document.getElementById("openBtn");
    var closeBtn = document.getElementById("closeBtn");

    openBtn.onclick = openNav;
    closeBtn.onclick = closeNav;

   
    function openNav() {
        sidenav.classList.add("active");
    }

    
    function closeNav() {
        sidenav.classList.remove("active");
    }
}
