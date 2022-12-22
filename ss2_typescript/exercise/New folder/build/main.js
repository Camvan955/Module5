
let num1 = 0;
let num2 = 1;
function fibonacci(n) {

    let num3;
    let temp;
    let result = num1 + num2;
    for (let i = 2; i < n; i++) {
        num3 = num1 + num2;
        temp = num3;
        num1 = num2;
        num2 = temp;
        result += num3;
        console.log(num3)
    }
    return result;
}
let n = parseInt(prompt("nhập vào số lượng số fibonacci cần tính tổng: "));
console.log(num1);
console.log(num2)
console.log("Tổng các số fibonacci có trong dãy là: "+fibonacci(n));
