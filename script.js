// 1 Switch uzduotis

var car = "BMW"

switch(car){
    case "VW" :
    case "Audi":
    case "Bentley":
    case "Bugatti":
    case "Lamborghini":
    case "Porsche":
    console.log("VW Group")
    break
    case "BMW" :
    case "Mini" :
    case "Rolls-Royce" :
    console.log("BMW Group")
}

console.log("===========")

// 2 Switch uzduotis

var userInput = prompt("Irašykite vaisių ar daržovę").toLowerCase()

switch (userInput) {
    case "mandarinas" :
    case "apelsinas" :
    case "obuolys" :
    case "bananas" :
    case "kriaušė" :
    case "slyva" :
    case "arbūzas" :
    case "braškė" :
    case "mėlynė" :
    case "vyšnia" :
    console.log(userInput + " yra vaisius")
    break
    case "bulvė" :
    case "kopūstas" :
    case "morka" :
    case "moliūgas" :
    case "agurkas" :
    case "pomidoras" :
    case "česnakas" :
    case "svogūnas" :
    case "rabarbaras" :
    case "ridikėlis" :
    console.log(userInput + " yra daržovė")
    break
    default: alert("Įrašyk vaisių ar daržovę")
}

console.log("===========")

// 3 Switch uzduotis

var weekDay = "1"


switch(weekDay){
    case "0":
    weekDay = "Pirmadienis"
    console.log("Pirmadienis")
    break
    case "1":
    weekDay = "Antradienis"
    console.log("Antradienis")
    break
    case "2":
    weekDay = "Trečiadienis"
    console.log("Trečiadienis")
    break
    case "3":
    weekDay = "Ketvirtadienis"
    console.log("Ketvirtadienis")
    break
    case "4":
    weekDay = "Penktadienis"
    console.log("Penktadienis")
    break
    case "5":
    weekDay = "Šeštadienis"
    console.log("Šeštadienis")
    break
    case "6":
    weekDay = "Sekmadienis"
    console.log("Sekmadienis")
    break
}