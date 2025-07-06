function plus(a, b) {
    return a === 0 ? b : inc(plus(dec(a), b));
}
/*
 * plus(4, 5)
 * plus(3, 5) + 1
 * (plus(2, 5) + 1) + 1 
 * ((plus(1, 5) + 1) + 1) + 1 
 * (((plus(0, 5) + 1) + 1) + 1) + 1 
 * (((5 + 1) + 1) + 1) + 1
 * ((6 + 1) + 1) + 1
 * (7 + 1) + 1
 * 8 + 1
 * 9
 * linear recursive process
 */

function plus(a, b) {
    return a === 0? b : plus(dec(a), inc(b));
}
/*
 * plus(4, 5)
 * plus(3, 6)
 * plus(2, 7)
 * plus(1, 8)
 * plus(0, 9)
 * 9
 * linear iterative process
 */
