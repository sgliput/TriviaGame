var rights = 0;
var wrongs = 0;
var questionsAnswered = 0;
var levelCount = 0;
var unansweredQ = 0;

function introGenerator(objArray) {
    $("#Intro").show();
    $("#IntroHeading").text(objArray[levelCount].heading);
    $("#Category").text(objArray[levelCount].category);
    $("#firstp").text(objArray[levelCount].firstp);
    $("#secondp").text(objArray[levelCount].secondp);


}


function getAnswerScreen(objArray) {

    $(".radiobtn").attr("name", objArray[questionsAnswered].name);
    $(".radiobtn1Answer").attr("value", objArray[questionsAnswered].options[0]);
    $(".radiobtn2Answer").attr("value", objArray[questionsAnswered].options[1]);
    $(".radiobtn3Answer").attr("value", objArray[questionsAnswered].options[2]);
    $(".radiobtn4Answer").attr("value", objArray[questionsAnswered].options[3]);

    $(".option1Answer").text(objArray[questionsAnswered].options[0]);
    $(".option2Answer").text(objArray[questionsAnswered].options[1]);
    $(".option3Answer").text(objArray[questionsAnswered].options[2]);
    $(".option4Answer").text(objArray[questionsAnswered].options[3]);

    if (levelCount === 0) {
        $("#l1").hide();
        $("#answerScreen").show();
        $("#l1HeadingAnswer").text(objArray[questionsAnswered].level);

        $("#fruitimgAnswer").attr("src", objArray[questionsAnswered].image);
        $(".next").text(objArray[questionsAnswered].nextq);

        if (objArray[questionsAnswered].isChecked && $(':checked').val() === objArray[questionsAnswered].answer) {
            $(".result").text("Congratulations! That's correct!");
            rights++;
        } else {
            $(".result").html("Sorry! That's incorrect!");
            wrongs++;
        }

    } else if (levelCount === 1) {
        $("#l2").hide();
        $("#answerScreen2").show();
        $("#l2HeadingAnswer").text(objArray[questionsAnswered].level);
        $("#varietyListAnswer").text(objArray[questionsAnswered].varieties);
        $(".next2").text(objArray[questionsAnswered].nextq);


            $(".img1").attr("src", objArray[questionsAnswered].img1);
            $(".img2").attr("src", objArray[questionsAnswered].img2);
            $("#captionimg1").text(objArray[questionsAnswered].caption1);
            $("#captionimg2").text(objArray[questionsAnswered].caption2);
            $(".figure1").show();
            $(".figure2").show();
            if (objArray[questionsAnswered].answer === "Tomato") {
                $(".option3Answer").append("&nbsp;<strong><em>Yes, it's a fruit!</em></strong>");
            }
        
            if(stopwatch2.time === 0){
                
                $(".result").html("Sorry! You ran out of time! The answer is actually <strong>" + objArray[questionsAnswered].answer + "</strong>.");
                questionsAnswered++;
                unansweredQ++;
            } else if (objArray[questionsAnswered].isChecked && $(':checked').val() === objArray[questionsAnswered].answer) {
                $(".result").text("Congratulations! That's correct!");
                rights++;
            } else {
                $(".result").html("Sorry! That's incorrect! The answer is actually <strong>" + objArray[questionsAnswered].answer + "</strong>.");
                wrongs++;
            }
        
    }


    

    

    




}




function updatePage(objArray) {
    $(".fas").remove();
    $(".radiobtn").show();
    if (questionsAnswered < 12) {
        $("#Intro").hide();

        //for Level 1
        if (levelCount === 0) {
            $("#answerScreen").hide();
            $("#l1").show();
            $(".radiobtn").prop('checked', false);
            $('.answer').prop('disabled', true);
            $("#l1Heading").text(objArray[questionsAnswered].level);
            $("#fruitimg").attr("src", objArray[questionsAnswered].image);


            //for Level 2
        } else if (levelCount === 1) {
            $("#answerScreen2").hide();
            $("#l2").show();
            $(".radiobtn").prop('checked', false);
            $('.answer2').prop('disabled', true);
            $("#l2Heading").text(objArray[questionsAnswered].level);
            $("#varietyList").text(objArray[questionsAnswered].varieties);


        }
        //for all levels
        $(".radiobtn").attr("name", objArray[questionsAnswered].name);
        $(".radiobtn1").attr("value", objArray[questionsAnswered].options[0]);
        $(".radiobtn2").attr("value", objArray[questionsAnswered].options[1]);
        $(".radiobtn3").attr("value", objArray[questionsAnswered].options[2]);
        $(".radiobtn4").attr("value", objArray[questionsAnswered].options[3]);

        $(".option1").text(objArray[questionsAnswered].options[0]);
        $(".option2").text(objArray[questionsAnswered].options[1]);
        $(".option3").text(objArray[questionsAnswered].options[2]);
        $(".option4").text(objArray[questionsAnswered].options[3]);
    } else if (questionsAnswered === 12) {

        getResultsScreen(objArray);

    }

};


