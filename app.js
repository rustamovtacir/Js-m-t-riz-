// Bir arrayimiz və bir targetimiz olsun, 
// istifadəçi targeti daxil edir, Array daxilində hər hansı 2 elementin cəmi bu targetə bərabər olarsa, bu elementlərin indexini qaytarın, 
// əks halda, alınmadı yazılsın.Link: https://leetcode.com/problems/two-sum/description/
// let h1 = document.querySelector('h1');
// let arry = [2, 7, 11, 15];
// let target = 9;
// let İsBool = true
// while (İsBool) {
//     if (arry[0] + arry[1] === target) {
//         h1.innerHTML = `Array daxilindəki ${arry[0]} və ${arry[1]} elementlərinin cəmi ${target} bərabərdir. Indexləri: 0 və 1`;
//     }
//     else {
//         h1.innerHTML = 'Alınmadı';
//     }
//     İsBool = false;
// }

// ()()() - true, () - true, )( - false, (() - false. İstifadəçi mötərizə daxil edir, bu mötərizələrin doğru düzülüb düzülmədiklərini yoxlayın,
//  stack-i araşdırın köməyi ola bilər, və ya push və pop methodlarını. Link: https://leetcode.com/problems/valid-parentheses/
let str = prompt("Mötərizələri daxil edin:");
let arr = [];
let i = 0;
let bool = true;
h2 = document.querySelector('h2');
while (i < str.length) {
    if (str[i] === "(") {
        arr.push(str[i]);
    } else if (str[i] === ")") {
        if (arr.length === 0) {
            bool = false;
            break;
        }
        arr.pop();
    }

    i++;
}

if (arr.length !== 0) {
    bool = false;
}

h2.innerHTML = bool ? "Mötərizələr doğru düzülüb" : "Mötərizələr düzgün deyil";