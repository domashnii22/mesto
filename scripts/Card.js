export default class Card {
  constructor(card, selectorTemplate, openImagePopup) {
    this._card = card;
    this._link = card.link;
    this._name = card.name;
    this._selectorTemplate = selectorTemplate;
    this._openImagePopup = openImagePopup;
  }

  _getTemplateClone() {
    return document
      .querySelector(this._selectorTemplate)
      .content.querySelector(".places__item")
      .cloneNode(true);
  }

  _handleLike = () => {
    this._likeElement.classList.toggle("places__heart_active");
  };

  _handleDeleteElement = () => {
    this._cloneElement.remove();
  };

  _handleOpenImageElement = () => {
    this._openImagePopup(this._card);
  };

  _setEventListener() {
    this._likeElement.addEventListener("click", this._handleLike);
    this._trashElement.addEventListener("click", this._handleDeleteElement);
    this._imageElement.addEventListener("click", this._handleOpenImageElement);
  }

  createCard() {
    this._cloneElement = this._getTemplateClone();
    this._imageElement = this._cloneElement.querySelector(".place__image");
    this._captionElement = this._cloneElement.querySelector(".place__caption");
    this._trashElement = this._cloneElement.querySelector(
      ".place__trash-button"
    );
    this._likeElement = this._cloneElement.querySelector(".place__heart");
    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    this._captionElement.textContent = this._name;
    this._setEventListener();
    return this._cloneElement;
  }
}
