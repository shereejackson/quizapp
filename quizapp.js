function myQuiz(){
  var score = 0;

  if(prompt("What is 5 + 6? 1) 12 or 2) 7 or 3) 11")){
    if(document.getElementById('result') == "11"){
      score++}

  }

  if(prompt("What is 12 + 12? 1) 24 or 2) 56 or 3) 2")){
    if(document.getElementById('result') == "24"){
      score++}
  }

  if(prompt("What is 3 + 3? 1) 12 or 2) 5 or 3) 6")){
    if(document.getElementById('result') == "6"){
      score++}
  }

  if(prompt("What is 1 + 1? 1) 2 or 2) 4 or 3) 8")){
    if(document.getElementById('result') == "2"){
      score++}
  }

  if(prompt("What is 15 + 10? 1) 7 or 2) 25 or 3) 9")){
    if(document.getElementById('result') == "25"){
      score++}
  }

  prompt("Your Score is" + score);
}
