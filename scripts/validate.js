const showInputError = (errorTextElement, validationMessage, activeErrorClass, input, errorInputClass) => {
    errorTextElement.textContent = validationMessage;
    errorTextElement.classList.add(activeErrorClass);
    input.classList.add(errorInputClass);
    console.log(input);
}

const hideInputError = (errorTextElement, activeErrorClass, input, errorInputClass) => {
    errorTextElement.classList.remove(activeErrorClass);
    errorTextElement.textContent = "";
    input.classList.remove(errorInputClass);
    console.log(input);
}

const disableButton = (submitButton, validSubmitButtonClass) => {
    submitButton.classList.add(validSubmitButtonClass);
    submitButton.disabled = true;
} 

const enableButton = (submitButton, validSubmitButtonClass) => {
    submitButton.classList.remove(validSubmitButtonClass);
    submitButton.disabled = false;
} 
 
const checkInputValidity = (input, errorClassTemplate, activeErrorClass, errorInputClass) => {
    const errorTextElement = document.querySelector(`${errorClassTemplate}${input.name}`);

    if(!input.validity.valid) {
        showInputError(errorTextElement, input.validationMessage, activeErrorClass, input, errorInputClass);
    } else {
        hideInputError(errorTextElement, activeErrorClass, input, errorInputClass); 
    }
}

const hasInvalidInput = (inputList) => {
    return Array.from(inputList).some((input) => !input.validity.valid);
}

const toggleButtonState = (submitButton, validSubmitButtonClass, inputList) => {
    if (!hasInvalidInput(inputList)) {
        enableButton(submitButton, validSubmitButtonClass);
    } else {
        disableButton(submitButton, validSubmitButtonClass);
    }
}

const setEventListeners = (formElement, inputList, { errorClassTemplate, activeErrorClass, validSubmitButtonClass, errorInputClass }, submitButton) => {
    formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
    });

    inputList.forEach((input) => {
        input.addEventListener("input", (evt) => {
            checkInputValidity(input, errorClassTemplate, activeErrorClass, errorInputClass);
            toggleButtonState(submitButton, validSubmitButtonClass, inputList);
        });
    });
}

const enableValidation = ({formSelector, inputSelector, submitButtonSelector,  ...config}) => {

    const formList = document.querySelectorAll(formSelector);
    formList.forEach(formElement => {
        const inputList = formElement.querySelectorAll(inputSelector);
        const submitButton = formElement.querySelector(submitButtonSelector); 

    setEventListeners(formElement, inputList, config, submitButton);
})
}

enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    errorClassTemplate: ".popup__input-error_type_",
    activeErrorClass: "popup__input-error",
    submitButtonSelector: ".popup__save-button",
    validSubmitButtonClass: "popup__save-button_valid",
    errorInputClass: "popup__input_error",
});