const nomeSite = document.getElementById('nome-site');
nomeSite.addEventListener('click', function() {
    
    if (nomeSite.innerText === 'Histórias de Paz') {
        nomeSite.innerText = 'ODS 16';
    } else {
        nomeSite.innerText = 'Histórias de Paz';
    }

});