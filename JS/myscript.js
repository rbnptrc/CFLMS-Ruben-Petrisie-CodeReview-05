//Dom Manipulation movie content area edit
function movieTemplate(movie) {
    return `
  <div class="movies">
    <img class="movie-photo" src="${movie.image}">
  <h2 class="movie-name">${movie.name}<p class="descrpt">${movie.descrpt}</p></h2>
  <div class="like-box">
  <p onclick="like(${movie.post})" class="rate movie-${movie.post}">Like ${movie.icon}<i class="fas fa-thumbs-up">  </i><button class="circle movie-${movie.post}"></button></p>
  </div>
  </div>
  `
}

//get Movie Data from json
$(document).ready(function() {

    $.getJSON("JS/movies.json", function(movieData) {
        document.getElementById("features").innerHTML = `
    ${movieData.map(movieTemplate).join('')}`
    });
    $(".rate").on("click", function() {
        console.log($(this).attr("class"));
    });
});

// Click for Likes - it works BUT ....almost NOT

var likes = 0;

function like(number) {
    $(`.circle.movie-${number}`).text(likes += 1);
    console.log(number);

    likes = $(`.circle.movie-1${movie.post}`).text(number)
    likes = parseInt(likes)
    likes = +1

}

// Sort Most Liked

$(document).ready(function() {
    $("span").click(function() {
        $(".movies").slideToggle(1000); // ? magic trick to add another function and display only a few most Liked not found.
    });

});