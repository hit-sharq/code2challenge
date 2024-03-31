function swapCharacter(input) {
    let output = '';
    // for looping through the characters
for (let i= 0; i < input.length; i++) {
    const char = input[i];
    // check the if the characters are capitalised
if (char === char.toUpperCase()){
    output += char.toLowerCase();
}else{
    output += char.toUpperCase();
}
}
return output;
}
  // Test the function with an example input
 const input = 'my NAME is JOshuA'
 const output = swapCharacter(input);
 console.log(output)



















