// script.js
document.addEventListener('DOMContentLoaded', function() {
    const url = 'https://filmcat-app-default-rtdb.firebaseio.com/list_series/.json';

    axios.get(url)
        .then(response => {
            const data = response.data;
            const movieGrid = document.getElementById('movie-grid');
            
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const movie = data[key];
                    const flexItem = document.createElement('div');
                    flexItem.className = 'flex-item';

                    const img = document.createElement('img');
                    img.src = movie.img_poster;
                    img.alt = movie.title;

                    const title = document.createElement('div');
                    title.className = 'title';
                    title.textContent = movie.title;

                    flexItem.appendChild(img);
                    flexItem.appendChild(title);
                    movieGrid.appendChild(flexItem);
                }
            }
        })
        .catch(error => console.error('Error al obtener los datos:', error));
});
