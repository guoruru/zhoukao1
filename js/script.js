//1.编写一段数组去重代码要求至少使用两种方法
var arr = [1,2,3,5,4,3,2,1,5,7,8,9,0];
var brr = [];
var newbrr = [];
for (var i = 0; i < arr.length; i++) {
    if (brr.indexOf(arr[i]) === -1) {
        brr.push(arr[i]);
    }
}
console.log(brr)
for (var i = arr.length-1; i > 0; i--) {
    if (newbrr.indexOf(arr[i]) === -1) {
        newbrr.unshift(arr[i])
    }
}
console.log(newbrr);