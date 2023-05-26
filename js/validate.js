const form = document.querySelector("#contactForm")

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatch = regEx.test(email);
    return patternMatch;
}

function validateForm(event) {
    event.preventDefault();

    const name = document.querySelector("#name");
    const nameError = document.querySelector("#nameError");

    if (name.value.trim().length > 5) {
        nameError.style.display = "none";
    }

    else {
        nameError.style.display = "block";
    }

    const email = document.querySelector("#email");
    const emailError = document.querySelector("#emailError");

    if (validateEmail(email.value) === true) {

        emailError.style.display = "none";
    }

    else {

        emailError.style.display = "block";
    }

    const subject = document.querySelector("#subject");
    const subjectError = document.querySelector("#subjectError");

    if (subject.value.trim().length > 15) {
        subjectError.style.display = "none";
    }

    else {
        subjectError.style.display = "block";
    }

    const message = document.querySelector("#message");
    const messageError = document.querySelector("#messageError");

    if (message.value.trim().length > 25) {
        messageError.style.display = "none";
    }

    else {
        messageError.style.display = "block";
    }
}

form.addEventListener("submit", validateForm);

