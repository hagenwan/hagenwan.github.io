let isDark = true;

function lightMode() {
    isDark = false;
    document.getElementById('toggleBtn').className = "toggle-btn toggle-btn-light";
    document.getElementById('body').className = "bodyLight";
    document.getElementById('toggleCircle').className = "toggle-circle toggle-circle-light";
    document.getElementById('card').className = "card card-light";
    console.log("now in light mode");
}
function darkMode() {
    isDark = true;
    document.getElementById('toggleBtn').className = "toggle-btn toggle-btn-dark";
    document.getElementById('body').className = "bodyDark";
    document.getElementById('toggleCircle').className = "toggle-circle toggle-circle-dark";
    document.getElementById('card').className = "card card-dark";
    console.log("now in dark mode");
}

function toggleMode() {
    if (isDark==true) {
        lightMode();
        console.log(isDark);
    }
    else {
        darkMode();
        console.log(isDark);
    }
}


