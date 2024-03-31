// This function generates an array of numbers between the two input values
function generateArrayBetweenNumbers(content1, content2) {
    // Initialize an empty array to store the result
    const result = [];
    // Determine the start and end values based on the input order
    const start = content1 < content2 ? content1 : content2;
    const end = content1 < content2 ? content2 : content1;


  // Loop from the start value to the end value and add each number to the result array
    for(let i = start; i <= end; i++){
            result.push(i)
    }
return result
}
// Test the function with input values -5 and 10
console.log(generateArrayBetweenNumbers(-5, 10));


