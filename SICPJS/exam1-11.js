function recursive(n) {
    return n <= 3
    ? n
    : recursive(n-1)
    + 2*recursive(n-2)
    + 3*recursive(n-3);
}

function iterative(n) {
    return iter(3, 2, 1, 0, n);
}

/*
 * 0 -> 0
 * 1 -> 1
 * 2 -> 2
 * 3 -> 3
 * 4 -> 1 + 2*2 + 3*3
 */
function iter(a, b, count) {
    return count === 0
    ? 
}

console.log(recursive(10));
console.log(iterative(10));
