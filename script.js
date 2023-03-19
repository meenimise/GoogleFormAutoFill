// Select randomly an option
function selectRandomOption(question) {
const options = question.querySelectorAll('div[role="radio"]');
const randomIndex = Math.floor(Math.random() * options.length);
options[randomIndex].click();
}

// Auto-filling process
setTimeout(() => {
    // Check if the current page is the completion page, then submit a new form
    const aElements = document.querySelectorAll('a');
    aElements.forEach((aElement) => {
        if (aElement.getAttribute('href').includes('viewform?usp=form_confirm')) {
            aElement.click();
        }
    });

    // Get all radio button questions on the page
    const radioQuestions = document.querySelectorAll('div[role="radiogroup"]');
    
    radioQuestions.forEach(question => {
        selectRandomOption(question);
    });

    setTimeout(() => {
        // Move to the next page
        const spanElements = document.querySelectorAll('span');
        spanElements.forEach((spanElement) => {
            if (spanElement.textContent === 'Next') {
                const divElement = spanElement.parentElement;
                divElement.click();
            }
            else if (spanElement.textContent === 'Submit') {
                const divElement = spanElement.parentElement;
                divElement.click();
            }
        });		
    }, 2000);
}, 2000);
