$(document).ready(function() {
  $("#formOne").submit(function() {
  let userSentence = $("input#sentence").val()
  let words = userSentence.split(' ');
  function threeOrMore(word) {
    return word.length >= 3
  }
 let endArray = words.filter(threeOrMore)
 
  endArray.reverse();
  endArray.forEach(function(word){
    $("#results").append(word.toString()+ " ")
    
  })
  
    event.preventDefault();
  });
});
