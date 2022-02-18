class Storage {
    constructor() {}
    static deleteFilmFromStorage(filmTitle) { // delete film from storage
        console.log(filmTitle)
        let films = this.getFilmsFromStorage();
        films.forEach(function(film, index) { // film delete function 
            if (film.title === filmTitle) {
                films.splice(index, 1);
            }
        });
        localStorage.setItem("films", JSON.stringify(films))
    }

    static addfilmStorage(newFilm) { // film added to storage
        let films = this.getFilmsFromStorage();
        films.push(newFilm)
        localStorage.setItem("films", JSON.stringify(films))
    }

    static getFilmsFromStorage() { // get all film to return but if there is no movie then create object
        let films
        if (localStorage.getItem("films") === null) {
            films = [];
        } else {
            films = JSON.parse(localStorage.getItem("films"))
        }
        return films
    }

}