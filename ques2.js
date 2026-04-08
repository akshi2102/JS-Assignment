var q2N, q2Seed;
function q2_n() { q2N = prompt("Enter N:") * 1; }
function q2_seed() { q2Seed = prompt("Enter Seed:") * 1; }
function answer2() {
    var current = q2N;
    for (var i = 0; i < 3; i++) {
        if (current % 2 === 0) current = current / 2 + q2Seed;
        else current = current * 3 - q2Seed;
    }
    var middle = Math.floor(current / 10) % 10;
    if (current >= 100 && current <= 999 && middle === q2Seed) alert("YES, " + current);
    else alert("NO, " + current);
}