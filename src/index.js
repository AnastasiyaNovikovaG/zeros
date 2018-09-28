module.exports = function getZerosCount(number) {
    // your implementation
    let count = 0, num=5;
    while(number >= num){
        count += Math.floor(number/num);
        num*=5;
    }
    return count;
}