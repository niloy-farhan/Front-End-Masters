function createFunction() {
    function multiplyBy2(num) {
        return num * 2;
    }
    return multiplyBy2; // Return the function without calling it
}

const generateFunc = createFunction();
const result = generateFunc(3);

console.log(result);