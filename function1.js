

function multiliar(multiliarIndex){

    let m = function (a){
        let c = a * multiliarIndex;
        return c;
    }
    return m;

}

let double = multiliar(2);
let triple = multiliar(3);
let fourth = multiliar(4);
let fifth = multiliar(5);

console.log(fourth(40));

