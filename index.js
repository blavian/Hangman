window.addEventListener("DOMContentLoaded", (event) => {
  const myWords = ["hello", "world", "ajax"];
  let player = {};
  const message = document.querySelector(".message");
  const output1 = document.querySelector(".output1");
  const output2 = document.querySelector(".output2");
  const btn = document.querySelector("button");

  btn.addEventListener("click", function () {
    myWords.sort(function () {
      return 0.5 - Math.random();
    });
    let theWord = myWords.shift();
    console.log(theWord);
  });
});



        


