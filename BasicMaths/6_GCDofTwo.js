class Solution {
    gcd(a, b) {
        // code here
        while(b !== 0){
            let rem = a % b;
            a = b;
            b = rem;
            
        }
        return a;
    }
}