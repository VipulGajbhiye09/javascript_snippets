function fibonacciGenerator (n) {
    var output = [];
    var n1 = -1;
    var n2 = 1;
    var sum = 0;  

    for(var i=0; i<n; i++){       
        sum = n1 + n2;
        output.push(sum);
        n1 = n2;
        n2 = sum;
    }
    return output;
}

console.log(fibonacciGenerator(8));