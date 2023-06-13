export default class FormValidator {
  constructor(config, form) {
    this._inputSelector = config.inputSelector;
    this._errorClassTemplate = config.errorClassTemplate;
    this._activeErrorClass = config.activeErrorClass;
    this._submitButtonSelector = config.submitButtonSelector;
    this._validSubmitButtonClass = config.validSubmitButtonClass;
    this._errorInputClass = config.errorInputClass;
    this._form = form;
    this._submitButton = form.querySelector(this._submitButtonSelector);
    this._inputList = form.querySelectorAll(this._inputSelector);
  }

  _showInputError(errorTextElement, input) {
    input.classList.add(this._errorInputClass);
    errorTextElement.textContent = input.validationMessage;
  }

  _hideInputError(errorTextElement, input) {
    input.classList.remove(this._errorInputClass);
    errorTextElement.textContent = "";
  }

  _enableButton() {
    this._submitButton.classList.remove(this._validSubmitButtonClass);
    this._submitButton.disabled = false;
  }

  _disableButton() {
    this._submitButton.classList.add(this._validSubmitButtonClass);
    this._submitButton.disabled = true;
  }

  _hasInvalidInput() {
    return Array.from(this._inputList).every((input) => input.validity.valid);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._enableButton();
    } else {
      this._disableButton(this._submitButton);
    }
  }

  _checkInputValidity(input) {
    const errorTextElement = this._form.querySelector(
      `${this._errorClassTemplate}${input.name}`
    );

    if (!input.validity.valid) {
      this._showInputError(errorTextElement, input);
    } else {
      this._hideInputError(errorTextElement, input);
    }
  }

  _setEventListener() {
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListener();
  }

  resetErrorForForm() {
    this._inputList.forEach((input) => {
      const errorTextElement = this._form.querySelector(
        `${this._errorClassTemplate}${input.name}`
      );
      if (!input.validity.valid) {
        this._hideInputError(errorTextElement, input);
      }
    });
    this._disableButton();
  }
}
