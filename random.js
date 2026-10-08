

function randomGenerator(sample, chars){
    let m = function  (){
        let randomString = "";
        for(let i = 0 ; i < sample.length; i++){
            let ch = sample[i];
            if(ch == "#"){
                let index = Math.floor(Math.random() * chars.length);
                randomString = randomString + chars[index];
            }else{
                randomString = randomString + ch;
            }
        }
        return randomString;
    }
    return m;
}

let number_only_random_generator = randomGenerator("+1-(###)(###)(####)","1234567890");
let random_credit_card_generator = randomGenerator("#### #### #### ####","1234567890");
// let vowel_only_random_generator = randomGenerator("aeiou");
// let my_only_random_generator = randomGenerator("VAIBHAV");

for(let i = 1 ; i< 10; i++){
console.log(random_credit_card_generator());
}

// +1-(123)(234)(3432)