var numbers = [23, 34, 453, 54, 34, 54, 55];
/* let sum = 0;
for (i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    console.log(element);

    sum = sum + element;

} */
// console.log('sum is', sum);

//sum using function
function arraySum(numbers) {
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        console.log(element);
        sum = sum + element;

    }
    return sum;
}
const total = arraySum(numbers);
console.log('total is', total);
