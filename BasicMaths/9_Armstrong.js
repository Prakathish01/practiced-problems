class Solution {
    armstrongNumber(n) {
        let temp = n;
        let ans = 0;

        while (temp > 0) {
            let digit = temp % 10;      // extract last digit
            ans = ans + Math.pow(digit, 3); // cube it
            temp = Math.floor(temp / 10);   // remove last digit
        }

        return ans === n;  // true if Armstrong
    }
}
