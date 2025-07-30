const hamBtn = document.querySelector("#hamIcon");
const introHeader = document.querySelector("#introHeader")
const btnSubmit = document.querySelector("#buttonSubmit");
const scorebox = document.querySelector("#scorebox");
const quizBtn = document.querySelector("#quizButton");
const quizArticle = document.querySelector("#quizArticle")


const btn = document.querySelectorAll(".button");
const imageBtn = document.querySelectorAll(".imageButton");
const japanBtn = document.querySelectorAll(".pageHomeBtn");
const japanCultureBtn = document.querySelectorAll(".page1Btn");
const mangaBtn = document.querySelectorAll(".page2Btn");
const animeBtn = document.querySelectorAll(".page3Btn");
const pages = document.querySelectorAll(".page");


const mobileMenu = document.getElementById("mobileMenu");


const menuAudio = new Audio("Audios/menuaudio.mp3");
const hoorayAudio = new Audio("Audios/hoorayaudio.mp3");


hamBtn.addEventListener("click", toggleMenus);

window.onload = toggleMenus;

window.onload = function () {
    toggleMenus(); // Run in once after loading to make sure mobile menu stays hidden upon entering the page
    hideall(); // Hide all pages and then set the "Japan" page as default page
    let thepage = document.querySelector("#page2");
    thepage.style.display = "inline";
}

function toggleMenus() { //open and close menu
    if (mobileMenu.style.display === "none")
        mobileMenu.style.display = "flex";
    else
        mobileMenu.style.display = "none";
}

btn.forEach(button => { // Every Button under the .button class will make a sound
    button.addEventListener('click', buttonSound);
});

imageBtn.forEach(imageButton => { // Every Button under the .button class will make a sound
    imageButton.addEventListener('click', buttonSound);
});

function buttonSound() {
    menuAudio.play();
}


function hideall() { //function to hide all pages
    for (let thepage of pages) {
        thepage.style.display = "none";
        //console.log("Hidden");
    }
}

function switchPage(pg) { // function to switch pages
    hideall(); // hide all other pages first
    let thepage = document.querySelector("#page" + pg); // select page id to show
    switch (pg) {
        case 0:
            introHeader.innerHTML = "<h1>Japan</h1>";
            break;
        case 1:
            introHeader.innerHTML = "<h1>Culture</h1>";
            break;
        case 2:
            introHeader.innerHTML = "<h1>Manga</h1>";
            break;
        case 3:
            introHeader.innerHTML = "<h1>Anime</h1>";
            break;
        case 4:
            introHeader.innerHTML = "<h1>Quiz<h1>";
            break;

    }
    thepage.style.display = "inline";
    document.body.scrollTop = 0; // For Safari's Users
    document.documentElement.scrollTop = 0; // For other browsers' Users
}

// The Buttons below are for changing pages
japanBtn.forEach(japanButton => {
    japanButton.addEventListener('click', function () {
        switchPage(0);
    });
});
japanCultureBtn.forEach(japanCultureButton => {
    japanCultureButton.addEventListener('click', function () {
        switchPage(1);
    });
});
mangaBtn.forEach(mangaButton => {
    mangaButton.addEventListener('click', function () {
        switchPage(2);
    });
});
animeBtn.forEach(animeButton => {
    animeButton.addEventListener('click', function () {
        switchPage(3);
    });
});
quizBtn.addEventListener('click', function () {
    switchPage(4);
});
///////////////////////////////////////////////////////


btnSubmit.addEventListener("click", CheckAns);

function CheckAns() {
    let q1, q2, q3, q4, score = 0;

    q1 = document.querySelector("input[name='q1']").value; // read q1's checked box

    const q2CheckBoxes = document.querySelectorAll("input[name='q2']:checked"); // read q2's checked boxes
    q2 = [];
    for (let checkbox of q2CheckBoxes) {
        q2.push(checkbox.value); // put the value into the selectedQ2's array
    }
    const correctQ2 = ["tatamiMats", "slidingDoors"]; // the correct answers

    const q3Selected = document.querySelector("input[name='q3']:checked"); // read q3's checked box

    const q4Selected = document.querySelector("input[name='q4']:checked"); // read q4's checked box


    if (q3Selected != null) {
        q3 = q3Selected.value;
    }
    if (q4Selected != null) {
        q4 = q4Selected.value;
    }
    ///////////////  Checking if answers are right  /////////////////////
    if (q1 == 22) {
        score++;
    }

    let isCorrect = true;

    if (q2.length === correctQ2.length) { // check if the objects in the q2 array is the same as the objects in the correctQ2 array
        for (let correctAnswer of correctQ2) {
            if (!q2.includes(correctAnswer)) { // check if q2's array contains objects in correctAnswer's array
                isCorrect = false;
                break;
            }
        }
    }
    else { // if its not the same length, reject the ans
        isCorrect = false;
    }
    if (isCorrect) { // else ans is correct
        score++;
    }

    if (q3 == "feb23") {
        score++;
    }
    if (q4 == "katsu") {
        score++;
    }
    ////////////////////////////////////////////////////////////////////////////////
    // show score
    scorebox.innerHTML = "Score: " + score + " / 4" + "<br>You did it!";
    if (score == 4) {
        hoorayAudio.play();
        quizArticle.classList.add("barrelRoll");
        setTimeout(function () {
            quizArticle.classList.remove("barrelRoll");
        }
            , 1000);
    }

}