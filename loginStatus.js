document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
});

function storeCurrentUrl() {
    const currentUrl = window.location.href;
    localStorage.setItem('redirectAfterLogin', currentUrl);
}

function redirectToLogin() {
    storeCurrentUrl(); // Armazena a URL atual antes de redirecionar
    window.location.href = 'index.html';
}

function loginUser(username) {
    var userData = { username: username };
    localStorage.setItem('loggedInUser', JSON.stringify(userData));
    
    var redirectUrl = localStorage.getItem('redirectAfterLogin') || 'Agenda.html'; // Usa a URL armazenada ou redireciona para index.php
    localStorage.removeItem('redirectAfterLogin'); // Limpa a URL após o redirecionamento
    window.location.href = redirectUrl;
}

function checkLoginStatus() {
    var loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        var userData = JSON.parse(loggedInUser);
        document.getElementById('profileIcon').innerHTML = 'Perfil de ' + userData.username;
        document.getElementById('logoutButton').style.display = 'inline-block';
    }
}

function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
}