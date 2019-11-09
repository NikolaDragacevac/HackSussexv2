class StringWord{
    constructor(word, userId, upVoteCount){
        this._word = word;
        this._userId = userId;
        this._upVoteCount = upVoteCount;
    }

    get word(){
        return this._word;
    }

    get userId(){
        return this._userId;
    }

    get upVoteCount(){
        return this._upVoteCount;
    }
}

module.exports = StringWord
