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

$(document).ready(function(){
    $(".search").click(function(){
        alert("THIS IS A TEST");
        $.ajax({
            url:'https://api.spotify.com/v1/search',
            data: {"q":'Rolling Stones', "type":'album'},
            type: 'GET',
            dataType: 'json',
            done: function  (json){
                $.each(json), function(index, value){
                    $.each(value.item), function(index, item)
                    {
                        $("article.spot").append("Name: "+ item.name+ "<br>");
                        $("article.spot").append("Type: " + item.type + "<br>");
                        $("article.spot").append("Album Cover: <img src='" + item.images[1].url + "'/><br>");
                        $("article.spot").append("<a href='" + item.external_urls.spotify + "'>Play It!</href>");
                    }
                }
            }
        });
    });
});
