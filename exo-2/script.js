// you can write js here
//console.log('exo-2');

//const myDate = new Date;

//const week = 'c est la semaine' ; 
//const weekend = 'c est le weekend';

//let day = parseInt(prompt("jour de la semaine"));

//let hour = parseInt(prompt("heure de la journée"));

    //if((day === 0 || day === 6) || (day === 5 && hour > 16) || (day === 1 && hour < 9)){
    //console.log(weekend);
    //}else{
    //console.log(week);
//}

// you can write js here
const myDate = new Date();

let isTesting = true;

const weekday = "jour de la semaine";
const weekend = "top c est le weekend";

let day;
let hour;


if (isTesting) {
    day = parseInt(prompt("Entrer jour de la semaine (1-7)"));
    hour = parseInt(prompt("Entrer une heure (0-23)"));
} else {
    day = myDate.getDay();
    hour = myDate.getHours();
}


if ((day === 0 || day === 6) || (day === 5 && hour > 16 ) || (day === 1 && hour < 9)){
    console.log(weekend);
} else {
    console.log(weekday);
}




























