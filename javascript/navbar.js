let i = 0;
function display_menu() {
    if (i % 2 == 0) {
        let menu_details = document.querySelector("#controls-details");
        let menu_icons = document.querySelector("#controls-icons");
        menu_icons.style.display = "none"
        menu_details.style.display = "block"
        document.querySelector("#main-content").style.width = "85%"
    } else {
        let menu_details = document.querySelector("#controls-details");
        let menu_icons = document.querySelector("#controls-icons");
        menu_icons.style.display = "block"
        menu_details.style.display = "none"
        document.querySelector("#main-content").style.width = "95%"
    }
    ++i;
}

function home_page() {
    window.location.href = "index.html"
}
