// Write your solution here!
const cats= ['Milo', 'Otis', 'Garfield']
//const catsTwo= ['neyser', 'anthony', 'eros']

function destructivelyAppendCat(name){
   return  cats.push(name);
}

function destructivelyPrependCat(name){
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

    const cats2 = [...cats];
function appendCat(name){
    cats2.push(name)
    return cats2;
 }

    const cats3 = [...cats];
 function prependCat(name){
    cats3.unshift(name);
    return cats3;
}

const cats4 =[...cats]
function removeLastCat(){
    cats4.pop();
    return cats4;
}

const cats5 = [...cats]
function removeFirstCat(){
    cats5.shift();
    return cats5;
}