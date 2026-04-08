var q5N, q5Seed;
function q5_N() { q5N = prompt("Enter N:") * 1; }
function q5_seed() { q5Seed = prompt("Enter seed:") * 1; }
function answer5() {
    var skip = q5Seed + 2, sum = 0, m = 0;
    while (sum < q5N) { m++; if (m % skip !== 0) sum += m; }
    alert("m = " + m + ", sum = " + sum);
}
