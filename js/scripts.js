function replacer(sentence, unword, reword){
  var newSentence = sentence.replace(unword, reword);
  return newSentence;
};

$(document).ready(function() {

  $("form#replacer").submit(function(event) {
    var sentence = $("input#sentence").val();
    var unword = $("input#unword").val();
    var reword = $("input#reword").val();
    var newSentence = replacer(sentence, unword, reword);
    $(".input").empty();
    $(".input").text(sentence);

    $(".result").empty();
    $(".result").text(newSentence);

    $(".showme").show();
    event.preventDefault();
  });
});
