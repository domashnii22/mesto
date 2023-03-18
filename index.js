// const editProfileButton = document.querySelector('.profile__edit');
// const closePopupButton = document.querySelector(".popup__close-button");
// const editPopup = document.querySelector('.popup');

// editProfileButton.addEventListener('click', function() {
//     // console.log(editPopup);
//     editPopup.classList.add("popup_opened");
// });

// closePopupButton.addEventListener('click', function() {
//     // console.log(editPopup); 
//     editPopup.classList.remove("popup_opened");
// });

// // Находим форму в DOM
// let formElement = document.querySelector('.popup__form');
// let nameInput = document.querySelector('.popup__name');
// let jobInput = document.querySelector('.popup__occupation');


// nameInput.value = 'Жак-Ив Кусто';
// jobInput.value = 'Исследователь океана';
// // Обработчик «отправки» формы, хотя пока
// // она никуда отправляться не будет
// function handleFormSubmit (evt) {
//     evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
//                                                 // Так мы можем определить свою логику отправки.
//                                                 // О том, как это делать, расскажем позже.

//     nameValue = nameInput.value;
//     jobValue = jobInput.value;// Получите значение полей jobInput и nameInput из свойства value

//     let profileName = document.querySelector('.profile__name');
//     let profileOccupation = document.querySelector('.profile__occupation'); // Выберите элементы, куда должны быть вставлены значения полей

//     profileName.textContent = nameValue.textContent; 
//     profileOccupation.textContent = jobValue.textContent;// Вставьте новые значения с помощью textContent


// }

// console.log('Test', formElement);

// // Прикрепляем обработчик к форме:
// // он будет следить за событием “submit” - «отправка»
// formElement.addEventListener('submit', handleFormSubmit);


//////////////////

const editProfileButton = document.querySelector('.profile__edit'); // кнопка открытия
const closePopupButton = document.querySelector(".popup__close-button"); // кнопка закрытия
const editPopup = document.querySelector('.popup'); // переменная попапа
const formElement = document.querySelector('.popup__form'); // переменная формы
const nameInput = document.querySelector('.popup__name'); // переменная инпута имени профиля
const jobInput = document.querySelector('.popup__occupation'); // переменная инпута должности профиля
const profileName = document.querySelector('.profile__name'); // переменная имени профиля
const profileOccupation = document.querySelector('.profile__occupation'); // переменная должности профиля

function openPopup () {
    nameInput.value = profileName.textContent;
    jobInput.value = profileOccupation.textContent;
    editPopup.classList.add("popup_opened");
};

function closePopup () {
    editPopup.classList.remove("popup_opened");
};

editProfileButton.addEventListener('click', openPopup);

closePopupButton.addEventListener('click', closePopup);

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileOccupation.textContent = jobInput.value;
    editPopup.classList.remove("popup_opened");
}

formElement.addEventListener('submit', handleFormSubmit);







