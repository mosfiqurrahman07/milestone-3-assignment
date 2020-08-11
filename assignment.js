// feetToMile 
function feetToMile(feet) {
    var mile = feet / 5280; /*info: 1 mile = 5280 feet */
    return mile; 
}
var myFeet = 50000;
var toMile = feetToMile(myFeet);
toMile = toMile.toFixed(2) /*after decimal to show two number */
toMile = +toMile; /*string to number convert */
console.log(toMile); /*output - result */



// woodCalculator
function woodCalculator(chair, table, bed) {
    var chairCount = chair * 1; /*chair = 1 cubic feet wood */
    var tableCount = table * 3; /*table = 3 cubic feet wood */
    var bedCount = bed * 5; /*bed = 5 cubic feet wood */
    var totalWoodFeet = chairCount + tableCount + bedCount;
    return totalWoodFeet;    
}
var result = woodCalculator(15, 2, 3);
console.log("Total Wood quantity", result, "Cubic Feet"); /*output - result */



// brickCalculator
function brickCalculator(floorCount) {
    var feet = 0;
    for (var i = 1; i <= floorCount; i++) {
        if (i <= 10) {
            feet += 15; /*1-10th floor height 15 feet */
        }
        else if (i <= 20) {
            feet += 12; /*11-20th ten floor height 12 feet */
        }
        else if (i > 20) { 
            feet += 10; /*over 20th floor height 10 feet */
        } 
    }
    return feet * 1000; /*every feet = 1000 brick */
}
var result = brickCalculator(29);
console.log(result); /*output - result */



// tinyFriend
function tinyFriend(name) {
    var smallest = name[0];
    for (var i = 0; i < name.length; i++) {
        var currentName = name[i];
        smallest = currentName;
    }
    return smallest;
}
var result = tinyFriend(["jhankar", "mahbub", "hablu", "great", "shuvo", "mushfiq", "me"]);
console.log("Tiny friend name is", result); /*output - result */













