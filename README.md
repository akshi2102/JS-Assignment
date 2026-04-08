# JS-Assignment
# JS-Assignment


Q1-Digit Gatekeeper
# Approach:
Loop from L to R, for each number check three conditions:
1. Divisible by K using modulo operator
2. Does not contain digit 0 by converting number to string and checking each character
3. Sum of digits is prime by adding each digit and checking primality with a loop
Count all numbers that satisfy all three conditions.

Q2-Roll-Seed Lock
# Approach:
Apply the transformation exactly 3 times using a for loop.
If current number is even, apply current/2 + seed, else apply current*3 - seed.
After 3 steps, check if result is between 100-999 and middle digit equals seed.

Q3-Mirror Corridor
# Approach:
Loop X from 0 to 100000, for each X compute N+X.
Check if N+X is divisible by K using modulo.
Check if N+X is a palindrome by converting to string, splitting into array,
reversing it and joining back, then comparing with original string.
Print the first X that satisfies both conditions, or -1 if none found.

Q4-Fare Calculator
# Approach:
Compute fare step by step:
1. Start with base + 7 * distance
2. If minutesLate > 15, add 20
3. If distance > 10, add ceil(10% of fare)
4. If seed is odd subtract seed, otherwise add seed
5. Round up to nearest multiple of 5 using Math.ceil

Q5-Skipping Numbers
# Approach:
Use a while loop, keep adding numbers from 1 upward to a running sum,
skipping any number divisible by (seed+2) using modulo.
Stop when sum first reaches at least N.
Print the current value of m and the sum.


Q6-Contest Score Judge
# Approach:
Compute score = 3a + b - 2c.
If score is negative, set it to 0.
If a+b+c > 50, subtract 10 from score.
If score goes negative again, set to 0.
Print PASS if score >= 60, otherwise FAIL.
