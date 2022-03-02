const Switch = document.getElementById("switch")
const darkBody = document.querySelectorAll(".dark-mode,.form-control")
Switch.addEventListener("change", function(e){

    let theme =e.currentTarget.checked
    darkmode(theme)
} )
darkmode(JSON.parse(localStorage.getItem("dark-theme"))) 
function darkmode(theme) {
localStorage.setItem("dark-theme",theme)


 
    if (theme === true) {
        darkBody.forEach(function(body) {
            console.log(body)
            body.classList.add("dark")
        });
    } else if (theme === false) {
        darkBody.forEach(function(body) {
            body.classList.remove("dark")
        });
    }
    Switch.checked =theme;
}
