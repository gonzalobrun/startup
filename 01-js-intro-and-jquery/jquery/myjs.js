$(document).ready(function() {
	$(".header").slideDown(1000);
    $(".hide").fadeIn(1000, function() {
  	  $(".alias").focus();
	});
});

$(document).ready(function() {
    $(".content, .button, .alias, .search, .footer").fadeIn(1000);
});

$(document).ready(function(){
  $(".button").click(function() {
    var name = $('#alias').val();
    $.get("http://bootcamp.dsupport2000.com/"+name).always(function(resp, textStatus, jqxhr) {
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

/*

$(document).ready(function(){
    $(".rolling").click(function(){
        $(".spot").empty();
        $.ajax({
            url:'https://api.spotify.com/v1/search',
            data: {"q":'Rolling Stones', "type":'album'},
            type: 'GET',
            dataType: 'json',
            success: function(json){
                $.each(json, function(i, albums){
                    $.each(albums.items, function(i, item){
                        $("article.spot").append("Name: "+ item.name + "<br>");
                        $("article.spot").append("Type: " + item.type + "<br>");
                        $("article.spot").append("<img src='" + item.images[1].url + "'/><br>");
                        $("article.spot").append("<a href='" + item.uri + "'><button type='button' class='play'>Play It</button></a> <br><hr>");
                    });
                    
                });
            }
        });
    });
});

*/


$(document).ready(function(){
    $(".search").click(function(){
        $(".spot").empty();
        var artist = $('#artist').val();
        if (artist == ""){
            artist = 'Rolling Stones';
        }
        $.ajax({
            url:'https://api.spotify.com/v1/search',
            data: {"q": artist, "type":'album'},
            type: 'GET',
            dataType: 'json',
            success: function(json){
                $.each(json, function(i, albums){
                    $.each(albums.items, function(i, item){
                        $("article.spot").append("Name: "+ item.name + "<br>");
                        $("article.spot").append("Type: " + item.type + "<br>");
                        $("article.spot").append("<img src='" + item.images[2].url + "'/><br>");
                        $("article.spot").append("<a href='" + item.uri + "'><button type='button' class='play'>Play It</button></a> <br><hr>");
                    });
                    
                });
            }
        });
    });
});