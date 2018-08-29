var l1q1 = {
    name: "l1q1",
    level: "Level 1, Question 1",
    question: "What is this fruit in the picture?",
    option1: "Banana",
    option2: "Apple",
    option3: "Pear",
    option4: "Papaya",
    nextq: "Question 2",
    image: "assets/images/apple.jpg",
    answer: "Apple",
    isChecked: false


}

$("#start").on("click", function () {
    $(".instructions").hide();
    $("#start").hide();
    $("#content").html("<h3>" + l1q1.level + "</h3><br> <p>" + l1q1.question + "</p> <br> <div class='container options'> <img class='float-right' src='" + l1q1.image + "' alt='Fruit' width='160px' height='160px'> <form id='myForm'><div class='radio'>  <label><input type='radio' name='" + l1q1.name + "' value='" + l1q1.option1 + "'>" + l1q1.option1 + "</label> </div> <div class='radio'> <label><input type='radio' name='" + l1q1.name + "' value='" + l1q1.option2 + "'>" + l1q1.option2 + "</label> </div> <div class='radio'> <label><input type='radio' name='" + l1q1.name + "' value='" + l1q1.option3 + "'>" + l1q1.option3 + "</label> </div> <div class='radio'> <label><input type='radio' name='" + l1q1.name + "' value='" + l1q1.option4 + "'>" + l1q1.option4 + "</label> </div></form></div> <br> <button class='btn btn-success answer'> Submit </button>");

    $("input").on("click", function() {
        l1q1.isChecked = true;
    });

    $("button.answer").click(function () {
        console.log("Hello");
        
        if ($(':checked').val() === l1q1.answer) {
            $("#content").html("<h3>" + l1q1.level + "</h3><br> <p>Congratulations! That's Correct!</p> <br> <div class='container options'> <img class='float-right' src='" + l1q1.image + "' alt='Fruit' width='160px' height='160px'> <form id='myForm'><div class='radio'>  <label><input type='radio' name='" + l1q1.name + "' value='" + l1q1.option1 + "'>" + l1q1.option1 + "</label> </div> <div class='radio'> <label><i class='fas fa-check'></i>" + l1q1.option2 + "</label> </div> <div class='radio'> <label><input type='radio' name='" + l1q1.name + "' value='" + l1q1.option3 + "'>" + l1q1.option3 + "</label> </div> <div class='radio'> <label><input type='radio' name='" + l1q1.name + "' value='" + l1q1.option4 + "'>" + l1q1.option4 + "</label> </div></form></div> <br> <button class='btn btn-success answer'> Submit </button>");
        } else if (l1q1.isChecked && $(':checked').val() !== l1q1.answer) {
            $("#content").html("<h3>" + l1q1.level + "</h3><br> <p>Sorry. That's incorrect!</p> <br> <div class='container options'> <img class='float-right' src='" + l1q1.image + "' alt='Fruit' width='160px' height='160px'> <form id='myForm'><div class='radio'>  <label><input type='radio' name='" + l1q1.name + "' value='" + l1q1.option1 + "'>" + l1q1.option1 + "</label> </div> <div class='radio'> <label><i class='fas fa-check'></i>" + l1q1.option2 + "</label> </div> <div class='radio'> <label><input type='radio' name='" + l1q1.name + "' value='" + l1q1.option3 + "'>" + l1q1.option3 + "</label> </div> <div class='radio'> <label><input type='radio' name='" + l1q1.name + "' value='" + l1q1.option4 + "'>" + l1q1.option4 + "</label> </div></form></div> <br> <button class='btn btn-success answer'> Submit </button>");
        }


    });
});