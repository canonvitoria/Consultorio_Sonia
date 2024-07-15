function highlightLink(element) {
    var links = document.querySelectorAll('.rodape_link');
    links.forEach(function(link) {
        link.classList.remove('active');
    });

    element.classList.add('active');
}
