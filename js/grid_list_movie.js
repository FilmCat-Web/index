// script.js
document.addEventListener('DOMContentLoaded', function() {
    const url = 'https://filmcat-app-default-rtdb.firebaseio.com/list_series/.json';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const movieGrid = document.getElementById('movie-grid');
            
            // Recorre los datos y crea los elementos de la cuadrícula
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const movie = data[key];
                    const gridItem = document.createElement('div');
                    gridItem.className = 'grid-item';

                    const img = document.createElement('img');
                    img.src = movie.img_poster;
                    img.alt = movie.title;

                    const title = document.createElement('div');
                    title.className = 'title';
                    title.textContent = movie.title;

                    gridItem.appendChild(img);
                    gridItem.appendChild(title);
                    movieGrid.appendChild(gridItem);
                }
            }
        })
        .catch(error => console.error('Error al obtener los datos:', error));
});
