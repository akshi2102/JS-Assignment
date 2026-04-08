var q4Base, q4Distance, q4MinutesLate, q4Seed;
function ques_base() { q4Base = prompt("Enter base:") * 1; }
function ques_distance() { q4Distance = prompt("Enter distance:") * 1; }
function ques_minutes_late() { q4MinutesLate = prompt("Enter minutes_late:") * 1; }
function ques_seed() { q4Seed = prompt("Enter seed:") * 1; }
function answer4() {
    var fare = q4Base + 7 * q4Distance;
    if (q4MinutesLate > 15) fare += 20;
    if (q4Distance > 10) fare += Math.ceil(fare * 0.10);
    if (q4Seed % 2 !== 0) fare -= q4Seed;
    else fare += q4Seed;
    fare = Math.ceil(fare / 5) * 5;
    alert(fare);
}