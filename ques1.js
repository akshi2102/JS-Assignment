var L, R, K;
function q1_L() { L = prompt("Enter L:") * 1; }
function q1_R() { R = prompt("Enter R:") * 1; }
function q1_K() { K = prompt("Enter K:") * 1; }
function isPrime(n) {
    if (n < 2) return false;
    for (var i = 2; i < n; i++) if (n % i === 0) return false;
    return true;
}
function answer1() {
    var count = 0;
    for (var x = L; x <= R; x++) {
        if (x % K !== 0) continue;
        var digits = "" + x;
        var hasZero = false;
        for (var i = 0; i < digits.length; i++) if (digits.charAt(i) === "0") hasZero = true;
        if (hasZero) continue;
        var digitSum = 0;
        for (var i = 0; i < digits.length; i++) digitSum += digits.charAt(i) * 1;
        if (isPrime(digitSum)) count++;
    }
    alert(count);
}