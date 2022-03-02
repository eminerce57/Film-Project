const Switch = document.getElementById("switch")
const darkBody = document.querySelectorAll(".dark-mode,.form-control")
Switch.addEventListener("change", darkmode )
darkmode
function darkmode(e) {
  let dark =e.currentTarget.checked
  darkStorage(dark)
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
}
function darkStorage(dark){
    let theme;
    localStorage.setItem("dark-theme",dark)
    theme = JSON.parse(localStorage.getItem("dark-theme"))
    return !theme
}