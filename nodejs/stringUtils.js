function capitalizeString(text){
    return text.toUpperCase();

}
function reverseString(text){
    let arr=text.split("");
    arr.reverse();
    return arr.join("");
}
function countVowelsInString(text){
    let vowelcount=0;
    let vowelletters="aeiouAEIOU";

    for(let i=0;i<text.length;i++){
        if(vowelletters.includes(text[i])){
            vowelcount++;
        }
    }
    return vowelcount;
}
module.exports={capitalizeString,reverseString,countVowelsInString};