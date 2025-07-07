function cube_iter(guess, x) {
    return is_good_enough(guess, x)
    ? guess
    : cube_iter(improve(guess, x), x);
}

function is_good_enough(guess, x) {
    return abs(cube(guess) - x) < 0.001;
}

function abs(x) {
    return x >= 0 ? x : -x;
}

function improve(guess, x) {
    return ((guess/(x ** 2)) + 2*x)/3;
}

function cube(x) {
    return x ** 3;
}

cube_iter(1, process.argv[2]);
