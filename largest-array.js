/* function largestNumber(numbers) {
    let largest = numbers[0];
    for (i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        console.log(element);
        if (element > largest) {
            largest = element;
        }
    }
    return largest
}
const numbers = largestNumber([34, 53, 45, 34, 65, 45, 3423]);
console.log(numbers);
console.log('largest number', numbers); */

//lowest element of an array
function smallestNumber(numbers) {
    let smallest = numbers[0];
    for (i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        console.log(element);
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}
const numbers = smallestNumber([23, 543, 45, 43, 64, 43]);
console.log('smallest number', numbers);

