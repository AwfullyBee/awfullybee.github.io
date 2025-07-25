const hamBtn = document.querySelector("#hamIcon");
const mobileMenu = document.getElementById("mobileMenu");
const menuAudio = new Audio("Audios/menuaudio.mp3");


hamBtn.addEventListener("click", toggleMenus);

window.onload = toggleMenus;

function toggleMenus() { //open and close menu
    menuAudio.play();
    if (mobileMenu.style.display === "none")
        mobileMenu.style.display = "flex";
    else
        mobileMenu.style.display = "none";
}