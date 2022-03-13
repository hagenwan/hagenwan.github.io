let isDark = localStorage.getItem('isDark');

const darkToggle = document.getElementById('toggle1');
console.log(darkToggle);

function enableDark() {
    document.documentElement.classList.add('dark');
    localStorage.setItem('isDark', 'yes');
}

function disableDark() {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('isDark', 'no');
}

if (isDark === "yes") {
    enableDark();
    document.getElementById('toggle1').checked = true;
} else {
    disableDark();
    document.getElementById('toggle1').checked = false;
}

darkToggle.addEventListener("change", () =>{
    isDark = localStorage.getItem('isDark');
    if (isDark !== "yes") {
        enableDark();
    } else {
        disableDark();
    }
});