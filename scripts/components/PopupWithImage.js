import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imagePicture = this._popup.querySelector(".popup__image");
        this._imageCaption = this._popup.querySelector(".popup__caption");
    }

    open = (card) => {
        this._imagePicture.src = card.link;
        this._imagePicture.alt = `Изображение ${card.title}`;
        this._imageCaption.textContent = card.title;
        super.open()
    }
}