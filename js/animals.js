// Funkce pro nacteni a vlozeni obsahu
function includeHTML(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;

            // Po nacteni obsahu zkontrolujeme aktivni odkaz
            highlightActiveLink();
        })
        .catch(error => console.error('Chyba pri nacitani souboru:', error));
}

// Funkce pro zvyrazneni aktivniho odkazu
function highlightActiveLink() {
    // Ziskani aktualni URL stranky
    const currentURL = window.location.pathname.split('/').pop();
    
    // Vyhledani vsech odkazu v navigaci
    const links = document.querySelectorAll('nav a');
    
    // Porovnani URL a pridani tridy 'active' k odpovidajicimu odkazu
    links.forEach(link => {
        if (link.getAttribute('href') === currentURL) {
            link.classList.add('active');
        }
    });
}


// Nacteni hlavicky menu a zapati
includeHTML('hlava', 'inc/hlava.html');
includeHTML('menu', 'inc/menu.html');
includeHTML('zapati', 'inc/zapati.html');
