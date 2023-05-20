import Card from ".././scripts/components/Card.js";
import FormValidator from ".././scripts/components/FormValidator.js";
import PopupWithImage from ".././scripts/components/PopupWithImage.js";
import Section from ".././scripts/components/Section.js";
import UserInfo from ".././scripts/components/UserInfo.js";
import PopupWithForm from ".././scripts/components/PopupWithForm.js";
import {
  initialCards,
  formElementPopupProfile,
  formElementPopupPlace,
  buttonOpenPopupProfile,
  buttonOpenPopupPlace,
  selectorTemplate,
  popupProfileSelector,
  popupPlaceSelector,
  popupImageSelector,
  listSelector,
  configUserInfo,
  validationConfig
}
 from ".././scripts/utils/cards.js";
 import '../pages/index.css'; 


const User = new UserInfo(configUserInfo);

const formEditValidator = new FormValidator(validationConfig, formElementPopupProfile);

const formAddValidator = new FormValidator(validationConfig, formElementPopupPlace);

const popupImage = new PopupWithImage(popupImageSelector);

const section = new Section({
  items: initialCards,
  renderer: (element) => {
    const anotherCard = new Card(element, selectorTemplate, popupImage.open); 
    return anotherCard.createCard();
  }
}, listSelector)
section.addCard()

const popupEditProfile = new PopupWithForm(popupProfileSelector, (evt) => {
  evt.preventDefault();
  User.setUserInfo(popupEditProfile.getInputValue())
  popupEditProfile.close();
})

const popupAddPlace = new PopupWithForm(popupPlaceSelector, (evt) => {
  evt.preventDefault();
  section.addItem(section.renderer(popupAddPlace.getInputValue()));
  popupAddPlace.close();
})

formEditValidator.enableValidation();
formAddValidator.enableValidation();
popupImage.setEventListeners();
popupEditProfile.setEventListeners();
popupAddPlace.setEventListeners();

buttonOpenPopupProfile.addEventListener("click", function () {
  formEditValidator.resetErrorForForm();
  popupEditProfile.setInputValue(User.getUserInfo());
  popupEditProfile.open();
});
buttonOpenPopupPlace.addEventListener("click", function () {
  formElementPopupPlace.reset();
  formAddValidator.resetErrorForForm();
  popupAddPlace.open();
});

