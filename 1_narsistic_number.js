function narcissistic(num) {
    var split = num.toString().split('');
    var length = split.length;
    var total = 0;
    split.forEach(function (i) {
        total += Math.pow(i, length);
    });
    if (num == total) {
        return true;
    }
    else {
        return false;
    }
}
console.log('Example using number 153 and 111');
console.log('153 : ', narcissistic(153));
console.log('111 : ', narcissistic(111));
