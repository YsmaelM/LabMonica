
var listener = document.body.addEventListener("click", navout)
var hamburgerIcon = document.getElementById("checkbox-nav");

function navout(e){
    console.log(e.target)
    if (e.target.className == "checkbox-nav" || e.target.className == "checkbox-nav active" ) {
        document.getElementById("nav").classList.toggle("active");
        document.getElementById("shadow-nav").classList.toggle("active")
        hamburgerIcon.classList.toggle("active")

    }
    if (e.target.className == "shadow-nav active" ) {
        document.getElementById("shadow-nav").classList.toggle("active")
        document.getElementById("nav").classList.toggle("active");
        hamburgerIcon.classList.toggle("active")
        

    }
}