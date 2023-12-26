function toggleDarkMode() {
  var body = document.getElementsByTagName("body")[0];
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

function submitForm() {
    // Récupération des données du formulaire
    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Affichage des données dans la console
    console.log("Nom: " + nom);
    console.log("Email: " + email);
    console.log("Mot de passe: " + password);
}

function resetForm() {
    
    document.getElementById("nom").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}
let passwordInput = document.getElementById('password');
function validatePassword() {
    let passwordError = document.getElementById('mdpError');

    let passwordRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (passwordRegex.test(passwordInput.value) && passwordInput.value.length >= 8) {
        passwordError.textContent = '';
    } else {
        passwordError.textContent = 'le mot de passe dois contenir au moins une majuscule, une minuscule et un caratère spécial, et faire au moins 8 caratères de long.';
    }
}
passwordInput.addEventListener('input', validatePassword);



