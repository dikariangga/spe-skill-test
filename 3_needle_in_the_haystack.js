function findIndexNeedle(a, b) {
    var index = 0;
    a.forEach(function (i) {
        if (b == i) {
            console.log(i);
        }
        index += 1;
    });
}
findIndexNeedle(["red", "blue", "yellow", "black", "grey"], "blue");
