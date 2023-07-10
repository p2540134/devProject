var questionBank= [
    {
        question : 'Which two words start with the same sound?',
        words : 'lock. lip. bun. can',
        option : ['lock, lip','lock, bun','can, lock','bun, lip'],
        answer : 'lock, lip'
    },
    {
        question : 'Which two words start with the same sound?',
        words : 'tan. pen. tug. cut',
        option :  ['tan, pen', 'tug, pen', 'tan, tug', 'cut, tug'],
        answer : 'tan, tug'
    },
    {
        question : 'Which two words start with the same sound?',
        words : 'bed. tag. bus. peg',
        option : ['bed, tag','peg, bed','tag, bus','bed, bus'],
        answer : 'bed, bus'
    },
    {
        question : 'Which two words start with the same sound?',
        words : 'hop. hat. web. ledge',
        option : ['hop, web','hop, hat','hat, ledge','web, ledge'],
        answer : 'hop, hat'
    },
    {
        question : 'Which two words start with the same sound?',
        words : 'jam. nap. jet. bet',
        option : ['jam, jet','jam, nap','nap, bet','jet, bet'],
        answer : 'jam, jet'
    }
  ]
  
  var question= document.getElementById('question');
  var words = document.getElementById('words');
  var ken = document.getElementById('ken')
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

  //text to speech box
  const textarea = document.querySelector("textarea"),
  speechBtn = document.getElementById("speech");
  
  function textToSpeech(text){
    let utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance); //speak the word
  }

  ken.addEventListener('click', e => {
    textToSpeech(words.innerHTML);
  })

  speechBtn.addEventListener("click", e =>{
    e.preventDefault();
    if(textarea.value == ""){
        alert("Enter word to speak");
    }else if(textarea.value.length > 10){
        alert("Max 10 characters");
    }else{
        textToSpeech(textarea.value);
    }
  });
  
  //function to display questions
  function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    words.innerHTML = questionBank[i].words;
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

