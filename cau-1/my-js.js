let testScore = [9 , 10 , 8 , 6 ,7];
let max = 0 ;
function findMax() {
for (let i = 0 ; i < testScore.length ; i ++ ){
    if (max < i ){
        max = testScore[i];
    }
}
console.log(max);
}
findMax();