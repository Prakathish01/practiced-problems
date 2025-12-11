class Solution {
    reverseDigits(n) {
        // code here
        let og = n;
        let ans = 0;
        while(n>0){
            let digit = n % 10;
            n = Math.floor(n/10);
            ans = ans*10 + digit;
        }
        return ans;
    }
}