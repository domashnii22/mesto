const initialCards = [
  {
    title: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    title: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    title: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    title: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    title: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    title: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
]; // переменная массива

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
const popupAvatarSelector = '.popup_type_avatar';
const popupDeleteSelector = '.popup_type_delete';

const configUserInfo = {
  profileNameSelector: ".profile__name",
  profileOccupationSelector: ".profile__occupation",
  profileAvatarSelector: ".profile__avatar"
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
  validationConfig
}
