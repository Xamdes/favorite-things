var favoritesOne;
var favoritesTwo;

$(function(){

  $("#btn-submit").click(function(event)
  {
    var inputOne = $("#input-one").val();
    var inputTwo = $("#input-two").val();
    var inputThree = $("#input-three").val();

    favoritesOne = [inputOne,inputTwo,inputThree];
    favoritesTwo = [];
    $("#return").text(favoritesOne);
    favoritesTwo.push("<li>"+favoritesOne[1]+"</li>");
    favoritesTwo.push("<li>"+favoritesOne[0]+"</li>");
    favoritesTwo.push("<li>"+favoritesOne[2]+"</li>");

    $("#list").append(favoritesTwo);

    event.preventDefault();
  });


});
