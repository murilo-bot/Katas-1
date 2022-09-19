// KATAS 1 - Reverse String

function testeReverseString1() {           
    let expected = "eizneK";   
    console.assert(reverseString("Kenzie") === expected, "O teste falhou")     
}

function testeReverseString2() {           
    let expected = "ymedacA";   
    console.assert(reverseString("Academy") === expected, "O teste falhou")     
}

function reverseString(str){    
    let newStr = str.split("").reverse().join("")    
    return newStr
}
testeReverseString1()
testeReverseString2()

// KATAS 2 - Reverse String

function testReverseSentence1() {           
    let expected = "bob likes dogs";   
    console.assert(reverseSentence("dogs likes bob") === expected, "O teste falhou")     
}

function testReverseSentence2() {           
    let expected = "Brasil Academy Kenzie";   
    console.assert(reverseSentence("Kenzie Academy Brasil") === expected, "O teste falhou")     
}

function reverseSentence(str){ 

    let newStr = str.split(" ").reverse().join(" ")
    return newStr
}

testReverseSentence1()
testReverseSentence2()

// KATAS 3 - Minimum Value

function testMinimumValue1() {           
    let expected = 1;   
    console.assert(minimumValue([3,5,7,65,1]) === expected, "O teste falhou")     
}

function testMinimumValue2() {           
    let expected = 0;   
    console.assert(minimumValue([0,5,3,9,1]) === expected, "O teste falhou")     
}

function minimumValue(arr){ 

    let newArr = arr.sort((a,b) => a - b)
    return newArr[0]
}

function ordemNumeros(a,b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
}

testMinimumValue1()
testMinimumValue2()


// KATAS 4 - Maximum Value

function testMaximumValue1() {           
    let expected = 65;   
    console.assert(maximumValue([3,5,7,65,1]) === expected, "O teste falhou")     
}

function testMaximumValue2() {           
    let expected = 299;   
    console.assert(maximumValue([57,3,7,65,299]) === expected, "O teste falhou")     
}

function maximumValue(arr){ 

    let newArr = arr.sort((a,b) => b - a)
    return newArr[0]
}

testMaximumValue1()
testMaximumValue2()

// KATAS 5 - Calcular  Remainder

function testCalculateRemainder1() {           
    let expected = 2;   
    console.assert(calculateRemainder(8,3) === expected, "O teste falhou")     
}

function testCalculateRemainder2() {           
    let expected = 0;   
    console.assert(calculateRemainder(12,3) === expected, "O teste falhou")     
}

function calculateRemainder(a,b){ 

    return a % b
}

testCalculateRemainder1()
testCalculateRemainder2()

// KATAS 6 - Distinct Values

function testDistinctValues1() {           
    let expected = "1 3 5 7";   
    console.assert(distinctValues("1 3 5 3 7 3 1 1 5") === expected, "O teste falhou")     
}

function testDistinctValues2() {           
    let expected = "4 5 6 9";   
    console.assert(distinctValues("5 9 4 5 6 9 4 4 5") === expected, "O teste falhou")     
}

function distinctValues(str){ 
        
    let arr = str.split(" ").sort((a,b) => a - b)
    let newArr = arr.filter((teste, i) => arr.indexOf(teste) === i )     
            
    return newArr.join(" ")
}

testDistinctValues1()
testDistinctValues2()

// KATAS 7 - Count Values

function testCountValues1() {           
    let expected = "1(3) 3(3) 5(2) 7(1)";   
    console.assert(countValues("1 3 5 3 7 3 1 1 5") === expected, "O teste falhou")     
}

function testCountValues2() {           
    let expected = "1(1) 3(2) 5(1) 7(2) 8(3)";   
    console.assert(countValues("8 3 5 8 7 3 8 1 7") === expected, "O teste falhou")     
}

function countValues(str){ 
        
    let arr = str.split(" ").sort((a,b) => a - b)
    let contador = {};
    arr.forEach(function(x) {contador[x] = (contador[x] || 0)+1;});   
            
    return Object.entries(contador).map((item) => `${item[0]}\(${item[1]}\)`).join(" ")
}

testCountValues1()
testCountValues2()