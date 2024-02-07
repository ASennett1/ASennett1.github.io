
const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?


const message =  {
isMorning: "Good morning",
isAfternoon: "Good Afternoon",
isEvening: "Good Evening"
}

let dynamicMessage;

if (isMorning) {
    dynamicMessage = message.isMorning;
}
else if (isAfternoon){
    dynamicMessage = message.isAfternoon;
}
else if (isEvening) {
    dynamicMessage = message.isEvening;
}

document.getElementById("welcome").innerHTML = dynamicMessage;