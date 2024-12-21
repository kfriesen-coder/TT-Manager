<!--Sidebar-Menu dynamisch laden-->
    fetch('sidebarMenu.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('sidebarMenu').innerHTML = data;
        let element = document.getElementById(PageName);
        element.classList.add('active');
        console.log(element);
})
    .catch(error => console.error('Fehler beim Laden der Navbar:', error));

<!--Header dynamisch laden-->
    fetch('header.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('header').innerHTML = data;
})
    .catch(error => console.error('Fehler beim Laden der Navbar:', error));
