export default class UserInfo{
    constructor(configUserInfo) {
        this._profileName = document.querySelector(configUserInfo.profileNameSelector);
        this._profileOccupation= document.querySelector(configUserInfo.profileOccupationSelector);
    }

    getUserInfo() {
        return {name: this._profileName.textContent, occupation: this._profileOccupation.textContent}
    }

    setUserInfo(dataUserInfo) {
        this._profileName.textContent = dataUserInfo.name;
        this._profileOccupation.textContent = dataUserInfo.occupation;
    }

}