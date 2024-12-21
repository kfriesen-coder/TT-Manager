function logout() {
    // Remove login status and redirect to login page
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
}


// ToDo: Login und Userhandling Muss unbedingt von einem Framework übernommen werden!
// Check if the user is logged in using localStorage
const isLoggedIn = localStorage.getItem('isLoggedIn');

if (!isLoggedIn) {
    // Redirect to login page if not logged in
    //window.location.href = 'login.html';
}
