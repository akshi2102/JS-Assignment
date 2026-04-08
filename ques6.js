var q6A, q6B, q6C;
function a() { q6A = prompt("Enter a (correct):") * 1; }
function b() { q6B = prompt("Enter b (partial):") * 1; }
function c() { q6C = prompt("Enter c (wrong):") * 1; }
function answer6() {
    var score = 3 * q6A + q6B - 2 * q6C;
    if (score < 0) score = 0;
    if (q6A + q6B + q6C > 50) score -= 10;
    if (score < 0) score = 0;
    if (score >= 60) alert(score + ", PASS");
    else alert(score + ", FAIL");
}
