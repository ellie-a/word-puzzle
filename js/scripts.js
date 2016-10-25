$(document).ready(function(){
  $ ("form#puzzle").click(function(event) {

    var userInput =  $("input#original").val().toUpperCase();
    var letters = userInput.split("");
    var length = letters.length;

    for (var i = 0; i <= length; i += 1) {
      if (letters[i] === "A" || letters[i] === "E" || letters[i] === "I" || letters[i] === "O" || letters[i] === "U") {

        letters[i] = letters[i].replace("A", "-");
        letters[i] = letters[i].replace("E", "-");
        letters[i] = letters[i].replace("I", "-");
        letters[i] = letters[i].replace("O", "-");
        letters[i] = letters[i].replace("U", "-");
      }
    }

    var finalSentence = letters.join(" ");
    $("#sentenceOutput").text(finalSentence);
    event.preventDefault();

    });
});
