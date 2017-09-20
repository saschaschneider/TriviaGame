var playtime; // the time to answer each question
var timer;
var timeout = false; // timeout = true, if the timer hit 0
var clickCounter;
var gameScore;
var timeout;
var questions = [
"Which country is a neighbor of Germany?", 
"What is another word for lexicon",
"What is the seventh planet from the sun", 
"What is 200+22+22*2-2+3*2?", 
"Which ocean is the world's largest ocean?",
"In which country is Prague in?",
"Which, if any, bulbs were once exchanged as a form of currency?", 
"When did India host its first Formula one race?", 
"What does 'piano' stand for?", 
"What colour is Absynthe?"];

var answers = [
["United Kingdom", "Lithuania", "Luxembourg", "Ireland"],
["Dictionary", " Vocabulary", "Thesaurus", "Glossary"],
["Jupitor", "Uranus", "Saturn", "Neptune"],
["270", "6" ,"978" ,"231"],
["Atlantic", "Pacific", "Indian Ocean", "Southern Ocean", "Arctic Ocean"],
["Mexico", "Japan", "Luxembourg", "Czech Republic"],
["Lily", "Anemone", "Rose", "Tulip"],
["2011", "2005", "1995", "India did never host a Forumla 1 race"],
["Wooden case", "Soundboard", "Playing softly", "Keyboard"],
["Green", "Orange", "Blue", "Purple"]];

var solutions = ["Luxembourg","Dictionary","Uranus","270","Pacific","Czech Republic","Tulip","2011","Playing softly","Green"];

var randomNumberArray = [];
while (randomNumberArray.length < 10) {
    var randomNumber = Math.floor(Math.random() * 10)
    if (randomNumberArray.indexOf(randomNumber) > -1) continue;
    randomNumberArray[randomNumberArray.length] = randomNumber;
}



var randomNA = randomNumberArray;
gameScore = 0;

console.log("Random = " + randomNumberArray);

$("#buttonHit").on("click", function() {
    playtime = 60 * 0.5;
    display = document.querySelector('#time');
    startTimer(playtime, display);
    $("#question").html(questions[randomNA[0]]);
    $("#answer1").html(answers[randomNA[0]][0]);
    $("#answer2").html(answers[randomNA[0]][1]);
    $("#answer3").html(answers[randomNA[0]][2]);
    $("#answer4").html(answers[randomNA[0]][3]);
    $("#buttonHit").prop('disabled', true);
    $("#buttonHit").html("Keep playing");
});



clickCounter = -1;


$(".answerBtn1").on("click", function() {
    var i = clickCounter + 1;
    clickCounter = clickCounter + 1;
    console.log("answerBtn1 " + i);
    console.log("answer " + answers[randomNA[i]][0]);
    console.log("solutions " + solutions[randomNA[i]]);


    if (answers[randomNA[i]][0] === solutions[randomNA[i]]) {
        $(".answerBtn1").css("background-color", "PaleGreen");
        $(".answerBtn1").css("opacity", "0.2");
        $(".answerBtn1").css("font-weight", "bold");
        gameScore = gameScore + 2;
        $(".gameScore").html(gameScore).css("color", "LawnGreen").css("font-size", "150px");
    } else {
        $(".answerBtn1").css("background-color", "LightCoral");
        $(".answerBtn1").css("opacity", "0.2");
        $(".answerBtn1").css("font-weight", "bold");
        if (gameScore >= 2) {gameScore = gameScore-2;} else {gameScore =0;}        
        $(".gameScore").html(gameScore).css("color", "red").css("font-size", "150px");        
    }

})

$(".answerBtn2").on("click", function() {
    var i = clickCounter + 1;
    clickCounter = clickCounter + 1;
    console.log("answerBtn2 " + i);
    console.log("answer " + answers[randomNA[i]][0]);
    console.log("solutions " + solutions[randomNA[i]]);


    if (answers[randomNA[i]][1] === solutions[randomNA[i]]) {
        $(".answerBtn2").css("background-color", "PaleGreen");
        $(".answerBtn2").css("opacity", "0.2");
        $(".answerBtn2").css("font-weight", "bold");
        gameScore = gameScore + 2;
        $(".gameScore").html(gameScore).css("color", "LawnGreen").css("font-size", "150px");
    } else {
        $(".answerBtn2").css("background-color", "LightCoral");
        $(".answerBtn2").css("opacity", "0.2");
        $(".answerBtn2").css("font-weight", "bold");
        if (gameScore >= 2) {gameScore = gameScore-2;} else {gameScore =0;}   
        $(".gameScore").html(gameScore).css("color", "red").css("font-size", "150px");

}})

