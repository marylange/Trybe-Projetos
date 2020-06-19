

// function verificaPalindrome(str){
//     for(let i = 0; i < str.length; i++){
//         console.log(str[i])
//         for(let j = 0; j < str.length -1; j++){
//             console.log(str[j])
//             if(str[i] == str[j]){
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//     }
// }
function verificaPalindrome(str){
    let palin = false
    for(let i = 0; i < str.length; i++){
        console.log(str[i])
        for(let j = str.length-1; j >= 0; j--){
            console.log(str[j])
            if(str[i] == str[j]){
                palin = true
            } else {
                palin = false
            }
        }
    }
    return palin
}
console.log(verificaPalindrome("arara"));