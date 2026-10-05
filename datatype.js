
// Number
//let a = parseInt("x34abcd12");
//console.log(typeof a);
//console.log(a)

// let a = Number.MAX_SAFE_INTEGER;
// console.log(a);

// let b = 9007199254740991;
// let c = b + 10;
// console.log(c);


// // bigint

// let j = 13438374073840723984704239573409872304958702398573409873240598734098374095672340987564302987534098750349875034298570295870234958734205987342058732409743059874320587342095870324987543881n

// let k = BigInt(327864238647823678432682367); 

// j = j + 5n
// console.log(j);

// 0, false, "", NaN, null, undefined

// let j =Boolean(parseInt("10px"));
// console.log(j);
// start1 = 400
// end = 1500
// range = end - start1
// console.log(start1 + parseInt(Math.random() * range))

// 1 - 100

alphabetList = "abcdefghijklnopqrstuvwxyz0123456789";
rStr = "";
for(let i = 1; i <= 10 ; i++){
    let ch = alphabetList[parseInt(Math.random() * alphabetList.length)];
    rStr = rStr + ch;
}
console.log(rStr);
