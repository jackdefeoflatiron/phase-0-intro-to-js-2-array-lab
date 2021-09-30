const cats = ["Milo", "Otis", "Garfield"]
function logCats(cats) {
    console.log("Cats", cats)
}
function destructivelyAppendCat() {
       cats.push("Ralph")
}
function destructivelyPrependCat(){
    cats.splice(0,"Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop(0)
}
function destructivelyRemoveFirstCat(){
    cats.shift(0)
}
function appendCat(){
    cats.splice(0,"Broom")
}
function prependCat(){
    cats.splice(0,"Arnold")
}
function removeLastCat() {
    cats.pop(0)
}
function  removeFirstCat(){
    cats.shift(0)
}