var rights = 0;
var wrongs = 0;
var questionsAnswered = 0;
var levelCount = 0;

function introGenerator(objArray) {
    $("#Intro").show();
    $("#IntroHeading").text(objArray[levelCount].heading);
    $("#Category").text(objArray[levelCount].category);
    $("#firstp").text(objArray[levelCount].firstp);
    $("#secondp").text(objArray[levelCount].secondp);


}


function getAnswerScreen(objArray) {

    if (levelCount === 0) {
        $("#l1").hide();
        $("#answerScreen").show();
        $("#l1HeadingAnswer").text(objArray[questionsAnswered].level);

        $("#fruitimgAnswer").attr("src", objArray[questionsAnswered].image);
        $(".next").text(objArray[questionsAnswered].nextq);
    } else if (levelCount === 1) {
        $("#l2").hide();
        $("#answerScreen2").show();
        $("#l2HeadingAnswer").text(objArray[questionsAnswered].level);
        $("#varietyListAnswer").text(objArray[questionsAnswered].varieties);
        $(".next2").text(objArray[questionsAnswered].nextq);

    }


    $(".radiobtn").attr("name", objArray[questionsAnswered].name);
    $(".radiobtn1Answer").attr("value", objArray[questionsAnswered].options[0]);
    $(".radiobtn2Answer").attr("value", objArray[questionsAnswered].options[1]);
    $(".radiobtn3Answer").attr("value", objArray[questionsAnswered].options[2]);
    $(".radiobtn4Answer").attr("value", objArray[questionsAnswered].options[3]);

    $(".option1Answer").text(objArray[questionsAnswered].options[0]);
    $(".option2Answer").text(objArray[questionsAnswered].options[1]);
    $(".option3Answer").text(objArray[questionsAnswered].options[2]);
    $(".option4Answer").text(objArray[questionsAnswered].options[3]);



    if (objArray[questionsAnswered].isChecked && $(':checked').val() === objArray[questionsAnswered].answer) {
        $(".result").text("Congratulations! That's correct!");
        rights++;
        if (levelCount === 1) {
            $(".img1").attr("src", objArray[questionsAnswered].img1);
            $(".img2").attr("src", objArray[questionsAnswered].img2);
            $("#captionimg1").text(objArray[questionsAnswered].caption1);
            $("#captionimg2").text(objArray[questionsAnswered].caption2);
            $(".figure1").show();
            $(".figure2").show();
            if (objArray[questionsAnswered].answer == "Tomato") {
                $(".option3Answer").append("&nbsp;<strong><em>Yes, it's a fruit!</em></strong>");
            }
        }

    } else {
        $(".result").text("Sorry! That's incorrect!");
        wrongs++;
        $(".figure1").hide();
        $(".figure2").hide();
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
    $("#answerScreen").hide();
    $("#answerScreen2").hide();
    $("#resultsScreen").show();
    $("#howManyRight").text(rights);
    $("#howManyWrong").text(wrongs);
    if (rights > 9) {
        $("#verdict").text("Congratulations! You've unlocked Level 2!");
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


var intros = [
    level1 = {
        heading: "Welcome to Level 1",
        category: "Name That Fruit!",
        firstp: "So you think you know fruit?",
        secondp: "Sure, you know an apple from a banana, but what about more exotic varieties? See if you can identify these less familiar options."
    },

    level2 = {
        heading: "Welcome to Level 2",
        category: "All Aboard the Type Train!",
        firstp: "How many kinds can one fruit have?",
        secondp: "Quite a few, actually, and you might have eaten some without even knowing their name. Try to pick the fruit that comes in the following varieties:"
    },

    level3 = {
        heading: "Welcome to Level 3",
        category: "Real Trivia Time!",
        firstp: "Now that we've covered exotic fruits and various cultivars, let's see how much you know about other fruit facts.",
        secondp: "Whether it be fruity roles in pop culture or weird and wonderful truths you never knew you wanted to know, this is the level for true fruit trivia buffs."
    }

]


var l1 = [
    l1q1 = {
        name: "l1q1",
        level: "Level 1, Question 1",
        options: ["Prickly Pear", "Rambutan", "Dragonfruit", "Guava"],
        nextq: "Question 2",
        image: "assets/images/dragonfruit.jpg",
        answer: "Dragonfruit",
        incorrect: ["Prickly Pear", "Rambutan", "Guava"],
        isChecked: false
    },

    l1q2 = {
        name: "l1q2",
        level: "Level 1, Question 2",
        options: ["Mangosteen", "Papaya", "Guava", "Persimmon"],
        nextq: "Question 3",
        image: "assets/images/guava.jpg",
        answer: "Guava",
        incorrect: ["Mangosteen", "Papaya", "Persimmon"],
        isChecked: false
    },

    l1q3 = {
        name: "l1q3",
        level: "Level 1, Question 3",
        options: ["Horned Melon", "Persimmon", "Passion Fruit", "Prickly Pear"],
        nextq: "Question 4",
        image: "assets/images/pricklypear.jpg",
        answer: "Prickly Pear",
        incorrect: ["Horned Melon", "Persimmon", "Passion Fruit"],
        isChecked: false
    },

    l1q4 = {
        name: "l1q4",
        level: "Level 1, Question 4",
        options: ["Jackfruit", "Elderberry", "Gooseberry", "Kumquat"],
        nextq: "Question 5",
        image: "assets/images/gooseberry.jpg",
        answer: "Gooseberry",
        incorrect: ["Jackfruit", "Elderberry", "Kumquat"],
        isChecked: false
    },

    l1q5 = {
        name: "l1q5",
        level: "Level 1, Question 5",
        options: ["Elderberry", "Acai", "Kumquat", "Goji Berry"],
        nextq: "Question 6",
        image: "assets/images/goji.jpg",
        answer: "Goji Berry",
        incorrect: ["Elderberry", "Acai", "Kumquat"],
        isChecked: false
    },

    l1q6 = {
        name: "l1q6",
        level: "Level 1, Question 6",
        options: ["Soursop", "Cherimoya", "Pawpaw", "Jackfruit"],
        nextq: "Question 7",
        image: "assets/images/cherimoya.jpg",
        answer: "Cherimoya",
        incorrect: ["Soursop", "Pawpaw", "Jackfruit"],
        isChecked: false
    },

    l1q7 = {
        name: "l1q7",
        level: "Level 1, Question 7",
        options: ["Lychee", "Persimmon", "Soursop", "Pawpaw"],
        nextq: "Question 8",
        image: "assets/images/lychee.jpg",
        answer: "Lychee",
        incorrect: ["Persimmon", "Soursop", "Pawpaw"],
        isChecked: false
    },

    l1q8 = {
        name: "l1q8",
        level: "Level 1, Question 8",
        options: ["Pawpaw", "Quince", "Rambutan", "Persimmon"],
        nextq: "Question 9",
        image: "assets/images/persimmon.jpg",
        answer: "Persimmon",
        incorrect: ["Pawpaw", "Quince", "Rambutan"],
        isChecked: false
    },

    l1q9 = {
        name: "l1q9",
        level: "Level 1, Question 9",
        options: ["Persimmon", "Rambutan", "Annona", "Durian"],
        nextq: "Question 10",
        image: "assets/images/rambutan.jpg",
        answer: "Rambutan",
        incorrect: ["Persimmon", "Annona", "Durian"],
        isChecked: false
    },

    l1q10 = {
        name: "l1q10",
        level: "Level 1, Question 10",
        options: ["Jackfruit", "Durian", "Soursop", "Passion Fruit"],
        nextq: "Question 11",
        image: "assets/images/jackfruit.jpg",
        answer: "Jackfruit",
        incorrect: ["Durian", "Soursop", "Passion Fruit"],
        isChecked: false
    },

    l1q11 = {
        name: "l1q11",
        level: "Level 1, Question 11",
        options: ["Quince", "Mangosteen", "Durian", "Pawpaw"],
        nextq: "Question 12",
        image: "assets/images/mangosteen.jpg",
        answer: "Mangosteen",
        incorrect: ["Quince", "Durian", "Pawpaw"],
        isChecked: false
    },

    l1q12 = {
        name: "l1q12",
        level: "Level 1, Question 12",
        options: ["Pomelo", "Soursop", "Passion Fruit", "Quince"],
        nextq: "How'd you do?",
        image: "assets/images/passionfruit.jpg",
        answer: "Passion Fruit",
        incorrect: ["Pomelo", "Soursop", "Quince"],
        isChecked: false
    }
];

var l2 = [
    l2q1 = {
        name: "l2q1",
        level: "Level 2, Question 1",
        options: ["Apple", "Banana", "Peach", "Orange"],
        varieties: "Cavendish,  Gros Michel,  Formosana,  Red Dacca",
        nextq: "Question 2",
        answer: "Banana",
        img1: "assets/images/cavendish.jpg",
        img2: "assets/images/reddacca.jpg",
        caption1: "Cavendish",
        caption2: "Red Dacca",
        incorrect: ["Apple", "Peach", "Orange"],
        isChecked: false
    },

    l2q2 = {
        name: "l2q2",
        level: "Level 2, Question 2",
        options: ["Melon", "Lemon", "Mango", "Pineapple"],
        varieties: "Santa Claus,  Canary,  Yubari King,  Sprite",
        nextq: "Question 3",
        answer: "Melon",
        img1: "assets/images/santaclaus.jpg",
        img2: "assets/images/yubariking.jpg",
        caption1: "Santa Claus",
        caption2: "Yubari King",
        incorrect: ["Lemon", "Mango", "Pineapple"],
        isChecked: false
    },

    l2q3 = {
        name: "l2q3",
        level: "Level 2, Question 3",
        options: ["Apple", "Peach", "Orange", "Pear"],
        varieties: "O'Henry,  Doughnut,  Elegant Lady,  Red Beauty",
        nextq: "Question 4",
        answer: "Peach",
        img1: "assets/images/doughnut.jpg",
        img2: "assets/images/ohenry.jpg",
        caption1: "Doughnut/Saturn",
        caption2: "O'Henry",
        incorrect: ["Apple", "Orange", "Pear"],
        isChecked: false
    },

    l2q4 = {
        name: "l2q4",
        level: "Level 2, Question 4",
        options: ["Pineapple", "Mango", "Kiwifruit", "Watermelon"],
        varieties: "Smooth Cayenne,  Hilo,  Natal Queen,  Red Spanish",
        nextq: "Question 5",
        answer: "Pineapple",
        img1: "assets/images/natalqueen.jpg",
        img2: "assets/images/redspanish.jpg",
        caption1: "Natal Queen",
        caption2: "Red Spanish",
        incorrect: ["Mango", "Pear", "Watermelon"],
        isChecked: false
    },

    l2q5 = {
        name: "l2q5",
        level: "Level 2, Question 5",
        options: ["Mango", "Watermelon", "Pear", "Orange"],
        varieties: "Golden Midget,  Densuke,  Carolina Cross,  Orangeglo",
        nextq: "Question 6",
        answer: "Watermelon",
        img1: "assets/images/carolinacross.jpg",
        img2: "assets/images/orangeglo.jpg",
        caption1: "Carolina Cross",
        caption2: "Orangeglo",
        incorrect: ["Mango", "Pear", "Orange"],
        isChecked: false
    },

    l2q6 = {
        name: "l2q6",
        level: "Level 2, Question 6",
        options: ["Strawberry", "Lemon", "Kiwifruit", "Papaya"],
        varieties: "Hayward,  Silver Vine,  Chinese Egg,  Arctic",
        nextq: "Question 7",
        answer: "Kiwifruit",
        img1: "assets/images/hayward.jpg",
        img2: "assets/images/chineseegg.jpg",
        caption1: "Hayward Fuzzy",
        caption2: "Chinese Egg Gooseberry",
        incorrect: ["Strawberry", "Lemon", "Papaya"],
        isChecked: false
    },

    l2q7 = {
        name: "l2q7",
        level: "Level 2, Question 7",
        options: ["Mango", "Apple", "Pear", "Grapefruit"],
        varieties: "Bailey's Marvel,  Gary,  Earlygold,  Kensington Pride",
        nextq: "Question 8",
        answer: "Mango",
        img1: "assets/images/marvel.jpg",
        img2: "assets/images/kensingtonpride.jpg",
        caption1: "Bailey's Marvel",
        caption2: "Kensington Pride",
        incorrect: ["Apple", "Pear", "Grapefruit"],
        isChecked: false
    },

    l2q8 = {
        name: "l2q8",
        level: "Level 2, Question 8",
        options: ["Date", "Orange", "Tomato", "Plum"],
        varieties: "Hamlin,  Jaffa,  Moro Tarocco,  Lue Gim Gong",
        nextq: "Question 9",
        answer: "Orange",
        img1: "assets/images/jaffa.jpg",
        img2: "assets/images/morotarocco.jpg",
        caption1: "Jaffa",
        caption2: "Moro Tarocco",
        incorrect: ["Date", "Pear", "Plum"],
        isChecked: false
    },

    l2q9 = {
        name: "l2q9",
        level: "Level 2, Question 9",
        options: ["Fig", "Pear", "Lemon", "Strawberry"],
        varieties: "Albion,  Puget Reliance,  L'Amour,  Ozark Beauty",
        nextq: "Question 10",
        answer: "Strawberry",
        img1: "assets/images/puget.jpg",
        img2: "assets/images/ozarkbeauty.jpg",
        caption1: "Puget Reliance",
        caption2: "Ozark Beauty",
        incorrect: ["Fig", "Pear", "Lemon"],
        isChecked: false
    },

    l2q10 = {
        name: "l2q10",
        level: "Level 2, Question 10",
        options: ["Fig", "Apple", "Grape", "Tomato"],
        varieties: "Cascade,  Dornfelder,  Jacquère,  Muscat of Alexandria",
        nextq: "Question 11",
        answer: "Grape",
        img1: "assets/images/dornfelder.jpg",
        img2: "assets/images/muscat.jpg",
        caption1: "Dornfelder",
        caption2: "Muscat of Alexandria",
        incorrect: ["Fig", "Apple", "Tomato"],
        isChecked: false
    },

    l2q11 = {
        name: "l2q11",
        level: "Level 2, Question 11",
        options: ["Pear", "Apple", "Plum", "Cherry"],
        varieties: "Ambrosia,  Cameo,  Beauty of Bath,  Summerfree",
        nextq: "Question 12",
        answer: "Apple",
        img1: "assets/images/ambrosia.jpg",
        img2: "assets/images/beautyofbath.jpg",
        caption1: "Ambrosia",
        caption2: "Beauty of Bath",
        incorrect: ["Pear", "Plum", "Cherry"],
        isChecked: false
    },

    l2q12 = {
        name: "l2q12",
        level: "Level 2, Question 12",
        options: ["Pomegranate", "Cherry", "Tomato", "Pear"],
        varieties: "Fourth of July,  Better Boy,  Green Zebra,  Super Sweet 100",
        nextq: "So how'd you do?",
        answer: "Tomato",
        img1: "assets/images/greenzebra.jpg",
        img2: "assets/images/supersweet100.jpg",
        caption1: "Green Zebra",
        caption2: "Super Sweet 100",
        incorrect: ["Pomegranate", "Cherry", "Pear"],
        isChecked: false
    },






]

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
        }
    });
    $(".radio").on("click", function () {
        check(l1);
        check(l2);

    });
    $(".answer").on("click", function () {
        replace(l1);
        getAnswerScreen(l1);
        questionsAnswered++;
    });
    $(".next").on("click", function () {
        console.log(questionsAnswered);
        updatePage(l1);
    });
    $(".nextLevel").on("click", function () {
        if (rights > 9) {
            $("#resultsScreen").hide();
            questionsAnswered = 0;
            rights = 0;
            wrongs = 0;
            levelCount++;
            introGenerator(intros);
        } else {
            $("#resultsScreen").hide();
            introGenerator(intros);
            questionsAnswered = 0;
            rights = 0;
            wrongs = 0;
        }
    });
    $(".answer2").on("click", function () {
        replace(l2);
        getAnswerScreen(l2);
        questionsAnswered++;
        //console.log(questionsAnswered);
    });
    $(".next2").on("click", function () {
        console.log(questionsAnswered);
        updatePage(l2);
    });



});

window.onload = function() {

    $("#stop").click(stopwatch.stop);
    $("#reset").click(stopwatch.reset);
    $("#starter").click(stopwatch.start);
  };

  //  Variable that will hold setInterval that runs the stopwatch
  var intervalId;
  var clockRunning = false;
  
  //Stopwatch object
  var stopwatch = {
  
    time: 120,
    lap: 1,
  
    reset: function() {
  
      stopwatch.time = 120;
  
      //  TODO: Change the "display" div to "02:00."
      $("#displayTimer").text("02:00");
      stopwatch.stop();
    },
  
    start: function() {
  
      //  TODO: Use setInterval to start the count here and set the clock to running.
      if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
      }
  
    },

    stop: function() {
  
      //clearInterval stops the count here and sets the clock to not be running.
      clearInterval(intervalId);
      clockRunning = false;
    },
  
    count: function() {
  
      //Decrease time by one
      stopwatch.time--;
      //Converts time to timer format
      var converted = stopwatch.timeConverter(stopwatch.time);
      //Shows the converted time in the "display" div.
      $("#displayTimer").text(converted);
    },
  
    timeConverter: function(t) {
  
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
