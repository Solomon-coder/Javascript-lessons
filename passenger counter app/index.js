let countEl = document.getElementById("count-el")

let passengers = 0

function increment() {
    passengers += 1
    countEl.textContent = passengers
}

let saveEl = document.getElementById("save-el");
function save() {
    let count = passengers + " - "
    saveEl.textContent += count;
    countEl.textContent = 0
    passengers = 0
} 












