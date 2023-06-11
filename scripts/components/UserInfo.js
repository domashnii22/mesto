export default class UserInfo{
    constructor(configUserInfo) {
        this._profileName = document.querySelector(configUserInfo.profileNameSelector);
        this._profileOccupation= document.querySelector(configUserInfo.profileOccupationSelector);
        this._profileAvatar= document.querySelector(configUserInfo.profileAvatarSelector);
    }

    getUserInfo() {
        return {name: this._profileName.textContent, occupation: this._profileOccupation.textContent}
    }

    setUserInfo({name, occupation, avatar}) {
        this._profileName.textContent = name;
        this._profileOccupation.textContent = occupation;
        this._profileAvatar.src = avatar;
    }

}