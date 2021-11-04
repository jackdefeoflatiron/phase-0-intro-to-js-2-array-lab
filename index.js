let cats = ["Milo", "Otis", "Garfield"]
function logCats(cats) {
    console.log("Cats", cats)
}
function destructivelyAppendCat() {
       cats.push("Ralph")
}
function destructivelyPrependCat(){
    cats.unshift("Bob",)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift(0)
}
function appendCat(){
    return [...cats,"Broom"]
}
function prependCat(){
    return ["Arnold",...cats]
}
function removeLastCat() {
    return cats.slice(0,2)
}
function  removeFirstCat(){
    return cats.slice(1,3)
}