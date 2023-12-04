let lastName = document.querySelector("#lastName");
let gender = document.querySelector("#gender");
let civil = document.querySelector("#civil");
let time = document.querySelector("#time");

let surnameChecker = document.querySelector("#surnameChecker");
let genderChecker = document.querySelector("#genderChecker");
let statusChecker = document.querySelector("#statusChecker");
let timeChecker = document.querySelector("#timeChecker");

lastName.addEventListener('input', () => {
    if (lastName.value !== "") {
        surnameChecker.innerHTML = "Surname : ✔️";
    } else {
        surnameChecker.innerHTML = "Surname : ❌";
    }
});

gender.addEventListener('input', () => {
    if (gender.value.toUpperCase() === "M" || gender.value.toUpperCase() === "F") {
        genderChecker.innerHTML = "Gender : ✔️";
    } else {
        genderChecker.innerHTML = "Gender : ❌";
    }
});

civil.addEventListener('input', () => {
    if (civil.value.toUpperCase() === "S" || civil.value.toUpperCase() === "M") {
        statusChecker.innerHTML = "Civil Status : ✔️";
    } else {
        statusChecker.innerHTML = "Civil Status : ❌";
    }
});

time.addEventListener('input', () => {
    let inputValue = parseInt(time.value);

    if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 23) {
        timeChecker.innerHTML = "Military Time : ✔️";
    } else {
        timeChecker.innerHTML = "Military Time : ❌";
    }
});

let btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
    
    let surname = document.querySelector("#lastName").value;
    let civilStatus = civil.value.toUpperCase();
    let militaryTime = parseInt(document.querySelector("#time").value);

    if (
        surnameChecker.innerHTML === "Surname : ✔️" &&
        genderChecker.innerHTML === "Gender : ✔️" &&
        statusChecker.innerHTML === "Civil Status : ✔️" &&
        timeChecker.innerHTML === "Military Time : ✔️"
    ) {

    
        let greet = document.querySelector(".greeting");
        greet.style.display = 'flex';
        greet.style.zIndex = '4';

        let title = '';
        if (gender.value.toUpperCase() === 'M') {
            title = "Mr.";
        } else if (gender.value.toUpperCase() === 'F') {
            if (civilStatus === 'S') {
                title = "Ms.";
            } else if (civilStatus === 'M') {
                title = "Mrs.";
            }
        }

        let greetingMessage = '';
        if (!isNaN(militaryTime) && militaryTime >= 0 && militaryTime <= 23) {
            if (militaryTime >= 0 && militaryTime < 12) {
                greetingMessage = "Good morning!";
            } else if (militaryTime >= 12 && militaryTime < 18) {
                greetingMessage = "Good afternoon!";
            } else {
                greetingMessage = "Good evening!";
            }

            greetingMessage = `Hello ${title} ${surname}! ${greetingMessage}`;
            greet.textContent = greetingMessage;
        } else {
            alert("Please fill in all fields correctly.");
        }
    } else {
        alert("Please fill in all fields correctly.");
    }
});


