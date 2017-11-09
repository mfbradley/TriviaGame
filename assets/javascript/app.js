// START BUTTON AND COUNTDOWN TIMER
window.onload = function() {
    $("#start").on("click", start);

    var time = 400;
    var intervalId;


    function start() {
        intervalId = setInterval(decrement, 1000);
        console.log(time);
    }


    function decrement() {
        time--;
        $("#countdownTimer").text(time);


        if (time === 0) {
            stop();
            alert("Oops! You ran out of time!");
            window.location.href = "results.html";
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

    start();
};

// ANSWER BUTTONS AND RESULTS
var correctAnswerCount = 0;
var incorrectAnswerCount = 0;
var unansweredCount = 0;

$(".checkbox").click(function() {
    var userAnswer = $(this).attr('data-value');
    console.log(userAnswer);

    if (userAnswer === "correct") {
        correctAnswerCount++;
        $("#correctAnswers").text(correctAnswerCount);
        console.log(correctAnswerCount);
    }

    else if (userAnswer === "incorrect") {
        incorrectAnswerCount++;
        $("#incorrectAnswers").text(incorrectAnswerCount);
        console.log(incorrectAnswerCount);
    }

    else {
        $("#unansweredQuestions").text(unansweredCount);
        console.log(unansweredCount);
    }
});
