//Dom Manipulation movie content area edit
function movieTemplate(movie) {
    return `
  <div class="movies">
    <img class="movie-photo" src="${movie.image}">
  <h2 class="movie-name">${movie.name}<p class="descrpt">${movie.descrpt}</p></h2>
  <div class="like-box">
  <p onclick="like(${movie.post})" class="rate movie-${movie.post}">Like ${movie.icon}<i class="fas fa-thumbs-up">  </i><button class="circle movie-${movie.post}">0</button></p>
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
        // enter what the function does here
    });
    /*var likes = 0; // change to let*/


});

function like(number) {
    let likes = $(`.circle.movie-${number}`).text();
    likes = parseInt(likes) + 1;

    console.log(likes);
    console.log(number);

    $(`.circle.movie-${number}`).text(likes);

}
// Click for Likes - it works fine

$(document).ready(function() {
    $("span").click(function() {
        $(".movies").slideToggle(1000); // ? 
    });

});