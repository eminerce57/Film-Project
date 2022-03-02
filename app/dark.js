const Switch = document.getElementById("switch")
const darkBody = document.querySelectorAll(".dark-mode,.form-control")
Switch.addEventListener("change", darkmode)

function darkmode(e) {
    let dark = e.currentTarget.checked
    if (dark === true) {
        darkBody.forEach(function(body) {
            console.log(body)
            body.classList.add("dark")
        });
    } else if (dark === false) {
        darkBody.forEach(function(body) {
            body.classList.remove("dark")
        });
    }
}