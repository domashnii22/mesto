import Card from ".././scripts/components/Card.js";
import FormValidator from ".././scripts/components/FormValidator.js";
import PopupWithImage from ".././scripts/components/PopupWithImage.js";
import Section from ".././scripts/components/Section.js";
import UserInfo from ".././scripts/components/UserInfo.js";
import PopupWithForm from ".././scripts/components/PopupWithForm.js";
import PopupDeleteCard from "../scripts/components/PopupDeleteCard.js";
import Api from "../scripts/components/Api.js";
import {
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
} from ".././scripts/utils/cards.js";
import "../pages/index.css";
import { data, error } from "jquery";

const User = new UserInfo(configUserInfo);

const formEditValidator = new FormValidator(
  validationConfig,
  formElementPopupProfile
);

const formAddValidator = new FormValidator(
  validationConfig,
  formElementPopupPlace
);

const formAvatarValidator = new FormValidator(
  validationConfig,
  formElementPopupAvatar
);

const popupImage = new PopupWithImage(popupImageSelector);

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-68",
  headers: {
    authorization: "9f6c947c-e730-4844-9c46-0d24177e3e8e",
    "Content-Type": "application/json",
  },
});

const deletePopupCard = new PopupDeleteCard(popupDeleteSelector, ( {card, cardId}) => {
  api.deleteCard(cardId)
  .then(res => {
    console.log(res)
    card.removeCard()
    deletePopupCard.close()
  })
  .catch((error) => console.error(`Ошибка при удалении карточки ${error}`))
  .finally(() => deletePopupCard.setDefaultText());
});

function createNewCard(element) {
  const anotherCard = new Card(
    element,
    selectorTemplate,
    popupImage.open,
    deletePopupCard.open,
    (likeElement, cardId) => {
      if (likeElement.classList.contains('places__heart_active')) {
        api.deleteLike(cardId)
        .then(res => {
          console.log(res)
          anotherCard.toggleLike(res.likes)
        })
        .catch((error) =>
          console.error(`Ошибка при снятии лайка ${error}`))
      } else {
        api.addLike(cardId)
        .then(res => {
        console.log(res)
        anotherCard.toggleLike(res.likes)
      })
      .catch((error) =>
        console.error(`Ошибка при простановке лайка ${error}`))
    }
  });
  return anotherCard.createCard();
}

const section = new Section((element) => {
  section.addItem(createNewCard(element));
}, listSelector);

const popupEditProfile = new PopupWithForm(popupProfileSelector, () => {
  api
    .setUserInfo(popupEditProfile.getInputValue())
    .then((res) => {
      User.setUserInfo({
        name: res.name,
        occupation: res.about,
        avatar: res.avatar,
      });
      popupEditProfile.close();
    })
    .catch((error) =>
      console.error(`Ошибка при редактировании профиля ${error}`)
    )
    .finally(() => popupEditProfile.setDefaultText());
});

const popupAddPlace = new PopupWithForm(popupPlaceSelector, () => {
  Promise.all([api.getInfo(), api.addNewCard(popupAddPlace.getInputValue())])
    .then(([dataUser, dataCard]) => {
      dataCard.myid = dataUser._id;
      section.addItem(createNewCard(dataCard));
      popupAddPlace.close();
    })
    .catch((error) =>
      console.error(`Ошибка при редактировании профиля ${error}`)
    )
    .finally(() => popupAddPlace.setDefaultText());
});

const popupEditAvatar = new PopupWithForm(popupAvatarSelector, () => {
  api
    .setNewAvatar(popupEditAvatar.getInputValue())
    .then((res) => {
      console.log(res);
      User.setUserInfo({
        name: res.name,
        occupation: res.about,
        avatar: res.avatar,
      });
      popupEditAvatar.close();
    })
    .catch((error) =>
      console.error(`Ошибка при редактировании аватара ${error}`)
    )
    .finally(() => popupEditAvatar.setDefaultText());
});

Promise.all([api.getInfo(), api.getCards()])
  .then(([dataUser, dataCard]) => {
    dataCard.forEach((element) => (element.myid = dataUser._id));
    User.setUserInfo({
      name: dataUser.name,
      occupation: dataUser.about,
      avatar: dataUser.avatar,
    });
    section.addCard(dataCard);
  })
  .catch((error) =>
    console.error(`Ошибка при редактировании профиля ${error}`)
  );

  formEditValidator.enableValidation();
formAddValidator.enableValidation();
formAvatarValidator.enableValidation();
popupImage.setEventListeners();
popupEditProfile.setEventListeners();
popupAddPlace.setEventListeners();
popupEditAvatar.setEventListeners();
deletePopupCard.setEventListeners();

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

document
  .querySelector(".profile__avatar-overlay")
  .addEventListener("click", () => {
    formAvatarValidator.resetErrorForForm();
    popupEditAvatar.open();
  });
