import Popup  from "./Popup";

export default class PopupDeleteCard extends Popup {
    constructor(popupSelector, SubmitFunction) {
        super(popupSelector);
        this._SubmitFunction = SubmitFunction;
        this._form = this._popup.querySelector(".popup__form");
        this._submitButton = this._form.querySelector(".popup__save-button");
        this._defaultByttonText = this._submitButton.textContent;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {   
        evt.preventDefault();    
        this._submitButton.textContent = `${this._submitButton.textContent}...`
        this._SubmitFunction( { card: this._element, cardId: this._cardId} );
        })
    }

    
    setDefaultText () {
        this._submitButton.textContent = this._defaultByttonText;
    }


    open = ( {card, cardId}) => {
        super.open();
        this._element = card;
        this._cardId = cardId;

    }
}