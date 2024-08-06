let fruit = ["apple", "orange", "apple", "apple", "orange"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function fruitArrangement() {
    for (i = 0; i < fruit.length; i++) {
        if (fruit[i] === "apple") {
            appleShelf.textContent += " " + fruit[i]
        } else if (fruit[i] === "orange") {
            orangeShelf.textContent += " " + fruit[i]
        }
    }
}
fruitArrangement()