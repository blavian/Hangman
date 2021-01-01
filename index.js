window.addEventListener("DOMContentLoaded", (event) => {
  const myWords = ["John", "Javascript"];
  let player = {};
  const message = document.querySelector(".message");
  const output1 = document.querySelector(".output1");
  const output2 = document.querySelector(".output2");
  const btn = document.querySelector("button");
  btn.addEventListener("click", ()=>{
    output1.innerHTML = ''
    output2.innerHTML = ''
    if(myWords.length > 0){
    btn.style.display = 'none'
    myWords.sort( ()=> {
      return 0.5 - Math.random();
    });
    let theWord = myWords.shift();
    player.solution = theWord.split("");
    buildBoard();
    
  } else{
    message.style.color = 'black'
    message.innerHTML= ('no more words')
  }
  });

  function buildBoard() {
    player.solution.forEach((letter)=>{
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
      let handler = (e)=> {
        div.removeEventListener('click', handler)
        div.classList.add('done')
        let counter = 0
        let guess = 0
        let mes

        solutionLetter.forEach((letter)=> {
          if(letter.innerHTML !="_"){
            counter++
          }
          if(letter.myLetter.toUpperCase()=== temp){
            letter.innerHTML = temp
            guess++
          }
        })
        if(guess >0){
          let multiple = guess > 1 ? "times" :"time" 
          mes = `You found ${temp} letter ${guess} " " ${multiple} `
          message.style.color = 'green'
        } else{
          message.style.color = 'red'
          mes="Not found"
        } 
        //check how many letters are left
        let letterLeft = solutionLetter.length-(guess+ counter)
        message.innerHTML = mes + "<br>" + letterLeft + " letters left"
        if(letterLeft < 1) btn.style.display = "block"
      
      }
      div.addEventListener('click', handler);
      div.innerHTML = temp;
      output1.appendChild(div);
    }
  }
});
