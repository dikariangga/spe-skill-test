function findIndexNeedle(a: any, b: any) {
    let index = 0

    a.forEach((i: any) => {
        if (b == i) {
            console.log(i)
        }
        
        index += 1
    })
}

findIndexNeedle(["red","blue", "yellow", "black", "grey"], "blue")