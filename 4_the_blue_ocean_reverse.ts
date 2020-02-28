function blueOceanReverse(a: any, b: any) {
    let x = [];

    a.forEach((i: any) => {
        if (i != b[0]) {
            x.push(i)
        }
    })

    console.log(x)
}

blueOceanReverse([1, 2, 3, 4, 6, 10], [1])
blueOceanReverse([1, 5, 5, 5, 5, 3], [5])