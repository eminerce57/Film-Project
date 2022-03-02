class UI {
    constructor() {}

    static AddFilmUI(film) { // film add to html
        let row = document.getElementById("films-table")
        row.innerHTML += `
         <tr>
        <th></th>
        <td><img class="img-thumbnail" src="${film.img}"></td>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td><a target="_blank" href="${film.link}">${film.link}</a></td>
        <td><a rel="noopener noreferrer" href="#" id = "delete-film" class = "btn btn-danger">Remove</a></td>
        </tr> 
    
    `
    }

    static allFilmsToUI() { // film add to html   from storage
        let films = Storage.getFilmsFromStorage()
        let row = document.getElementById("films-table")
        
        films.forEach(function(film) {
            row.innerHTML += `
            <tr>
            <th></th>
            <td><img class="img-thumbnail" src="${film.img}"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a target="_blank" href="${film.link}">${film.link}</a></td>
            <td><a rel="noopener noreferrer" href="#" id = "delete-film" class = "btn btn-danger">Remove</a></td>
            </tr> 
        `
        });
    }

    //deleted film but just ui
    static deleteFilmFromUI(target) {
        target.parentElement.parentElement.remove();
    }


}