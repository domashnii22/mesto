const editProfileButton = document.querySelector(".profile__edit"); // кнопка открытия №1
const addPlaceButton = document.querySelector(".profile__add"); // кнопка открытия №2
const editPopup = document.querySelector(".popup_type_edit"); // переменная попапа №1
const addPopup = document.querySelector(".popup_type_add"); // переменная попапа №2
const imagePopup = document.querySelector(".popup_type_image"); // переменная попапа №3
const closeEditPopupButton = editPopup.querySelector(
  ".popup__close-button"
); // кнопка закрытия #1
const closeAddPopupButton = addPopup.querySelector(
  ".popup__close-button"
); // кнопка закрытия #2
const closePopupImageButton = imagePopup.querySelector(
  ".popup__close-button"
); // кнопка закрытия #3 
const formElementEdit = editPopup.querySelector(".popup__form"); // переменная формы #1
const formElementAdd = addPopup.querySelector(".popup__form"); // переменная формы #2
const nameInput = document.querySelector(".popup__input_text_name"); // переменная инпута имени профиля
const jobInput = document.querySelector(".popup__input_text_occupation"); // переменная инпута должности профиля
const profileName = document.querySelector(".profile__name"); // переменная имени профиля
const profileOccupation = document.querySelector(".profile__occupation"); // переменная должности профиля
const placeTitle = document.querySelector(".place__caption"); // переменная названия места
const placeImage = document.querySelector(".place__image"); // переменная картинки места
const popupImageCaption = document.querySelector(".popup__caption"); // переменная описания картинки в попапе
const popupImagePicture = document.querySelector(".popup__image"); // переменная картинки в попапе
const list = document.querySelector(".places__items"); // переменная списка

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

function addCard(card) {
  const anotherCard = createCard(card);
  list.prepend(anotherCard);
}

const createCard = (card) => {
  const newCard = document
    .querySelector(".place-template")
    .content.cloneNode(true);
  const cardImage = newCard.querySelector(".place__image");
  const cardCaption = newCard.querySelector(".place__caption");
  const cardDeleteButton = newCard.querySelector(".place__trash-button");
  cardCaption.textContent = card.name;
  cardImage.setAttribute("src", card.link);
  cardImage.setAttribute("alt", card.name);
  cardDeleteButton.addEventListener("click", handleDeleteButton);
  newCard
    .querySelector(".place__heart")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("places__heart_active");
    });
  cardImage.addEventListener("click", (evt) => {
    openPopup(imagePopup);
    popupImageCaption.textContent = card.name;
    popupImagePicture.src = card.link;
    popupImagePicture.alt = card.name;
  });
  return newCard;
}

initialCards.forEach(addCard);

function handleDeleteButton(evt) {
  const buttonDelete = evt.target;
  const card = buttonDelete.closest(".places__item");
  card.remove();
}

function handleFormSubmitAdd(evt) {
  evt.preventDefault();
  const formElement = evt.target;
  const name = formElement.querySelector(".popup__input_text_title").value;
  const link = formElement.querySelector(".popup__input_text_link").value;
  const card = { name, link };
  addCard(card);
  closePopup(addPopup);
  formElement.reset();
}

editProfileButton.addEventListener("click", function () {
 nameInput.value = profileName.textContent;
 jobInput.value = profileOccupation.textContent;
 openPopup(editPopup);
});
addPlaceButton.addEventListener("click", function () {
  openPopup(addPopup)
});
closeEditPopupButton.addEventListener("click", function () {
  closePopup(editPopup)
});
closeAddPopupButton.addEventListener("click", function () {
  closePopup(addPopup)
});
formElementEdit.addEventListener("submit", handleFormSubmitEdit);
formElementAdd.addEventListener("submit", handleFormSubmitAdd);
closePopupImageButton.addEventListener("click", function () {
  closePopup(imagePopup)
});
