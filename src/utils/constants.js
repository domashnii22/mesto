import Api from "../components/Api.js";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-68",
  headers: {
    authorization: "9f6c947c-e730-4844-9c46-0d24177e3e8e",
    "Content-Type": "application/json",
  },
});

const popupProfile = document.querySelector(".popup_type_edit"); // переменная попапа №1
const popupPlace = document.querySelector(".popup_type_add"); // переменная попапа №2
const popupAvatar = document.querySelector(".popup_type_avatar"); // переменная попапа №3
const formElementPopupProfile = popupProfile.querySelector(".popup__form"); // переменная формы #1
const formElementPopupPlace = popupPlace.querySelector(".popup__form"); // переменная формы #2
const formElementPopupAvatar = popupAvatar.querySelector(".popup__form"); // переменная формы #3
const buttonOpenPopupProfile = document.querySelector(".profile__edit"); // кнопка открытия №1
const buttonOpenPopupPlace = document.querySelector(".profile__add"); // кнопка открытия №2
const selectorTemplate = "#cardTemplate";
const popupProfileSelector = ".popup_type_edit";
const popupPlaceSelector = ".popup_type_add";
const popupImageSelector = ".popup_type_image";
const listSelector = ".places__items";
const popupAvatarSelector = ".popup_type_avatar";
const popupDeleteSelector = ".popup_type_delete";

const configUserInfo = {
  profileNameSelector: ".profile__name",
  profileOccupationSelector: ".profile__occupation",
  profileAvatarSelector: ".profile__avatar",
};

const validationConfig = {
  inputSelector: ".popup__input",
  errorClassTemplate: ".popup__input-error_type_",
  activeErrorClass: "popup__input-error",
  submitButtonSelector: ".popup__save-button",
  validSubmitButtonClass: "popup__save-button_valid",
  errorInputClass: "popup__input_error",
};

export {
  api,
  formElementPopupProfile,
  formElementPopupPlace,
  formElementPopupAvatar,
  buttonOpenPopupProfile,
  buttonOpenPopupPlace,
  selectorTemplate,
  popupProfileSelector,
  popupPlaceSelector,
  popupImageSelector,
  listSelector,
  popupAvatarSelector,
  popupDeleteSelector,
  configUserInfo,
  validationConfig,
};
