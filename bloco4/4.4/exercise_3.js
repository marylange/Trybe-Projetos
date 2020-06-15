const maiorNum = (a, b, c) => {
    if(a > b && a > c) {
        return 'O número maior é A: ' + a;
    } else if (b > a && b > c) {
        return 'O número maior é B: ' + b;
    } else {
        return 'O número maior é C: ' + c;
    }
}

console.log(maiorNum(2, 20, 1));