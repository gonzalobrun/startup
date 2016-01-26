$(document).ready(function() {
	$(".header").slideDown(1000);
    $(".hide").fadeIn(1500, function() {
  	  $(".alias").focus();
	});
});

$(document).ready(function() {
    $(".content, .button").fadeIn(1000);
});

$(document).ready(function(){
  $(".button").click(function() {
    $.get("http://bootcamp.dsupport2000.com/Natalia").always(function(resp, textStatus, jqxhr) {
    	if(textStatus === "success") { 
    		var greeting = resp.response.greeting.split(" ");
    	}
    	else{
    		$(".response").css({"background-color":"red", "color":"white"});
    	}
    	$(".response").empty();
        $(".response").append(textStatus === "success" ? greeting[0] + " <span> " + greeting[1] + "</span>, " + resp.response.Welcome : textStatus + " " + jqxhr);
        });    
    });
});

