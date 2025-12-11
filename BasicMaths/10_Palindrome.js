class Solution {
    isPalindrome(n) {
        // code here
        if(n >= 1 && n < 10){
            return true;
        }
        let temp = n;
        let ans = 0;
        while(temp >0){
            let digit = temp % 10;
            ans = ans*10 + digit;
            temp = (temp / 10) | 0;
        }
        return ans === n;
    }
}