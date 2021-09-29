const contactForm = document.querySelector("#theform");

const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#nameerror");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailerror");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjecterror");

const text = document.querySelector("#text");
const textError = document.querySelector("#texterror");


let isFormValid = false;


function validateForm() {
    event.preventDefault();


    if (checkLength(fullName.value, 5) === true) {
        fullNameError.style.display = "none";
        isFormValid = true;
    } else {
        fullNameError.style.display = "block";
        isFormValid = false;
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
        isFormValid = true;
    } else {
        emailError.style.display = "block";
        isFormValid = false;
    }

    if (checkLength(subject.value, 16) === true) {
        subjectError.style.display = "none";
        isFormValid = true;
    } else {
        subjectError.style.display = "block";
        isFormValid = false;
    }

    if (checkLength(text.value, 25) === true) {
        textError.style.display = "none";
        isFormValid = true;
    } else {
        textError.style.display = "block";
        isFormValid = false;
    }
    
    const fullNamee = document.querySelector("#name");
    console.log(fullNamee.value)

    const emaill = document.querySelector("#email");
    console.log(emaill.value)

    const subjectt = document.querySelector("#subject");
    console.log(subjectt.value)

    const textt = document.querySelector("#text");
    console.log(textt.value)

}


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


const createMessage = document.querySelector("#message");

function submitForm() {
    createMessage.innerHTML = `<div class="submitted"> Your message has been sent successfully!</div>`;
}


contactForm.addEventListener("submit", (e) => {
    event.preventDefault();
    validateForm();
    if (isFormValid){
        contactForm.reset();
        submitForm();
    
    }
});

