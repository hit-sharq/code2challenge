function primeNumbers(content) {
//1 is not a prime number so!
if (content <= 1) {
    return false;
}
//we check the square roots of the contents
for (let i = 2;i <= Math.sqrt(content); i++){
    if (content % i === 0) {
        return false;
    }
}
return true;
}
function Numbers(content1) {
    const primes = content1.filter(content => primeNumbers(content))
    return primes;
}
                                                                                                                                                                                                                                                                            
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(primeNumbers(input))