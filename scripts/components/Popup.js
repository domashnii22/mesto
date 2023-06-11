export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._buttonClosePopup = this._popup.querySelector(".popup__close-button");
    this._form = this._popup.querySelector('.popup__form');
  }

  _closePopupByEsc = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  _closePopupByButton = () => {
    this.close();
  };

  _closePopupByOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    this.close();
  }
    }

  setEventListeners() {
    this._buttonClosePopup.addEventListener("click", this._closePopupByButton);
    this._popup.addEventListener("click", this._closePopupByOverlay);
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._closePopupByEsc);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._closePopupByEsc);
  }
}
