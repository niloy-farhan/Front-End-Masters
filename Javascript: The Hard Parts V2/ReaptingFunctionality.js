function copyMyArrayAndDivideBy2(array) {
    let output = [];
    for (let i = 0; i < array.length; i++){
        output.push(array[i]/2);
    }
    return output;
}

const myArray = [1, 2, 3, 4];
const result = copyMyArrayAndDivideBy2(myArray)
console.log(result)
