// GLOBAL ROOT
const FilmName = document.getElementById("film-name");
const FilmDirector = document.getElementById("film-director");
const FilmLink = document.getElementById("film-link");
const FilmPoster = document.getElementById("film-poster");
const cardbody = document.querySelectorAll(".card-body")[0];


eventListener()

function eventListener() {
    cardbody.addEventListener("click", deleteFilm);
}

function addFilms() {
    const title = FilmName.value
    const director = FilmDirector.value
    const link = FilmLink.value
    const img = FilmPoster.value


    if (!title || !director || !link || !img) {
        info("fill in all fields", "danger")

    } else {

        const newFilm = new Film(title, director, link, img)
        UI.AddFilmUI(newFilm)
        Storage.addfilmStorage(newFilm)
        info("add movie successful", "success")
    }


    FilmName.value = ""
    FilmDirector.value = ""
    FilmLink.value = ""
    FilmPoster.value = ""
}

function ClearAllFilms() {

    localStorage.removeItem("films")
    let row = document.getElementById("films-table")
    row.innerHTML = ""
    info("ALL movies cleared", "success")
}

function clearInputs() {
    FilmName.value = ""
    FilmDirector.value = ""
    FilmLink.value = ""
    FilmPoster.value = ""
    info("all inputs cleared", "success")

    Storage.allFilmsToUI()


}


function info(massage, type) {
    let infoDiv = document.getElementById("info")

    infoDiv.innerHTML = `
    <div class="alert alert-${type}">${massage}</div>
    
    `
    setTimeout(function() {
        infoDiv.innerHTML = ""
    }, 2000)
}




function deleteFilm(e) {

    if (e.target.id === "delete-film") {
        UI.deleteFilmFromUI(e.target)
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent)
        info("deletion successful", "primary")
    }
}



UI.allFilmsToUI()