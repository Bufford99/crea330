function toggleMenu() {

    const x = document.getElementById("topnav");

    (x.className === "bg-overlay") ? x.className += " responsive" : x.className = "bg-overlay";
}