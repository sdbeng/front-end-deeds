console.log('====================================');
console.log('app2.js');
console.log('====================================');
//whatever user input log it as text to the p tag
let inputBox = document.querySelector("input")
let btn = document.querySelector("#btn")
let count = 0

btn.addEventListener("click", () => {
        
    let log = document.createElement("p")
    console.log('inputBox.value ',inputBox.value)
    log.textContent = inputBox.value
    document.body.append(log)
    inputBox.value = ''

    //hide entry
    let miniBtn = document.createElement('button')
    // console.log('miniBtn ',miniBtn)
    miniBtn.style.display = "block"
    miniBtn.innerText = 1
    document.body.append(miniBtn)

})



