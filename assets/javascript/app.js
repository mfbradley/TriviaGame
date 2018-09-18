
window.onload = function() {
 
    var qA = [
        {
            q: "Which two characters have matching tatoos of the date they landed their GOT roles?",
            a: ["Ygritte and Jon Snow", "Cersei and Jamie Lannister", "Sansa and Arya Stark", "Daenerys and Tyrion"], 
            correct: "Sansa and Arya Stark"
        },

        {
            q: "Which character was almost cast as Jon Snow?",
            a: ["Gendry", "Theon Greyjoy", "Podrick Payne", "Ramsay Bolton"], 
            correct: "Ramsay Bolton"

        },

        {
            q: "Which Stark adopted his/her dierwolf in real life?", 
            a: ["Bran", "Sansa", "Arya", "Rickon"],
            correct: "Sansa"
        },

        {
            q: "Which actor got into a fight at a McDonald's the night before his audition, resulting in a black eye that helped him land the role?",
            a: ["Kit Harrington", "Jason Momoa", "Peter Dinklage", "Jerome Flynn"],
            correct: "Kit Harrington"
        },
        {
            q: "Which GOT characters used to date in real life?",
            a: ["Hodor and Gilly", "Jon Snow and Ygritte", "Sansa and Gendry", "Cersei and Bronn"],
            correct: "Cersei and Bronn"
        },
        {
            q: "Which two characters were besties before the show began filming?",
            a: ["Tormund and Brienee of Tarth", "Tyrion and Cersei", "Khal Drogo and The Mountain", "Katyln Stark and Cersei"],
            correct: "Tyrion and Cersei"
        }
    ]

    var gameArea = $("#questionsHere");

    for (var i = 0; i < qA.length; i++) {
        gameArea.append("<h3>" + qA[i].q + "</h3>");

        for (var j = 0; j < qA[i].a.length; j++) {
            gameArea.append("<input type='radio' name='question-" + i + "'>" + qA[i].a[j] + "<br>");
        }
    }
    
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
        stop();
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
        resetGame();
    });

    function resetGame() {
        correctAnswerCount = 0;
        incorrectAnswerCount = 0;
        unansweredCount = 0;
        time = 40;
        $("#countdownTimer").text(time);
        $('input[name="q1"]').prop('checked', false);
        $('input[name="q2"]').prop('checked', false);
        $('input[name="q3"]').prop('checked', false);
        $('input[name="q4"]').prop('checked', false);
        $('input[name="q5"]').prop('checked', false);
        $('input[name="q6"]').prop('checked', false);

    }
};
