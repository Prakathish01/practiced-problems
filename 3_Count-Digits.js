class Solution {
    // Function to check whether the number evenly divides n.
    evenlyDivides(n) {
        // code here
        let count = 0 ;
        let og = n;
        while(n >0){
            let digit = n % 10;
            n= Math.floor(n/10);
            
            if(digit !== 0 && ((og % digit) ===0)) count+=1;
        }
        return count;
    }
}