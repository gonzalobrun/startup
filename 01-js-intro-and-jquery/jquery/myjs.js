$(document).ready(function() {
    $(".hide").fadeIn(1500, function() {
  	  $(".alias").focus();
	});
});

$(document).ready(function() {
    $(".content").fadeIn(1000);
});

$(document).ready(function() {
    $(".button").fadeIn(1000);
});

$(document).ready(function() {
    $(".header").slideDown(1000);
});

 $(document).ready(function(){
 	$('.button').click(function(){
 		var $resp = $.get("http://bootcamp.dsupport2000.com/Natalia", function(resp){
 			$('.response').append(resp.response.greeting + ", " + resp.response.Welcome);
 		});
 	});
 });
