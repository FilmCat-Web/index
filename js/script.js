// Función para alternar la visibilidad del menú drawer
function toggleDrawer() {
    const drawer = document.getElementById('drawer');
    if (drawer.classList.contains('open')) {
        drawer.classList.remove('open');
    } else {
        drawer.classList.add('open');
    }
}

// Función para redirigir a otras páginas
function navigateTo(url) {
    window.location.href = url;
}
