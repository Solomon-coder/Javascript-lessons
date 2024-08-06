let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Asiimwe",
    chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    let cards = [firstCard, secondCard];
    let sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    if (sum <= 20) {
        message = "Do you want to draw another card?"
    } else if (sum === 21) {
        message = "you've got blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame()
    }
}

let largeCountries = ["tuvalu", "india", "USA", "indonesia", "monaco"]
console.log("the five largest countries in the world")
for (i = 0; i < largeCountries.length; i++) {
    console.log("- " + largeCountries[i])
}
largeCountries.pop("monaco")
console.log(largeCountries)
largeCountries.push("pakistan")
console.log(largeCountries);
largeCountries.shift("tuvalu")
console.log(largeCountries);
largeCountries.unshift("china")
console.log(largeCountries);


let hands = ["rock", "paper", "scissors"]



function randomItem() {
    let randomItemFromArray = Math.floor(Math.random() * 3);
    return hands[randomItemFromArray]
}
console.log(randomItem());











