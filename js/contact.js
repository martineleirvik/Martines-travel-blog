const form = document.querySelector("#theform");

const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#nameerror");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailerror");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjecterror");

const text = document.querySelector("#text");
const textError = document.querySelector("#texterror");


function validateForm() {
    event.preventDefault();


    if (checkLength(fullName.value, 5) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(subject.value, 16) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (checkLength(text.value, 25) === true) {
        textError.style.display = "none";
    } else {
        textError.style.display = "block";
    }

}

form.addEventListener("submit", validateForm);



function checkLength(value, len) {
    if (value.trim().length > len){
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}


form.onsubmit = function (event) {
    event.preventDefault();

    const fullName = document.querySelector("#name");
    console.log(fullName.value)

    const email = document.querySelector("#email");
    console.log(email.value)

    const subject = document.querySelector("#subject");
    console.log(subject.value)

    const text = document.querySelector("#text");
    console.log(text.value)

    form.reset();
};


const message = document.querySelector("#submitted-message");