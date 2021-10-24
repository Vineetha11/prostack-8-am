//how to delete duplicate values in array===========

// let chars=["a","b","c","a","b"];
// let uniqueChars=[...new Set(chars)];
// console.log(uniqueChars);

//..................how to capitalize first letter

/*     let str="vineetha";
let str1=str.charAt(0).toUpperCase() + str.slice(1);
console.log(str1) */



//const arr=[29,40,43,90];
/*var max=arr.reduce(function(a,b){
    return (a > b) ? a : b;
});
console.log(max)*/
function findlongestWord(str) {
    const stringArray = str.split(" ");
    let longestword=0;
    for(i=0;i < strsplit.length;i++){
        if(strsplit[i].length>longestWord){
        longestWord=strsplit[i].length;
    }
}
return longestWord;
}
  findlongestWord("The quick brown fox jumped over the lazy dog");
  

