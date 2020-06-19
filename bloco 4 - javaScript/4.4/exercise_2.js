const maiorNum = (a, b) => {
    if(a > b) {
        return 'O número maior é A: ' + a;
    } else {
        return 'O número maior é B: ' + b;
    }
}
console.log(maiorNum(7, 10));