var q3N, q3K;
function q3_n() { q3N = prompt("Enter N:") * 1; }
function q3_k() { q3K = prompt("Enter K:") * 1; }
function answer3() {
    var result = -1;
    for (var x = 0; x <= 100000; x++) {
        var num = q3N + x;
        if (num % q3K !== 0) continue;
        var s = "" + num;
        if (s === s.split("").reverse().join("")) { result = x; break; }
    }
    alert(result);
}