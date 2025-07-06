function fib(n) {
    return n === 0
    ? 0
    : n === 1
    ? 1
    : fib(n - 1) + fib(n - 2);
}

function fib2(n) {
    return fib_iter(1, 0, n)
}

function fib_iter(a, b, count) {
    return count === 0
    ? b
    : fib_iter(a + b, a, count - 1);
}

function fib3(n) {
    pi = (1 + 5 ** 0.5)/2;
    return Math.round((pi ** n)/(5 ** 0.5));
}

[...Array(11).keys()].forEach(i => console.log(fib(i)));
fib = fib3;
[...Array(11).keys()].forEach(i => console.log(fib(i)));
