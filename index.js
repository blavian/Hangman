const myWords = ["hello", "world", "ajax"];
let player = {};

const message = document.getElementsByClassName(".message");
const output1 = document.getElementsByClassName(".output1");
const output2= document.querySelector(".output2");
const btn = document.getElementById(button);


btn.addEventListener("click", event , ()=> {
myWords.sort(()=> {
    return .5 - Math.random();
});
let theWord = myWords.shift()
console.log(theWord)
})


