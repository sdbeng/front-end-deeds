console.log('====================================');
console.log('app2.js');
console.log('====================================');
//whatever user input log it as text to the p tag
let inputBox = document.querySelector("input")
let btn = document.querySelector("#btn")
let log = document.getElementById("log-text")

btn.addEventListener("click", (e) => {
    // log.textContent = e.target.value
    log.textContent = inputBox.value
    document.body.append(log)
    inputBox.value = ''

})

console.log('input content',inputBox)


