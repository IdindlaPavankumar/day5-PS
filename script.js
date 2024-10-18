// check  the number is palindrome or not
let num = +prompt('enter the number');
let check = num
let rev = 0
while (num !== 0) {
    last = num % 10
    rev = rev * 10 + last
    num = Math.floor(num / 10)
}
console.log(rev)
if (rev === check) {
    console.log(rev, 'is a palindrome')
}
else {
    console.log(rev, 'is not a palindrome');

}
// print the fibonnaci series from a number up to 10 numbers
let user = +prompt('enter the number')
let a = 0;
let b = 1
let c;
for (i = 1; i <= 10; i++) {
    console.log(a);
    c = a + b;
    a = b;
    b = c
}

