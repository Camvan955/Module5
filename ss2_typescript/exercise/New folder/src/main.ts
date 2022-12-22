function fibonacci(n: number) {
    let num1: number = 0;
    let num2: number = 1;
    let num3: number;
    let temp: number;
    let result: number = num1 + num2;
    for (let i = 1; i < n; i++) {
        num3 = num1 + num2;
        temp = num3;
        num1 = num2;
        num2 = temp;
        result += num3;
    }
    return result;
}

let n: number = parseInt(<string>prompt("nhập vào: "));
console.log(fibonacci(n));
