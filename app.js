const numbers = [ 3,7,2,15,9,20,5,12,1,8,6,19,10];

function isPrime(num) {
    if(num <= 1) return false;
    for (let i=2; i<= Math.sqrt(num); i++){
        if (num % i === 0) return false;
    }
    return true;
}

function findPrime(arr) {
    const primeNumbers = arr.filter(isPrime);
    console.log(primeNumbers);

    const primeArray = primeNumbers;
    const  maxPrime = Math.max(...primeArray);
    const minPrime = Math.min(...primeArray);
    const sumPrime = primeArray.reduce((acc, curr) => acc+curr, 0);

    
    console.log(maxPrime);
    console.log(minPrime);
    console.log(sumPrime);
}

findPrime(numbers);