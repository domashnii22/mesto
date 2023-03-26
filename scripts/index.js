const editProfileButton = document.querySelector(".profile__edit"); // кнопка открытия №1
const addPlaceButton = document.querySelector(".profile__add"); // кнопка открытия №2
const closeEditPopupButton = document.querySelector(
  ".popup__close-button_type_edit"
); // кнопка закрытия #1
const closeAddPopupButton = document.querySelector(
  ".popup__close-button_type_add"
); // кнопка закрытия #2
const editPopup = document.querySelector(".popup_type_edit"); // переменная попапа №1
const addPopup = document.querySelector(".popup_type_add"); // переменная попапа №2
const formElementEdit = document.querySelector(".popup__form_type_edit"); // переменная формы #1
const formElementAdd = document.querySelector(".popup__form_type_add"); // переменная формы #2
const nameInput = document.querySelector(".popup__input_text_name"); // переменная инпута имени профиля
const jobInput = document.querySelector(".popup__input_text_occupation"); // переменная инпута должности профиля
const profileName = document.querySelector(".profile__name"); // переменная имени профиля
const profileOccupation = document.querySelector(".profile__occupation"); // переменная должности профиля
const placeTitle = document.querySelector(".place__caption"); // переменная названия места
const placeImage = document.querySelector(".place__image"); // переменная картинки места
const imagePopup = document.querySelector(".popup_type_image");
const closePopupImageButton = document.querySelector(
  ".popup__close-button_type_image"
); // кнопка закрытия #3 
const popupImageCaption = document.querySelector(".popup__caption"); // переменная описания картинки в попапе
const popupImagePicture = document.querySelector(".popup__image"); // переменная картинки в попапе
const list = document.querySelector(".places__items"); // переменная списка
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

function openPopupEdit() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileOccupation.textContent;
  editPopup.classList.add("popup_opened");
}

function closePopupEdit() {
  editPopup.classList.remove("popup_opened");
}

function handleFormSubmitEdit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileOccupation.textContent = jobInput.value;
  closePopupEdit();
}

function openPopupAdd() {
  addPopup.classList.add("popup_opened");
}

function closePopupAdd() {
  addPopup.classList.remove("popup_opened");
}

function createCard(card) {
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
    openPopupImage(imagePopup);
    popupImageCaption.textContent = card.name;
    popupImagePicture.src = card.link;
    popupImagePicture.alt = card.name;
  });
  list.prepend(newCard);
}

initialCards.forEach(createCard);

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
  createCard(card);
}

function openPopupImage() {
  imagePopup.classList.add("popup_opened");
}

function closePopupImage() {
  imagePopup.classList.remove("popup_opened");
}

editProfileButton.addEventListener("click", openPopupEdit);
addPlaceButton.addEventListener("click", openPopupAdd);
closeEditPopupButton.addEventListener("click", closePopupEdit);
closeAddPopupButton.addEventListener("click", closePopupAdd);
formElementEdit.addEventListener("submit", handleFormSubmitEdit);
formElementAdd.addEventListener("submit", handleFormSubmitAdd);
formElementAdd.addEventListener("submit", closePopupAdd);
closePopupImageButton.addEventListener("click", closePopupImage);
