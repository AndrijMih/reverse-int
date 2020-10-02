module.exports = function reverse(n) {
    if (n >= 0) {
        return +(('' + n).split('').reverse().join(''));
    } else {
        n = n * (-1);
        return +(('' + n).split('').reverse().join(''));
    }
}
