console.log('====================================');
console.log('app2.js');
console.log('====================================');
//whatever user input log it as text to the p tag
let inputBox = document.querySelector("input")
let btn = document.querySelector("#btn")


btn.addEventListener("click", () => {
        
    let log = document.createElement("p")
    log.textContent = inputBox.value
    document.body.append(log)
    inputBox.value = ''

})



