// START BUTTON AND COUNTDOWN TIMER
window.onload = function() {
    $("#wrapper").hide();
    $("#results").hide();
    $("#title").show();

    var time = 40;
    var intervalId;

    $("#start").on("click", function() {


        intervalId = setInterval(decrement, 1000);
        console.log(time);
        $("#title").hide();
        $("#wrapper").show();
    });

    function decrement() {
        time--;
        $("#countdownTimer").text(time);


        if (time === 0) {
            stop();
            alert("Oops! You ran out of time!");
            $("#title").hide();
            $("#wrapper").hide();
            $("#results").show();
        }
    }

    function stop() {
        clearInterval(intervalId);
    }



    // ANSWER BUTTONS AND RESULTS
    var correctAnswerCount = 0;
    var incorrectAnswerCount = 0;
    var unansweredCount = 0;
    var answerChosen = false;
    var choosingAnswer = 'choosing answer';

    $("#results").hide();

    $(".checkbox").click(function() {
        var userAnswer = $(this).attr('data-value');
        console.log(userAnswer);
        answerChosen = true;

        if (userAnswer === "correct") {
            correctAnswerCount++;
            console.log(correctAnswerCount);
        }

        else if (userAnswer === "incorrect") {
            incorrectAnswerCount++;
            console.log(incorrectAnswerCount);
        }

        else {
            unansweredCount++;
            console.log(unansweredCount);
        }
    });

    $("#done").click(function() {
        $("#wrapper").hide();
        $("#results").show();
        document.getElementById("correctAnswers").innerHTML = correctAnswerCount;
        document.getElementById("incorrectAnswers").innerHTML = incorrectAnswerCount;
        document.getElementById("unansweredQuestions").innerHTML = unansweredCount;

    });

    $("#tryAgain").click(function() {
        $("#results").hide();
        $("#wrapper").hide();
        $("#title").show();
    });
};
