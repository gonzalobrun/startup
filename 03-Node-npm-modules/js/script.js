requirejs.config({
    paths: {
        jquery: 'jquery-2.2.0.min'
    }
});

require(['jquery', 'movies'], function($, movies){
    for (var i = myMovies.length - 1; i >= 0; i--) {
        $('#films').append("<option value='"myMovies[i].name"'>" + myMovies[i].name + '</option>');
    };

    $('#list option:selected').change(function(){
        $('data').append("Genre: " + myMovies[i].genre + "<br>");
        $('data').append("Genre: " + myMovies[i].duration + "<br>");
        $('data').append("Genre: " + myMovies[i].release_date + "<br>");
        $('data').append("Genre: " + myMovies[i].director.name + "<br>");
    });




        
});