window.addEventListener("DOMContentLoaded", (event) => {
  const myWords = ["John", "Javascript"];
  let player = {};
  const message = document.querySelector(".message");
  const output1 = document.querySelector(".output1");
  const output2 = document.querySelector(".output2");
  const btn = document.querySelector("button");
  btn.addEventListener("click", function () {
    btn.style.display = 'none'
    myWords.sort(function () {
      return 0.5 - Math.random();
    });
    let theWord = myWords.shift();
    player.solution = theWord.split("");
    buildBoard();
    console.log(player.solution);
  });

  function buildBoard() {
    player.solution.forEach(function (letter) {
      let div = document.createElement("div");
      div.classList.add("letter2");
      div.innerText = "_";
      div.myLetter = letter;
      output2.appendChild(div);
    });
    let solutionLetter = document.querySelectorAll(".letter2")
    for(let i = 0; i < 26; i++){
      let temp =String.fromCharCode(65 + i);
      let div = document.createElement('div');
      div.classList.add('letter');
      div.myLetter = temp;
      let handler = function(e){
        div.removeEventListener('click', handler)
        div.classList.add('done')
        let counter = 0
        let guess = 0

        solutionLetter.forEach(function(letter){
          if(letter.innerHTML !="_"){
            counter++
          }
          if(letter.myLetter.toUpperCase()=== temp){
            letter.innerHTML = temp
          
            guess++
          }
        })
        if(guess >0) console.log(`you found ${guess} letters`)
      
      }
      div.addEventListener('click', handler);
      div.innerHTML = temp;
      output1.appendChild(div);
    }
  }
});
