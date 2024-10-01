const search = document.getElementById('search');
let caja = document.querySelector(".info-data")
let searchActor = document.getElementById('search-actor')
let searchYear = document.getElementById('search-año')
let searchRank = document.getElementById('search-rank')


search.addEventListener('input', function() {
    const query = search.value;
    caja.innerHTML=""

    fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${query}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        
        data.description.forEach(pelis => {
            caja.innerHTML+=`
            <div class="card" actor-id="${pelis["#ACTORS"]}" año-id="${pelis["#YEAR"]}" rank-id="${pelis["#RANK"]}">
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
        
        searchActor.addEventListener('input', function(){
            document.querySelectorAll('.card').forEach(filtro=>{
                filtro.getAttribute('actor-id').includes(searchActor.value)
                ?filtro.classList.remove('actor')
                :filtro.classList.add('actor')
            });
        });

        searchYear.addEventListener('input', function(){
            document.querySelectorAll('.card').forEach(filter=>{
                filter.getAttribute('año-id').includes(searchYear.value)
                ?filter.classList.remove('año')
                :filter.classList.add('año')
            });
        });

        searchRank.addEventListener('input', function(){
            document.querySelectorAll('.card').forEach(filtercito=>{
                filtercito.getAttribute('rank-id').includes(searchRank.value)
                ?filtercito.classList.remove('rango')
                :filtercito.classList.add('rango')
            });
        });
    });
})