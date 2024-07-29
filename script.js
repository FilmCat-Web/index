const jsonUrl = 'https://filmcat-app-default-rtdb.firebaseio.com/list_series/.json';

fetch(jsonUrl)
    .then(response => response.json())
    .then(data => {
        const moviesContainer = document.getElementById('movies');
        if (moviesContainer) {  // Asegurarse de que el contenedor exista
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const movie = data[key];
                    const movieElement = document.createElement('div');
                    movieElement.className = 'movie';
                    movieElement.innerHTML = `
                        <img src="${movie.img_poster || 'default-image.jpg'}" alt="${movie.title || 'Título desconocido'}">
                        <div class="movie-title"><span>${movie.title || 'Título desconocido'}</span></div>
                    `;
                    moviesContainer.appendChild(movieElement);
                }
            }
        } else {
            console.error('El contenedor con id "movies" no existe.');
        }
    })
    .catch(error => console.error('Error al cargar los datos:', error));
