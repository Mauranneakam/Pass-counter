// let welcomeEl = document.getElementById("welcome-el")
// let name = "Mau"
// let greeting = "hi "
// welcomeEl.innerText = greeting + name

// // Add an emoji to the end! 👋
// // WRITE YOUR CODE BELOW HERE
// // HINT: count = count + 1

// welcomeEl.innerText += "👋"
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let sav = count + " - "
    saveEl.textContent += sav
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    countEl.textContent = 0
}
