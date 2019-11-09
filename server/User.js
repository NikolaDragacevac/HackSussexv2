class User{
    constructor(nickName){
        this._nickName = nickName;
    }
    get nickName(){
        return this._nickName;
    }

    get userId() {
        return this._userId;
    }
}

module.exports = User
