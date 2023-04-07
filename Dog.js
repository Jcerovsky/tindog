class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
 
    getNewDogHtml() {
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
        return `
        <img class="dog-img" src='${avatar}'>
        <img src="/images/badge-like.png" class="response-img like none">
        <img src="/images/badge-nope.png" class="response-img nope none">

        <div class="dog-specs">
            <h2 class="dog-info">${name}, ${age}</h2>
            <p class="dog-phrase">${bio}</p>
        </div>
        `
    }
    
}


export default Dog
