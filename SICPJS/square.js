function sqrt_iter(guess, x) {
    return is_good_enough(guess, x)
    ? guess
    : sqrt_iter(improve(guess, x), x);
}

function sqrt_iter2(guess, x) {
    return conditional(is_good_enough(guess, x),
        guess,
        sqrt_iter2(improve(guess, x),
        x));
}

function conditional(predicate, then_clause, else_clause)
{
    return predicate ? then_clause : else_clause;
}

function improve(guess, x) {
    return average(guess, x / guess);
}

function average(x, y) {
    return (x + y) / 2;
}


function is_good_enough(guess, x) {
    return abs(square(guess) - x) < 0.001;
}

function abs(x) {
    return x >= 0 ? x : -x;
}

function square(x) {
    return x ** 2;
}

console.log(sqrt_iter(1, process.argv[2]));
//console.log(sqrt_iter2(1, process.argv[2]));