function check(objArray) {
    objArray[questionsAnswered].isChecked = true;
    $('.answer').prop('disabled', false);
    $('.answer2').prop('disabled', false);
    console.log(objArray[questionsAnswered].isChecked);
};

function getResultsScreen(objArray) {
    $("#l1").hide();
    $("#l2").hide();
    $("#answerScreen").hide();
    $("#answerScreen2").hide();
    $("#resultsScreen").show();
    $("#howManyRight").text(rights);
    $("#howManyWrong").text(wrongs);
    stopwatch.stop();
    answered = rights + wrongs;
    if (stopwatch.time === 0 && answered === 11) {
        $("#howManyWrongP").after("<p id='howManyUnanswered'>But you didn't answer 1 question.</p>");
    } else if (stopwatch.time === 0) {
        $("#howManyWrongP").after("<p id='howManyUnanswered'>But you didn't answer " + (12 - answered) + " questions.</p>");
    };
    if (unansweredQ === 1) {
        $("#howManyWrongP").after("<p id='howManyUnanswered'>But you didn't answer 1 question.</p>");
    } else if (unansweredQ > 1) {
        $("#howManyWrongP").after("<p id='howManyUnanswered'>But you didn't answer " + unansweredQ + " questions.</p>");
    };

    if (rights > 8) {
        $("#verdict").text("Congratulations! You've unlocked " + intros[levelCount].nextLevel + "!");
        $("#whatNext").text("Orange you glad you know your fruit?");
        $(".nextLevel").text("Next Level");
    } else {
        $("#verdict").text("Sorry, your fruit knowledge needs some work.");
        $("#whatNext").text("Click to try again.");
        $(".nextLevel").text("Start Over");

    };
};

function replace(objArray) {
    if ($(':checked.radiobtn1').val() === objArray[questionsAnswered].answer) {
        $(".radiobtn1").before("<i class='fas fa-check'></i>");
        $(".radiobtn1").hide();
    } else if ($(':checked.radiobtn2').val() === objArray[questionsAnswered].answer) {
        $(".radiobtn2").before("<i class='fas fa-check'></i>");
        $(".radiobtn2").hide();
    } else if ($(':checked.radiobtn3').val() === objArray[questionsAnswered].answer) {
        $(".radiobtn3").before("<i class='fas fa-check'></i>");
        $(".radiobtn3").hide();
    } else if ($(':checked.radiobtn4').val() === objArray[questionsAnswered].answer) {
        $(".radiobtn4").before("<i class='fas fa-check'></i>");
        $(".radiobtn4").hide();
    };

    if ($(':checked.radiobtn1').val() === objArray[questionsAnswered].incorrect[0] || $(':checked.radiobtn1').val() === objArray[questionsAnswered].incorrect[1] || $(':checked.radiobtn1').val() === objArray[questionsAnswered].incorrect[2]) {
        $(".radiobtn1").before("<i class='fas fa-times'></i>");
        $(".radiobtn1").hide();

    } else if ($(':checked.radiobtn2').val() === objArray[questionsAnswered].incorrect[0] || $(':checked.radiobtn2').val() === objArray[questionsAnswered].incorrect[1] || $(':checked.radiobtn2').val() === objArray[questionsAnswered].incorrect[2]) {
        $(".radiobtn2").before("<i class='fas fa-times'></i>");
        $(".radiobtn2").hide();

    } else if ($(':checked.radiobtn3').val() === objArray[questionsAnswered].incorrect[0] || $(':checked.radiobtn3').val() === objArray[questionsAnswered].incorrect[1] || $(':checked.radiobtn3').val() === objArray[questionsAnswered].incorrect[2]) {
        $(".radiobtn3").before("<i class='fas fa-times'></i>");
        $(".radiobtn3").hide();

    } else if ($(':checked.radiobtn4').val() === objArray[questionsAnswered].incorrect[0] || $(':checked.radiobtn4').val() === objArray[questionsAnswered].incorrect[1] || $(':checked.radiobtn4').val() === objArray[questionsAnswered].incorrect[2]) {
        $(".radiobtn4").before("<i class='fas fa-times'></i>");
        $(".radiobtn4").hide();

    }
};



