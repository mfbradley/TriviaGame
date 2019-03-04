
window.onload = function () {

    // VARIABLES
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
    var time = 40;
    var intervalId;
    var correctAnswerCount = 0;
    var incorrectAnswerCount = 0;
    var unansweredCount = 0;

    // FUNCTIONS
    function renderQuestions() {
        for (var i = 0; i < qA.length; i++) {
            gameArea.append("<h3>" + qA[i].q + "</h3>");

            for (var j = 0; j < qA[i].a.length; j++) {
                gameArea.append("<input type='radio' name='q-" + i + "' value='" + qA[i].a[j] + "'>" + qA[i].a[j] + "<br>");
            }
        }
    }

    function checkAnswers() {

        for (var i = 0; i < qA.length; i++) {

            var checked = $("input[name='q-" + i + "']:checked").val();
            
            if(!checked) {
                unansweredCount++
            }

            
            else if(checked === qA[i].correct) {
                correctAnswerCount++
            }

            else if(checked != qA[i].correct) {
                incorrectAnswerCount++
            }

            else {
                console.log("uh oh")
            }
        }
    }

    function decrement() {
        time--;
        $("#countdownTimer").text(time);


        if (time === 0) {
            stop();
            checkAnswers();
            alert("Oops! You ran out of time!");
            $("#correctAnswers").text(correctAnswerCount);
            $("#incorrectAnswers").text(incorrectAnswerCount);
            $("#unansweredQuestions").text(unansweredCount);
            $("#title").hide();
            $("#wrapper").hide();
            $("#results").show();
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

    function resetGame() {
        correctAnswerCount = 0;
        incorrectAnswerCount = 0;
        unansweredCount = 0;
        time = 40;
        gameArea.empty();
        $("#countdownTimer").text(time);

    }

    // LOGIC
    $("#wrapper").hide();
    $("#results").hide();
    $("#title").show();

    $("#start").on("click", function () {
        intervalId = setInterval(decrement, 1000);
        renderQuestions();
        $("#title").hide();
        $("#wrapper").show();
    });

    $("#done").click(function () {
        checkAnswers();
        stop();
        $("#wrapper").hide();
        $("#results").show();
        $("#correctAnswers").text(correctAnswerCount);
        $("#incorrectAnswers").text(incorrectAnswerCount);
        $("#unansweredQuestions").text(unansweredCount);

    });

    $("#tryAgain").click(function () {
        $("#results").hide();
        $("#wrapper").hide();
        $("#title").show();
        resetGame();
    });


};
