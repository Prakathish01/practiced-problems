class Solution {
    floorSqrt(n) {
        // code here
        let low =1;
        let high = n;
        let ans = 0;
        while(low <= high){
            let mid = low + ((high - low) >> 1);
            if(mid * mid === n){
                return mid;
            }
            if(mid * mid < n){
                ans = mid;
                low = mid +1;
                
            }else{
                high = mid -1;
            }
        }
        return ans;
    }
}