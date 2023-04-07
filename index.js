import Dog from '/Dog.js'
import dogs from '/data.js'

const feedbackLike = document.querySelector('.heart')
const feedbackDislike = document.querySelector('.cross')
const logoBtn = document.getElementById("nav-icon-logo")


const dogsArray = []
const likedDogs = []

for (let dog in dogs) {
    dogsArray.push(dogs[dog].name.toLowerCase())
}

function getNewDog() {
    const nextDogData = dogs[dogsArray.shift()]
    return nextDogData? new Dog(nextDogData) : {}
}

function feedback() {

    if (dogsArray.length > 0) {

        feedbackLike.addEventListener('click', () => {
            document.querySelector('.like').classList.toggle('none')

            likedDogs.push(newDog.name)

            feedbackLike.classList.add('disabled')
            feedbackDislike.classList.add('disabled')
            setTimeout(() => {
                newDog = getNewDog();
                render();
                feedbackLike.classList.remove('disabled')
                feedbackDislike.classList.remove('disabled')
            }, 1000)
        })


        feedbackDislike.addEventListener('click', () => {
            document.querySelector('.nope').classList.toggle('none')
            feedbackLike.classList.add('disabled')
            feedbackDislike.classList.add('disabled')

            setTimeout(() => {
                newDog = getNewDog();
                render();
                feedbackLike.classList.remove('disabled')
                feedbackDislike.classList.remove('disabled')

            }, 1000)
        })
    }
}

function getNoMoreDogsHtml() {
    feedbackLike.classList.add('none')
    feedbackDislike.classList.add('none')
    return `
    <div class="final-message-div">
        <h1>No more matches</h2>
        <h2>Click on the logo above to see your liked profiles </h2>
    </div>   `
}

function getlikedProfilesHtml() {
    let likedDogsHtml = []
    for (let dog of likedDogs) {
        likedDogsHtml.push(`<li>${dog}</li>`)
    }

    document.querySelector('.final-message-div').classList.add('none')
    return `
    <div class="liked-profiles">
        <h1>Dogs that you liked:</h2>
        <ul>${likedDogsHtml.join('')}</ul>
    </div>
    `
}


function render() {
    if (newDog instanceof Dog) {
        document.getElementById('dog-profile').innerHTML = newDog.getNewDogHtml();
    } else {
        document.getElementById('dog-profile').innerHTML = getNoMoreDogsHtml()
    }
}

logoBtn.addEventListener('click', () => {
    if (dogsArray) {
        document.getElementById('dog-profile').innerHTML = getlikedProfilesHtml()
    }
})


let newDog = getNewDog()

render()
feedback()

