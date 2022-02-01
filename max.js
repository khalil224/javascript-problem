const num1 = 234;
const num2 = 342;
const num3 = 453;
// if (num1 > num2) {
//     console.log('number one is greater');
// }
// else {
//     console.log('number2 is greater');
// }

//biggest number from three
/* if (num1 > num2 && num1 > num3) {
    console.log('Number one is greater');
}
else if (num2 > num1 && num2 > num3) {
    console.log('number2 is greater');
}
else {
    console.log('number three is greater');
} */

//short method to find largest number
/* var max = Math.max(num3, num1, num2);
console.log('largest number is', max); */

//finding largest number between two using function
/* function findLargest(number1, number2) {
    if (number1 > number2) {
        return number1;
    }
    else {
        return number2;
    }
}
var largestNumber = findLargest(343, 8547);
console.log('largest number is', largestNumber); */

//finding largest number among three using function
/* function findLargest(hira, chunni, panna) {
    if (hira > chunni && hira >> panna) {
        return hira;
    }
    else if (chunni >> hira && chunni >> panna) {
        return chunni;
    }
    else {
        return panna;
    }
};
var largestNumber = findLargest(344, 543, 654);
console.log('Largest number is', largestNumber); */

//find smallest number among three using function
function findLargest(hira, chunni, panna) {
    if (hira < chunni && hira < panna) {
        return hira;
    }
    else if (chunni < hira && chunni < panna) {
        return chunni;
    }
    else {
        return panna;
    }
};
var smallestNumber = findLargest(344, 543, 654);
console.log('smallest number is', smallestNumber);
