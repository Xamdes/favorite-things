var favorites;

$(function(){

  $("#btn-submit").click(function(event)
  {
    var inputOne = $("#input-one").val();
    var inputTwo = $("#input-two").val();
    var inputThree = $("#input-three").val();

    favorites = [inputOne,inputTwo,inputThree];
    $("#return").text(favorites.toString());
    event.preventDefault();
  });


});
