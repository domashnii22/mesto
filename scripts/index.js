const editProfileButton = document.querySelector('.profile__edit'); // кнопка открытия
const closePopupButton = document.querySelector('.popup__close-button'); // кнопка закрытия
const editPopup = document.querySelector('.popup'); // переменная попапа
const formElement = document.querySelector('.popup__form'); // переменная формы
const nameInput = document.querySelector('.popup__input_name'); // переменная инпута имени профиля
const jobInput = document.querySelector('.popup__input_occupation'); // переменная инпута должности профиля
const profileName = document.querySelector('.profile__name'); // переменная имени профиля
const profileOccupation = document.querySelector('.profile__occupation'); // переменная должности профиля

function openPopup () { 
    nameInput.value = profileName.textContent; 
    jobInput.value = profileOccupation.textContent; 
    editPopup.classList.add('popup_opened'); 
}; 

function closePopup () { 
    editPopup.classList.remove('popup_opened'); 
}; 

function handleFormSubmit (evt) { 
    evt.preventDefault(); 
    profileName.textContent = nameInput.value; 
    profileOccupation.textContent = jobInput.value; 
    closePopup ();
} 

editProfileButton.addEventListener('click', openPopup); 
closePopupButton.addEventListener('click', closePopup); 
formElement.addEventListener('submit', handleFormSubmit); 









