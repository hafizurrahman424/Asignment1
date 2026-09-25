// quesion number 01
function describeValue(value){
    let type = typeof(value);
    if(value){
        return type + " | truthy";
    }
    else{
        return type + " | falsy"
    }
}
console.log(describeValue("hello"));
console.log(describeValue(""));
console.log(describeValue(25));
console.log(describeValue(true));
console.log(describeValue(null));
console.log(describeValue(undefined));

// Answer question number 02
function getDayType(day){
    let NameOfDay = day.toLowerCase();
    switch(NameOfDay){
        case "friday":
            return "Weekend"
        case "saturday":
            return "Weekend"
        case "sunday":
            return "Working Day"
        case "monday":
            return "Working Day"
        case "tuesday":
            return "Working Day"
        case "wednessday":
            return "Working Day"  
        case "thursday":
            return "Working Day"
        default:
            return "Invalid Day"      
    }
}
console.log(getDayType("Friday"));
console.log(getDayType("friday"));
console.log(getDayType("Tuesday"));
console.log(getDayType("MONDAY"));
console.log(getDayType("Bandarban"));

//Answer to question No 03
function validateUsername(name){
    if(name.length<4){
        return "Too Short";
    }
    else if(name.includes(" ")){
        return "No Space Allowed";
    }
    else if(name.toLowerCase().includes("admin")){
        return "Reserved Word";
    }
    else{
        return "Available";
    }
}
console.log(validateUsername("rahim123"));
console.log(validateUsername("ab"));
console.log(validateUsername("a b"));
console.log(validateUsername("abcd"));
console.log(validateUsername("rahim islam"));
console.log(validateUsername("superadmin99"));
console.log(validateUsername("Admin_Rahim"));
 
// question no 05 

function getCngFare(distance, isNight=false, waitingMunites=0){
    let fare = 50;
    if(distance>2){
        fare = fare +  (distance-2) *15;
    }
    fare = fare + +(2* waitingMunites)
  if(isNight){
        fare = fare + (fare*20)/100;
    }
    return fare;
}
console.log(getCngFare(2));
console.log(getCngFare(1));
console.log(getCngFare(5));
console.log(getCngFare(10));
console.log(getCngFare(5, false, 10));
console.log(getCngFare(5, true));
console.log(getCngFare(5, true, 10));

//question Number 5
getChaseVerdict = (target, scored, ballsLeft)=>{
    let runsNeeded = target-scored;
    if(runsNeeded == 0 || runsNeeded <0)
        return "Won";
    else if(ballsLeft==0 || ballsLeft<0){
        return "Lost";
    }
    let requiredRate = (runsNeeded/ballsLeft)*6;
    let verdict;

    if (requiredRate <= 6) {
        verdict = "Comfortable";
    }
    else if (requiredRate <= 12) {
        verdict = "Tough";
    }
    else {
        verdict = "Almost Impossible";
    }

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;

}
console.log(getChaseVerdict(200, 200, 12));

console.log(getChaseVerdict(200, 190, 0));

console.log(getChaseVerdict(100, 90, 12));

console.log(getChaseVerdict(100, 80, 12));

console.log(getChaseVerdict(100, 70, 12));

console.log(getChaseVerdict(150, 149, 1));


