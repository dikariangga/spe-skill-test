function partyOutlier(data) {
    var dt = data.filter(function (num) { return num % 2 === 0; });
    var odd = data.filter(function (num) { return num % 2 !== 0; });
    if (dt.length === 1) {
        return dt[0];
    }
    else if (dt.length <= 0 && odd.length >= 1) {
        return false;
    }
    else {
        return odd[0];
    }
}
console.log(partyOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(partyOutlier([160, 3, 1719, 19, 11, 13, -21]));
console.log(partyOutlier([11, 13, 15, 19, 9, 13, -21]));
