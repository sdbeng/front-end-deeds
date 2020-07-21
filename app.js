console.log('====================================');
console.log('Front end creation');
console.log('====================================');

let powerRangers = [
    "Jason Lee Scott", 
    "Kimberly Hart", 
    "Zack Taylor", 
    "Trini Kwan", 
    "Billy Cranston",
    "super man"
]

//render list of names in DOM
let newList = document.getElementById("rangers")
// for(let i = 0; i < powerRangers.length; i++){
//     let newName = document.createElement("li")
//     newName.textContent = powerRangers[i]
//     newList.append(newName)
// }

//try refactor code by using innerHTML
for(let i = 0; i < powerRangers.length; i++){
    // console.log(newList.innerHTML)
    newList.innerHTML += "<li>"+powerRangers[i]+"</li>"
}


//convert data to an array of objects, then display all
let newList2 = document.getElementById("rangers2")

let powerObjects = [
    {name: "Jason Lee Scott", color: "Red"}, 
    {name: "Kimberly Hart", color: "Pink"}, 
    {name: "Zack Taylor", color: "Black"}, 
    {name: "Trini Kwan", color: "Yellow"}, 
    {name: "Billy Cranston", color: "Blue"},
    {name: "Tommy Oliver", color: "Green"}
]

for(let i = 0; i < powerObjects.length; i++){
    // newList2.innerHTML += "<li>" + powerObjects[i].name + " - " +powerObjects[i].color + "</li>"

    //using object literal - less complex syntax
    newList2.innerHTML += `<li>${powerObjects[i].name} - ${powerObjects[i].color}</li>`
}

//events - addEventListener
let myEvent = document.getElementById("event-target")
let log = document.getElementById("log")

document.addEventListener('keydown', event => {
    if(event.isComposing || event.keyCode === 229){
        return;
    }
    //do something
    console.log('key pressed...')
    log.textContent += `${event.code}`
})
