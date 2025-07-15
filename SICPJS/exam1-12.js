function combination(n, r) {
    return r === 1
    ? 1
    : n === r
    ? 1
    :combination(n - 1, r - 1)
    + combination(n - 1, r);
}

console.log(combination(5, 3));
