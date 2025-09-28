// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function removeFirstCat() {
    return cats.slice(1);
}
console.log(cats)
console.log(removeFirstCat())


function removeLastCat() {
    return cats.slice(0, -1);
}
console.log(cats)
console.log(removeLastCat())

function destructivelyAppendCat(name) {
    cats.push("Ralph")
    return cats;
}
console.log(destructivelyAppendCat())


function destructivelyPrependCat(name) {
    cats.unshift("Bob")
    return cats;
}
console.log(destructivelyPrependCat())

function destructivelyRemoveLastCat(name) {
    cats.pop();
    return cats;

}
console.log(destructivelyRemoveLastCat())

function destructivelyRemoveFirstCat(name) {
    cats.shift();
    return cats;
}
console.log(destructivelyRemoveFirstCat())

function appendCat(name) {
    return [...cats, "Broom"];
}
appendCat()

function prependCat(name) {
    return ["Arnold", ...cats];
}
prependCat()

// function destructivelyRemoveFirstCat(name) {

//     return cats.slice(0, -1);
// }





