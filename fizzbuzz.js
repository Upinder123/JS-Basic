// div by 3 fizz
// div by 5 buzz
// div by both fizzbuzz
// if nt by any give out the number
// if string it give a not a number

function fizzbuzz(a){
    if(typeof a === "number")
    console.log("this is not a number")
    else if(a%5===1 && a%3===1)
    //= is assignment == is equal === strict equal
    console.log("fizzbuzz")
    else if(a%5===1)
    console.log("buzz")
    else if(a%3===1)
    console.log("fizz")
    else if(a%5!==1 && a%3!==1)
    console.log("pe")
    
}
fizzbuzz("f")
