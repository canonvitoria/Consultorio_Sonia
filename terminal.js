function highlightLink(element) {
    var links = document.querySelectorAll('.rodape_link');
    links.forEach(function(link) {
        link.classList.remove('active');
    });

    element.classList.add('active');
}

document.getElementById('mainButton').addEventListener('click', function() {
    const menu = document.getElementById('floatingMenu');
    const overlay = document.getElementById('overlay');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex';
        overlay.style.display = 'block';
    } else {
        menu.style.display = 'none';
        overlay.style.display = 'none';
    }
});

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('floatingMenu').style.display = 'none';
    this.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function() {
    const toggleMenu = document.getElementById('toggleMenu');
    const menuLateral = document.getElementById('menuLateral');

    toggleMenu.addEventListener('click', function() {
        menuLateral.classList.toggle('fechado');
    });
});


