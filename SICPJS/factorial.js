// linear recursive process
function factorial(n) {
    return n === 1
    ? 1
    : n * factorial(n - 1);
}

// linear iterative process
function factorial2(n) {
    return fact_iter(1, 1, n);
}

function fact_iter(product, counter, max_count) {
    return counter > max_count
    ? product
    : fact_iter(product * counter, counter + 1, max_count);
}

// linear iterative process with block scope
function factorial3(n) {
    function iter(product, counter) {
        return counter > n
        ? product
        : iter(counter * product,
            counter + 1);
    }
    return iter(1, 1);
}

console.log(factorial(process.argv[2]));
console.log(factorial2(process.argv[2]));
console.log(factorial3(process.argv[2]));
