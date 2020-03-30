function Fibonacci(n) {
    let fiboArr = [];
    fiboArr[0] = 0;
    fiboArr[1] = 1;
    if (n < 1) {
        console.log(false);
    } else if (n === 1) {
        console.log(true);
    } else
        for (let i = 2; i < Infinity; i++) {
            fiboArr[i] = fiboArr[i - 1] + fiboArr[i - 2];
            if (n === fiboArr[i]) {
                console.log(true);
                break;
            } else console.log(false);
        }
}

function main() {
    let n = +prompt("");
    Fibonacci(n);
}

main();