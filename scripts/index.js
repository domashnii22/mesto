import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {initialCards} from "./cards.js";

const buttonOpenPopupProfile = document.querySelector(".profile__edit"); // кнопка открытия №1
const buttonOpenPopupPlace = document.querySelector(".profile__add"); // кнопка открытия №2
const popupProfile = document.querySelector(".popup_type_edit"); // переменная попапа №1
const popupPlace = document.querySelector(".popup_type_add"); // переменная попапа №2
const imagePopup = document.querySelector(".popup_type_image"); // переменная попапа №3
const buttonClosePopupProfile = popupProfile.querySelector(".popup__close-button"); // кнопка закрытия #1
const buttonClosePopupPlace = popupPlace.querySelector(".popup__close-button"); // кнопка закрытия #2
const buttonClosePopupImage = imagePopup.querySelector(".popup__close-button"); // кнопка закрытия #3
const formElementPopupProfile = popupProfile.querySelector(".popup__form"); // переменная формы #1
const formElementPopupPlace = popupPlace.querySelector(".popup__form"); // переменная формы #2
const inputName = document.querySelector(".popup__input_text_name"); // переменная инпута имени профиля
const inputJob = document.querySelector(".popup__input_text_occupation"); // переменная инпута должности профиля
const profileName = document.querySelector(".profile__name"); // переменная имени профиля
const profileOccupation = document.querySelector(".profile__occupation"); // переменная должности профиля
const imageCaption = document.querySelector(".popup__caption"); // переменная описания картинки в попапе
const imagePicture = document.querySelector(".popup__image"); // переменная картинки в попапе
const inputTitle = document.querySelector(".popup__input_text_title"); // переменная инпута названия
const inputLink = document.querySelector(".popup__input_text_link"); // переменная инпута ссылки
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
const formEditValidator = new FormValidator(validationConfig, formElementPopupProfile);
formEditValidator.enableValidation();
const formAddValidator = new FormValidator(validationConfig, formElementPopupPlace);
formAddValidator.enableValidation();

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
  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputJob.value;
  closePopup(popupProfile);
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
  imagePicture.src = card.link;
  imagePicture.alt = card.name;
  imageCaption.textContent = card.name;
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
  const name = inputTitle.value;
  const link = inputLink.value;
  const card = { name, link };
  addCard(list, createNewCard(card));
  closePopup(popupPlace);
  formElementPopupPlace.reset();
}

buttonOpenPopupProfile.addEventListener("click", function () {
  formElementPopupProfile.reset();
  formEditValidator.resetErrorForForm();
  inputName.value = profileName.textContent;
  inputJob.value = profileOccupation.textContent;
  openPopup(popupProfile);
});
buttonOpenPopupPlace.addEventListener("click", function () {
  formElementPopupPlace.reset();
  formAddValidator.resetErrorForForm();
  openPopup(popupPlace);
});
buttonClosePopupProfile.addEventListener("click", function () {
  closePopup(popupProfile);
});
buttonClosePopupPlace.addEventListener("click", function () {
  closePopup(popupPlace);
});
formElementPopupProfile.addEventListener("submit", handleFormSubmitEdit);
formElementPopupPlace.addEventListener("submit", handleFormSubmitAdd);
buttonClosePopupImage.addEventListener("click", function () {
  closePopup(imagePopup);
});
