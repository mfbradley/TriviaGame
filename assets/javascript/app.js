// START BUTTON AND COUNTDOWN TIMER
window.onload = function() {
    $("#start").on("click", start);

    var time = 40;
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

    // ANSWER BUTTONS AND RESULTS
    var correctAnswerCount = 0;
    var incorrectAnswerCount = 0;
    var unansweredCount = 0;
    var answerChosen = false;

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
};
