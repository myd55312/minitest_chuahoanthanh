function factorial(n) {
    let num: string;
    num = prompt("Nhập vào 1 số bất kì để tính ra giai thừa của số đó");
    let factorialResult = 1;
    if (n<0){
        factorialResult = null;
    } else let Result;
    let Result;
    if (n !== 0) {
        for (let i = 0; i < n; i++) {
            Result = Result * i
        }
    } else {
        return 1;
    }
    document.getElementById("result-2").innerHTML = Result;
}