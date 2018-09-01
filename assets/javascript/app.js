var rights = 0;
var wrongs = 0;
var questionsAnswered = 0;
var level = 0;

function introGenerator(objArray) {
    $("#Intro").show();
    $("#IntroHeading").text(objArray[level].heading);
    $("#Category").text(objArray[level].category);
    $("#firstp").text(objArray[level].firstp);
    $("#secondp").text(objArray[level].secondp);


}


function getAnswerScreen(objArray) {
    replace(objArray);
    if (level === 0) {
        $("#l1").hide();
        $("#answerScreen").show();
        $("#l1HeadingAnswer").text(objArray[questionsAnswered].level);

        $("#fruitimgAnswer").attr("src", objArray[questionsAnswered].image);
        $(".next").text(objArray[questionsAnswered].nextq);
    } else if (level === 1) {
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
    } else {
        $(".result").text("Sorry! That's incorrect!");
        
        wrongs++;
    }




}




function updatePage(objArray) {
    $(".fas").remove();
    $(".radiobtn").show();
    if (questionsAnswered < 12) {
        $("#Intro").hide();

        //for Level 1
        if (level === 0) {
            $("#answerScreen").hide();
            $("#l1").show();
            $(".radiobtn").prop('checked', false);
            $('.answer').prop('disabled', true);
            $("#l1Heading").text(objArray[questionsAnswered].level);
            $("#fruitimg").attr("src", objArray[questionsAnswered].image);
            $(".radiobtn").attr("name", objArray[questionsAnswered].name);

            //for Level 2
        } else if (level === 1) {
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
        console.log($(".radiobtn1").attr("value"));
        console.log(objArray[questionsAnswered].options[0]);

        $("#option1").text(objArray[questionsAnswered].options[0]);
        $("#option2").text(objArray[questionsAnswered].options[1]);
        $("#option3").text(objArray[questionsAnswered].options[2]);
        $("#option4").text(objArray[questionsAnswered].options[3]);
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
if($(':checked.radiobtn1').val() === objArray[questionsAnswered].answer){
    $(".radiobtn1").before("<i class='fas fa-check'></i>");
    $(".radiobtn1").hide();
} else if($(':checked.radiobtn2').val() === objArray[questionsAnswered].answer){
    $(".radiobtn2").before("<i class='fas fa-check'></i>");
    $(".radiobtn2").hide();
} else if ($(':checked.radiobtn3').val() === objArray[questionsAnswered].answer){
    $(".radiobtn3").before("<i class='fas fa-check'></i>");
    $(".radiobtn3").hide();
} else if ($(':checked.radiobtn4').val() === objArray[questionsAnswered].answer){
    $(".radiobtn4").before("<i class='fas fa-check'></i>");
    $(".radiobtn4").hide();
} else if($(':checked.radiobtn1').val() !== objArray[questionsAnswered].answer){
    $(".radiobtn1").before("<i class='fas fa-times'></i>");
    $(".radiobtn1").hide();
    
} else if($(':checked.radiobtn2').val() !== objArray[questionsAnswered].answer){
    $(".radiobtn2").before("<i class='fas fa-times'></i>");
    $(".radiobtn2").hide();
    
} else if($(':checked.radiobtn3').val() !== objArray[questionsAnswered].answer){
    $(".radiobtn3").before("<i class='fas fa-times'></i>");
    $(".radiobtn3").hide();
    
} else if($(':checked.radiobtn4').val() !== objArray[questionsAnswered].answer){
    $(".radiobtn4").before("<i class='fas fa-times'></i>");
    $(".radiobtn4").hide();
    
}
};

function replaceX(objArray) {
if($(':checked.radiobtn1').val() !== objArray[questionsAnswered].answer){
    $(".radiobtn1").before("<i class='fas fa-times'></i>");
    $(".radiobtn1").hide();
} else if($(':checked.radiobtn2').val() !== objArray[questionsAnswered].answer){
    $(".radiobtn2").before("<i class='fas fa-times'></i>");
    $(".radiobtn2").hide();
} else if ($(':checked.radiobtn3').val() !== objArray[questionsAnswered].answer){
    $(".radiobtn3").before("<i class='fas fa-times'></i>");
    $(".radiobtn3").hide();
} else if ($(':checked.radiobtn4').val() !== objArray[questionsAnswered].answer){
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
            isChecked: false
        },

        l1q2 = {
            name: "l1q2",
            level: "Level 1, Question 2",
            options: ["Mangosteen", "Papaya", "Guava", "Persimmon"],
            nextq: "Question 3",
            image: "assets/images/guava.jpg",
            answer: "Guava",
            isChecked: false
        },

        l1q3 = {
            name: "l1q3",
            level: "Level 1, Question 3",
            options: ["Horned Melon", "Persimmon", "Passion Fruit", "Prickly Pear"],
            nextq: "Question 4",
            image: "assets/images/pricklypear.jpg",
            answer: "Prickly Pear",
            isChecked: false
        },

        l1q4 = {
            name: "l1q4",
            level: "Level 1, Question 4",
            options: ["Jackfruit", "Elderberry", "Gooseberry", "Kumquat"],
            nextq: "Question 5",
            image: "assets/images/gooseberry.jpg",
            answer: "Gooseberry",
            isChecked: false
        },

        l1q5 = {
            name: "l1q5",
            level: "Level 1, Question 5",
            options: ["Elderberry", "Acai", "Kumquat", "Goji Berry"],
            nextq: "Question 6",
            image: "assets/images/goji.jpg",
            answer: "Goji Berry",
            isChecked: false
        },

        l1q6 = {
            name: "l1q6",
            level: "Level 1, Question 6",
            options: ["Soursop", "Cherimoya", "Pawpaw", "Jackfruit"],
            nextq: "Question 7",
            image: "assets/images/cherimoya.jpg",
            answer: "Cherimoya",
            isChecked: false
        },

        l1q7 = {
            name: "l1q7",
            level: "Level 1, Question 7",
            options: ["Lychee", "Persimmon", "Soursop", "Pawpaw"],
            nextq: "Question 8",
            image: "assets/images/lychee.jpg",
            answer: "Lychee",
            isChecked: false
        },

        l1q8 = {
            name: "l1q8",
            level: "Level 1, Question 8",
            options: ["Pawpaw", "Quince", "Rambutan", "Persimmon"],
            nextq: "Question 9",
            image: "assets/images/persimmon.jpg",
            answer: "Persimmon",
            isChecked: false
        },

        l1q9 = {
            name: "l1q9",
            level: "Level 1, Question 9",
            options: ["Persimmon", "Rambutan", "Annona", "Durian"],
            nextq: "Question 10",
            image: "assets/images/rambutan.jpg",
            answer: "Rambutan",
            isChecked: false
        },

        l1q10 = {
            name: "l1q10",
            level: "Level 1, Question 10",
            options: ["Jackfruit", "Durian", "Soursop", "Passion Fruit"],
            nextq: "Question 11",
            image: "assets/images/jackfruit.jpg",
            answer: "Jackfruit",
            isChecked: false
        },

        l1q11 = {
            name: "l1q11",
            level: "Level 1, Question 11",
            options: ["Quince", "Mangosteen", "Durian", "Pawpaw"],
            nextq: "Question 12",
            image: "assets/images/mangosteen.jpg",
            answer: "Mangosteen",
            isChecked: false
        },

        l1q12 = {
            name: "l1q12",
            level: "Level 1, Question 12",
            options: ["Pomelo", "Soursop", "Passion Fruit", "Quince"],
            nextq: "How'd you do?",
            image: "assets/images/passionfruit.jpg",
            answer: "Passion Fruit",
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
            isChecked: false
        }




    ]

    $(document).ready(function () {

        $("#start").on("click", function () {
            $("#instructions").hide();
            introGenerator(intros);
        });
        $("#startl").on("click", function () {
            if (level === 0) {
                updatePage(l1);
            } else if (level === 1) {
                updatePage(l2);
            }
        });
        $(".radio").on("click", function () {
            check(l1);
            check(l2);

        });
        $(".answer").on("click", function () {
            
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
                level++;
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
            getAnswerScreen(l2);
            questionsAnswered++;
            //console.log(questionsAnswered);
        });
        $(".next2").on("click", function () {
            console.log(questionsAnswered);
            updatePage(l2);
        });



    });
