export default class Card {
  constructor(card, selectorTemplate, openImagePopup, openDeletePopup, changeLike) {
    this._card = card;
    this._myId = card.myid;
    this._ownerId = card.owner._id;
    this._likes = card.likes;
    this._likesLength = card.likes.length;
    this._cardId = card._id;
    this._link = card.link;
    this._name = card.name;
    this._selectorTemplate = selectorTemplate;
    this._openImagePopup = openImagePopup;
    this._openDeletePopup = openDeletePopup;
    this._changeLike = changeLike;
   }

  _getTemplateClone() {
    return document
      .querySelector(this._selectorTemplate)
      .content.querySelector(".places__item")
      .cloneNode(true);
  }

  _handleLike = () => {
    this._changeLike(this._likeElement, this._cardId)
  };

  _handleDeleteElement = () => {
    this._openDeletePopup( { card: this, cardId: this._cardId })
  }

  _handleOpenImageElement = () => {
    this._openImagePopup(this._card);
  }

  _setEventListener() {
    this._likeElement.addEventListener("click", this._handleLike);
    this._trashElement.addEventListener("click", this._handleDeleteElement);
    this._imageElement.addEventListener("click", this._handleOpenImageElement);
  }

  _deleteTrashElement() {
    this._myId === this._ownerId
      ? (this._trashElement.style.display = "block")
      : (this._trashElement.style.display = "none");
  }

  _countLikes() {
    this._likes.forEach(element => {
      if (element._id = this._myId) {
        this._likeElement.classList.add("places__heart_active")
        return
      }
    })
    this._counter.textContent =  this._likesLength
  }

  toggleLike(likes) {
    this._likeElement.classList.toggle("places__heart_active");
    this._counter.textContent = likes.length
  }

  removeCard() {
    this._cloneElement.remove();
    this._cloneElement = null;
  }

  createCard() {
    this._cloneElement = this._getTemplateClone();
    this._imageElement = this._cloneElement.querySelector(".place__image");
    this._captionElement = this._cloneElement.querySelector(".place__caption");
    this._trashElement = this._cloneElement.querySelector(
      ".place__trash-button"
    );
    this._likeElement = this._cloneElement.querySelector(".place__heart");
    this._counter = this._cloneElement.querySelector(".place__heart-counter");
    this._imageElement.src = this._link;
    this._imageElement.alt = `Изображение ${this._name}`;
    this._captionElement.textContent = this._name;
    this._deleteTrashElement();
    this._countLikes();
    this._setEventListener();
    return this._cloneElement;
  }
}
