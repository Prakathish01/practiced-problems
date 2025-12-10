class Solution {
    ReverseExponentiation(n) {
        // code here
        let rev = 0 ;
        let temp = n;
        while(temp>0){
            let digit = temp % 10 ;
            temp = Math.floor(temp/10);
            rev = rev*10 + digit;
        }
        return Math.pow(n,rev);
    }
}