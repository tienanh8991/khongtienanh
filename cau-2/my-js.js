let arr = [1,2,3,4,5,6,7,8,9];
function tryRemoveFromArray(x) {
    x = +prompt(x);
    for (let i = 0 ; i < arr.length ; i++){
        if (x === arr[i]){
            arr.splice(i,1);
        }
    }
}
console.log(arr);
tryRemoveFromArray();