import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const editProfileButton = document.querySelector(".profile__edit"); // кнопка открытия №1
const addPlaceButton = document.querySelector(".profile__add"); // кнопка открытия №2
const editPopup = document.querySelector(".popup_type_edit"); // переменная попапа №1
const addPopup = document.querySelector(".popup_type_add"); // переменная попапа №2
const imagePopup = document.querySelector(".popup_type_image"); // переменная попапа №3
const closeEditPopupButton = editPopup.querySelector(".popup__close-button"); // кнопка закрытия #1
const closeAddPopupButton = addPopup.querySelector(".popup__close-button"); // кнопка закрытия #2
const closePopupImageButton = imagePopup.querySelector(".popup__close-button"); // кнопка закрытия #3
const formElementEdit = editPopup.querySelector(".popup__form"); // переменная формы #1
const formElementAdd = addPopup.querySelector(".popup__form"); // переменная формы #2
const nameInput = document.querySelector(".popup__input_text_name"); // переменная инпута имени профиля
const jobInput = document.querySelector(".popup__input_text_occupation"); // переменная инпута должности профиля
const profileName = document.querySelector(".profile__name"); // переменная имени профиля
const profileOccupation = document.querySelector(".profile__occupation"); // переменная должности профиля
const popupImageCaption = document.querySelector(".popup__caption"); // переменная описания картинки в попапе
const popupImagePicture = document.querySelector(".popup__image"); // переменная картинки в попапе
const list = document.querySelector(".places__items"); // переменная списка
const selectorTemplate = "#cardTemplate";

const validationConfig = {
  inputSelector: ".popup__input",
  errorClassTemplate: ".popup__input-error_type_",
  activeErrorClass: "popup__input-error",
  submitButtonSelector: ".popup__save-button",
  validSubmitButtonClass: "popup__save-button_valid",
  errorInputClass: "popup__input_error",
};
const formEditValidator = new FormValidator(validationConfig, formElementEdit);
formEditValidator.enableValidation();
const formAddValidator = new FormValidator(validationConfig, formElementAdd);
formAddValidator.enableValidation();

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
]; // переменная массива

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupByEsc);
  popup.addEventListener("click", closePopupByOverlay);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupByEsc);
  popup.removeEventListener("click", closePopupByOverlay);
}

function handleFormSubmitEdit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
  closePopup(editPopup);
}

function closePopupByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

function closePopupByOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

function openImagePopup(card) {
  popupImagePicture.src = card.link;
  popupImagePicture.alt = card.name;
  popupImageCaption.textContent = card.name;
  openPopup(imagePopup);
}

function createNewCard(element) {
  const anotherCard = new Card(element, selectorTemplate, openImagePopup);
  const cardElement = anotherCard.createCard();
  return cardElement;
}

function addCard(list, anotherCard) {
  list.prepend(anotherCard);
}

initialCards.forEach((element) => {
  addCard(list, createNewCard(element));
});

function handleFormSubmitAdd(evt) {
  evt.preventDefault();
  const formElement = evt.target;
  const name = formElement.querySelector(".popup__input_text_title").value;
  const link = formElement.querySelector(".popup__input_text_link").value;
  const card = { name, link };
  addCard(list, createNewCard(card));
  closePopup(addPopup);
  formElement.reset();
  disableSubmitButton(addPopup);
}

function disableSubmitButton(addPopup) {
  const submitButton = addPopup.querySelector(".popup__save-button");
  submitButton.classList.add("popup__save-button_valid");
  submitButton.disabled = true;
}

editProfileButton.addEventListener("click", function () {
  formElementEdit.reset();
  formEditValidator.resetErrorForForm();
  nameInput.value = profileName.textContent;
  jobInput.value = profileOccupation.textContent;
  openPopup(editPopup);
});
addPlaceButton.addEventListener("click", function () {
  formElementAdd.reset();
  formAddValidator.resetErrorForForm();
  openPopup(addPopup);
});
closeEditPopupButton.addEventListener("click", function () {
  closePopup(editPopup);
});
closeAddPopupButton.addEventListener("click", function () {
  closePopup(addPopup);
});
formElementEdit.addEventListener("submit", handleFormSubmitEdit);
formElementAdd.addEventListener("submit", handleFormSubmitAdd);
closePopupImageButton.addEventListener("click", function () {
  closePopup(imagePopup);
});
