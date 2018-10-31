window.onload = function(){

}
$("#start").on("click",function(){
    var queryUrl = "https://opentdb.com/api.php?category=api_category&amount=10&type=multiple";
    
.ajax({
    url: queryUrl,
    method:"GET"
}).then(function(response))
})
//display the items for the page

$("<p>").text("#difficulty");
$("<p>").text("#category")

//timer for the trivia game
var windowTimeout = setTimeout(function() {
    alert("You have so many seconds left");
}, 1000*30;
triviaTimer = setTimeout(function() {
    alert("Alert #2: Called 3 seconds after the start button is clicked.");
  }, 3000);
});