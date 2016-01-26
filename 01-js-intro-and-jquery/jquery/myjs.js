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
        $(".response").append(textStatus === "success" ? resp.response.greeting + ", " + resp.response.Welcome : textStatus + ", " + jqxhr);
        });    
    });
});

