$(document).ready(function () {

    function initialScreen() {
        startScreen = "<p class='text-center text-dark main-button-container'><a class='btn btn-warning btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
        $(".mainBlock").html(startScreen);
    }

    initialScreen();

    $("body").on("click", ".start-button", function(event) {
		event.preventDefault();

        generateHTML();

        timerWrapper();
    
}); // Close the start button

$("body").on("click",".answer", function(event){

    selectedAnswer = $(this).text();
    if(selectedAnswer === correctAnswers [questionCounter]) {

        clearInterval(theClock);
        generateWin();
    }
    else{
        clearInterval(theClock);
        generateLoss();
    }
}); // close answer

$("body").on("click",".reset-button", function(event){

    resetGame();
}); // close reset-buttons
}); // close document


function generateLossDueToTimeOut() {
	unanswerTotal++;
	gameHTML = "<p class='text-center text-dark timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center text-dark'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/monkey.gif'>";
	$(".mainBlock").html(gameHTML);
	setTimeout(wait, 3000);  
}

function generateWin() {
	correctTotal++;
	gameHTML = "<p class='text-center text-dark timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center text-dark'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainBlock").html(gameHTML);
	setTimeout(wait, 3000);  
}

function generateLoss() {
	incorrectTotal++;
	gameHTML = "<p class='text-center text-dark timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center text-dark'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/monkey.gif'>";
	$(".mainBlock").html(gameHTML);
	setTimeout(wait, 3000); 
}

function generateHTML() {
	gameHTML = "<p class='text-center text-dark timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center text-dark'>" + questionArray[questionCounter] + "</p><p class='first-answer answer text-dark'>A. " + answerArray[questionCounter][0] + "</p><p class='answer text-dark'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer text-dark'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainBlock").html(gameHTML);
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center text-dark timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center text-dark'>All done, here's how you did!" + "</p>" + "<p class='summary-correct text-dark'>Correct Answers: " + correctTotal + "</p>" + "<p class='text-dark'>Wrong Answers: " + incorrectTotal + "</p>" + "<p class='text-dark'>Unanswered: " + unanswerTotal + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-warning btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainBlock").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTotal = 0;
	incorrectTotal = 0;
	unanswerTotal = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["What is the capital of Canada?", "What is the capital of Aruba?", "What is the capital of Czech Republic?", "What is the capital of Germany?", "What is the capital of Philipines?", "What is the capital of Sweeden?", "What is the capital of Colombia?", "What is the capital of Thailand?"];
var answerArray = [["Ottawa", "Toronto", "Mississauga", "Quebec"], ["Noord","Cudarebe","Barcadera","Oranjestad"], ["Brno", "Prague", "Karlovy Vary", "Pardubice"], ["Frankfut","Berlin","Weimar","Jena"], ["Bataan", "Bohol", "Vigan", "Manila"], ["Uppsala","Lund","Stockholm","Helsingborg"], ["Bucaramanga", "Cucuta", "Bogotá", "Santa Marta"], ["Bangkok","Pattaya","Hat Yai","Udon Thani"]];
var imageArray = ["<img class='center-block img-right' src='assets/images/cat.gif'>", "<img class='center-block img-right' src='assets/images/cat.gif'>", "<img class='center-block img-right' src='assets/images/cat.gif'>", "<img class='center-block img-right' src='assets/images/cat.gif'>", "<img class='center-block img-right' src='assets/images/cat.gif'>", "<img class='center-block img-right' src='assets/images/cat.gif'>", "<img class='center-block img-right' src='assets/images/cat.gif'>", "<img class='center-block img-right' src='assets/images/cat.gif'>"];
var correctAnswers = ["A. Ottawa", "D. Oranjestad", "B. Prague", "B. Berlin", "D. Manila", "C. Stockholm", "C. Bogotá", "A. Bangkok"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTotal = 0;
var incorrectTotal = 0;
var unanswerTotal = 0;