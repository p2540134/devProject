var questionBank= [
    {
        question : 'The CRAB is in the ____.',
        option : ['plane','lab','cage','rain'],
        answer : 'lab'
    },
    {
        question : 'We WAVE from the ____.',
        option :  ['street', 'cave', 'drain', 'slums'],
        answer : 'cave'
    },
    {
        question : 'She PAID for the ____.',
        option : ['maid','mail','wood','hoof'],
        answer : 'maid'
    },
    {
        question : 'There is a BAT on the ____.',
        option : ['pig','hat','fan','tree'],
        answer : 'hat'
    },
    {
        question : 'Can we MEET near the ____.',
        option : ['street','shop','beach','court'],
        answer : 'street'
    }
  ]
  
  var question= document.getElementById('question');
  var quizContainer= document.getElementById('quiz-container');
  var scoreboard= document.getElementById('scoreboard');
  var option0= document.getElementById('option0');
  var option1= document.getElementById('option1');
  var option2= document.getElementById('option2');
  var option3= document.getElementById('option3');
  var next= document.querySelector('.next');
  var points= document.getElementById('score');
  var span= document.querySelectorAll('span');
  var i=0;
  var score= 0;
  
  //function to display questions
  function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
  }
  
  //function to calculate scores
  function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
  }
  
  //function to display next question
  function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
  }
  
  //click events to next button
  next.addEventListener('click',nextQuestion);
  
  //Back to Quiz button event
  function backToQuiz(){
    location.reload();
  }
  
  //function to check Answers
  function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
  }
  
  
  displayQuestion();