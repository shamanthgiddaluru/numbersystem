const numbers = [ 3,7,2,15,9,20,5,12,1,8,6,19,10];

function printEvenOdd (arr) {
    const even = [];
    const odd = [];
    arr.forEach ( num => {
        if (num % 2 === 0){
            even.push(num);
        }else {
            odd.push(num);
        }
    });
    console.log("Even:",even);
    console.log("Odd:",odd);
}

printEvenOdd(numbers);