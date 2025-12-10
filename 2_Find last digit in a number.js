class Solution {
    getLastDigit(a, b) {
        // code here
        if(b == "0") return 1;
        let d = parseInt(a[a.length - 1],10);
        if([0,1,5,6].includes(d)) return d;
        
        let bMod = parseInt(b.slice(-2),10)%4;
        if (bMod ===0) bMod =4;
        
        let cycles = {
            2:[2,4,8,6],
            3:[3,9,7,1],
            4:[4,6],
            7:[7,9,3,1],
            8:[8,4,2,6],
            9:[9,1]
        }
        const cycle = cycles[d];
        const index = [bMod-1] % cycle.length;
        return cycle[index];
    }
}