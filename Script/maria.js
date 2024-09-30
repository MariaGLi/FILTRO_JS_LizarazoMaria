const search = document.getElementById('search');
const results = document.getElementById('results');


search.addEventListener('input', function() {
    const query = search.value;

    fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${query}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        
        let caja = document.querySelector(".info-data")

        data.description.forEach(pelis => {
            caja.innerHTML+=`
            <div class="card">
                <div class="head">
                    <div id="cajaPelicula">
                        <h2 id="titlePelicula">${pelis["#TITLE"]}</h2>
                        <p>${pelis["#YEAR"]}</p>
                        <p>${pelis["#IMDB_ID"]}</p>
                        <img src="${pelis["#IMG_POSTER"]}" alt="Paila, no hay póster.">
                    </div>
                    <i class='bx bx-trending-up icon' ></i>
                </div>
            </div>
            `
        });
    })
})