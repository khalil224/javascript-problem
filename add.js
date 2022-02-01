/* function add(a, b) {
    return a + b;

}
console.log(add('adam' + 'eve')); */
var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for (var i = 0; i < sentence.length; i++) {
    var letter = sentence[i];
    if (count == 'a') {
        count++;
    }
}
console.log(count)