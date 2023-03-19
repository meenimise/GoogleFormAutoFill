// Check final page to reload the form
function reloadForm() {
    let isSubmissionPage = false;
    const buttonElements = document.querySelectorAll('div');
    buttonElements.forEach((buttonElement) => {
        if (buttonElement.getAttribute('jsname') === "M2UYVd") {
            isSubmissionPage = true;
        }
    });
    if (window.location.href.indexOf("formResponse") > -1 && isSubmissionPage === false) {
        window.location.reload();
    }  
}

// Fill all email and text fields
function fillTextFields() {
    email = 'anemail@is.here';
    text = 'A text is here';
    const event = new Event('input', { bubbles: true });
    const textElements = document.querySelectorAll('input');
    textElements.forEach((textElement) => {
        if (textElement.getAttribute('type') === "email") {
            textElement.value = email;
            textElement.dispatchEvent(event);
        }
        else if (textElement.getAttribute('type') === "text") {
            textElement.value = text;
            textElement.dispatchEvent(event);
        }
    });
}

// Select randomly an option
function selectRandomOption(question) {
    const options = question.querySelectorAll('div[role="radio"]');
    const randomIndex = Math.floor(Math.random() * options.length);
    options[randomIndex].click();
}

// Fill all multiple choice questions
function fillRadioButtonFields() {
    const radioQuestions = document.querySelectorAll('div[role="radiogroup"]');
    
    radioQuestions.forEach(question => {
        selectRandomOption(question);
    });    
}

// Navigate to the next page or submit the form
function navigateOrSubmit() {
    const buttonElements = document.querySelectorAll('div');
    buttonElements.forEach((buttonElement) => {
        if (buttonElement.getAttribute('jsname') === "OCpkoe" || buttonElement.getAttribute('jsname') === "M2UYVd") {
            buttonElement.click();
        }
    });  
}

// Auto-filling process
setTimeout(() => {
    reloadForm();

    fillTextFields();

    fillRadioButtonFields();

    setTimeout(() => {
        navigateOrSubmit();    
    }, 2000);
}, 2000);
