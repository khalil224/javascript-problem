//fibonacci series
/* 
3rd term=2nd term+1st term
4rth term=3rd term+ 2nd term
5th term=4rth term+3rd term
nth term=(n-1)th term+(n-2)th term
ith term=(i-1)th term+(i-2)th term
*/
// const fibo = [0, 1];
// for (let i = 2; i < 20; i++) {

//     /* nth term=(n-1)th term+(n-2)th term
//        ith term=(i-1)th term+(i-2)th term */
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);

function fiboSeries(num) {
    if (typeof num != 'string') {
        return 'please enter a number';
    }
    if (num < 2) {
        return 'please enter a number greater than two';
    }
    const fibo = [0, 1];
    for (let i = 2; i < num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
const fibonacci = fiboSeries('20');
console.log('fibonacci series', fibonacci);