$(document).ready(function () {

    $("#start").on("click", function () {
        $("#instructions").hide();
        $("#displayTimer").show();
        introGenerator(intros);
    });
    $("#startl").on("click", function () {
        if (levelCount === 0) {
            updatePage(l1);
            stopwatch.start();
        } else if (levelCount === 1) {
            updatePage(l2);
            stopwatch2.start();
        } else if (levelCount === 2) {
            $("#IntroHeading").text("Psych!");
            $("#Category").text("There is no Level 3 just yet.");
            $("#firstp").text("There may be only two levels thus far, but more can be added in the future to truly test your fruity knowledge.");
            $("#secondp").text("Thanks for playing!");
            $("#startl").hide();

        }
    });
    $("#l1 .radio label").on("change", function () {
        check(l1);
        replace(l1);
        getAnswerScreen(l1);
        questionsAnswered++;

    });
    $(".next").on("click", function () {
        console.log(questionsAnswered);
        updatePage(l1);
    });



    $(".nextLevel").on("click", function () {
        $("#resultsScreen").hide();
        questionsAnswered = 0;
            

        if (levelCount === 0 && rights > 8) {
            $("#displayTimer").text("00:10");
            stopwatch2.time = 10;
            rights = 0;
            wrongs = 0;
            levelCount++;
            introGenerator(intros);
            
        } else if(levelCount === 1 && rights > 8) {
            $("#displayTimer").hide();
            rights = 0;
            wrongs = 0;
            levelCount++;
            introGenerator(intros);

        } else if (rights < 8) {
            $("#howManyUnanswered").remove();
            unansweredQ = 0;
            rights = 0;
            wrongs = 0;
            introGenerator(intros);

            if(levelCount === 0){
            stopwatch.reset();
            } else if (levelCount === 1){
                stopwatch2.reset();
            }
        }
    });
    $("#l2 .radio label").on("change", function () {
        check(l2);
        replace(l2);
        getAnswerScreen(l2);
        questionsAnswered++;
        stopwatch2.stop();
    });
    $(".next2").on("click", function () {
        console.log(questionsAnswered);
        stopwatch2.reset();
        updatePage(l2);
        stopwatch2.start();
        if(questionsAnswered === 12){
        stopwatch2.reset();
        }
    });



});

    // Stopwatch objects
    //  Variable that will hold setInterval that runs the stopwatch
    var intervalId;
    var clockRunning = false;

    //Stopwatch object
    var stopwatch = {

        time: 120,

        reset: function () {

            stopwatch.time = 120;

            //  TODO: Change the "display" div to "02:00."
            $("#displayTimer").text("02:00");
            stopwatch.stop();
        },

        start: function () {

            //  TODO: Use setInterval to start the count here and set the clock to running.
            if (!clockRunning) {
                intervalId = setInterval(stopwatch.count, 1000);
                clockRunning = true;
            }

        },


        stop: function () {

            //clearInterval stops the count here and sets the clock to not be running.
            clearInterval(intervalId);
            clockRunning = false;
        },

        count: function () {

            //Decrease time by one
            stopwatch.time--;
            //Converts time to timer format
            var converted = stopwatch.timeConverter(stopwatch.time);
            //Shows the converted time in the "display" div.
            $("#displayTimer").text(converted);

            if (stopwatch.time === 0) {
                stopwatch.stop();
                questionsAnswered = 12;
                updatePage(l1);


            }
        },

        timeConverter: function (t) {

            //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);

            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            if (minutes === 0) {
                minutes = "00";
            }

            else if (minutes < 10) {
                minutes = "0" + minutes;
            }

            return minutes + ":" + seconds;
        }
    };

    var stopwatch2 = {

        time: 10,

        reset: function () {

            stopwatch2.time = 10;

            //  TODO: Change the "display" div to "02:00."
            $("#displayTimer").text("00:10");
            stopwatch2.stop();
        },

        start: function () {

            //  TODO: Use setInterval to start the count here and set the clock to running.
            if (!clockRunning) {
                intervalId = setInterval(stopwatch2.count, 1000);
                clockRunning = true;
            }

        },


        stop: function () {

            //clearInterval stops the count here and sets the clock to not be running.
            clearInterval(intervalId);
            clockRunning = false;
        },

        count: function () {

            //Decrease time by one
            stopwatch2.time--;
            //Converts time to timer format
            var converted = stopwatch2.timeConverter(stopwatch2.time);
            //Shows the converted time in the "display" div.
            $("#displayTimer").text(converted);

            if (stopwatch2.time === 0) {
                stopwatch2.stop();
                getAnswerScreen(l2);


            }
        },

        timeConverter: function (t) {

            //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);

            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            if (minutes === 0) {
                minutes = "00";
            }

            else if (minutes < 10) {
                minutes = "0" + minutes;
            }

            return minutes + ":" + seconds;
        }
    };