$(".answerBtn3").on("click", function() {
    var i = clickCounter + 1;
    clickCounter = clickCounter + 1;
    console.log("answerBtn1 " + i);
    console.log("answer " + answers[randomNA[i]][2]);
    console.log("solutions " + solutions[randomNA[i]]);
    if (answers[randomNA[i]][2] === solutions[randomNA[i]]) {
        $(".answerBtn3").css("background-color", "PaleGreen");
        $(".answerBtn3").css("opacity", "0.5");
        $(".answerBtn3").css("font-weight", "bold");
        gameScore = gameScore + 2;
        $(".gameScore").html(gameScore).css("color", "LawnGreen").css("font-size", "150px");
    } else {
        $(".answerBtn3").css("background-color", "LightCoral");
        $(".answerBtn3").css("opacity", "0.2");
        $(".answerBtn3").css("font-weight", "bold");
        if (gameScore >= 2) {gameScore = gameScore-2;} else {gameScore =0;}   
        $(".gameScore").html(gameScore).css("color", "red").css("font-size", "150px");
    }

})

$(".answerBtn4").on("click", function() {
    var i = clickCounter + 1;
    clickCounter = clickCounter + 1;
    console.log("answerBtn1 " + i);
    console.log("answer " + answers[randomNA[i]][3]);
    console.log("solutions " + solutions[randomNA[i]]);
    if (answers[randomNA[i]][3] === solutions[randomNA[i]]) {
        $(".answerBtn4").css("background-color", "PaleGreen");
        $(".answerBtn4").css("opacity", "0.5");
        $(".answerBtn4").css("font-weight", "bold");
        gameScore = gameScore + 2;
        $(".gameScore").html(gameScore).css("color", "LawnGreen").css("font-size", "150px");
    } else {
        $(".answerBtn4").css("background-color", "LightCoral");
        $(".answerBtn4").css("opacity", "0.2");
        $(".answerBtn4").css("font-weight", "bold");
        if (gameScore >= 2) {gameScore = gameScore-2;} else {gameScore =0;}   
        $(".gameScore").html(gameScore).css("color", "red").css("font-size", "150px");
    }

})


$(".answerBtn").on("click", function() {
    var i = clickCounter + 1;
    console.log("clicks " +clickCounter);



    if ( clickCounter < 9 ) {

    setTimeout(function() {

        $(".question").html(questions[randomNA[i]]);
        $(".answerBtn1").html(answers[randomNA[i]][0]);
        $(".answerBtn1").css("background-color", "white");
        $(".answerBtn1").css("opacity", "1");
        $(".answerBtn1").css("font-weight", "normal");
        $(".answerBtn2").html(answers[randomNA[i]][1]);
        $(".answerBtn2").css("background-color", "white");
        $(".answerBtn2").css("opacity", "1");
        $(".answerBtn2").css("font-weight", "normal");
        $(".answerBtn3").html(answers[randomNA[i]][2]);
        $(".answerBtn3").css("background-color", "white");
        $(".answerBtn3").css("opacity", "1");
        $(".answerBtn3").css("font-weight", "normal");
        $(".answerBtn4").html(answers[randomNA[i]][3]);
        $(".answerBtn4").css("background-color", "white");
        $(".answerBtn4").css("opacity", "1");
        $(".answerBtn4").css("font-weight", "normal");

        $(".gameScore").html(gameScore).css("color", "black");
     }, 1000);
}})

$(".answerBtn").on("click", function() {
    var i = clickCounter + 1;

    setTimeout(function() {

        $(".gameScore").html(gameScore).css("color", "black").css("font-size", "100%");

    }, 250);
})

function startTimer(duration, display) {

    var timer = duration;
    var minutes;
    var seconds;

    var timerFunction = setInterval(function() {

        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        if (minutes < 10) {
            minutes = "0" + minutes;
        } else { minutes = minutes }


        if (seconds < 10) {
            seconds = "0" + seconds;
        } else { seconds = seconds }

        display.textContent = minutes + ":" + seconds;

        if (timer === -1) {
            $("#time").html("00:00");
            timeout = true;
            // console.log("timeout if " + timeout);
            clearInterval(timerFunction);
        } else {
            timer = --timer;
            // console.log("timer " + timer);
        }

        // console.log("outside timeout " + timeout)

if ( timeout === true )
{ 
    $("#buttonHit").prop('disabled', false);
    $("#buttonHit").html("Play again");
    $(".gameScoreText").html("");

    if(gameScore === 20) {
        
        $(".gameScoreText").html("Wooow, you answered all questions correct!!");
    }

    else { 
        $(".gameScoreText").html("GameOver - you got " +gameScore + " out of 20 points");

    }

    $("#buttonHit").on("click", function() {
          location.reload();
})

}

    }, 1000);
}

console.log("time outside: " + timeout);






