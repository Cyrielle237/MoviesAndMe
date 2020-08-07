const API_TOKEN= "44acac2ace3f9d4be32760ab806cb763";

//methode pour rechercher un film 
export function getFilms(text, page){
    const url="https://api.themoviedb.org/3/search/movie?api_key="
                +API_TOKEN+"&langage=fr&query="+text + "&page="+page

    return fetch(url)
        .then((Response)=> Response.json())
        .catch((error)=>console.error(error))
}

export function getImageFromApi(name){
    return 'https://image.tmdb.org/t/p/w300' + name
}