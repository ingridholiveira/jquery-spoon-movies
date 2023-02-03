var api_key = "a3005072";
var api_url = "http://www.omdbapi.com/?apikey=" + api_key;

$(document).ready(function () {
  $("#search").click(function () {
    $.getJSON(api_url + "&t=" + $("#textSearch").val(), function (data) {
      var rating = data.imdbRating;
      let i = 1;
      var review = "";
      while (rating >= i) {
        review +=
          '<mat-icon role="img" class="mat-icon notranslate ml-2 material-icons mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font">star</mat-icon>';
        i++;
      }
      $("#movieCard").html(
        $("#movieCard")
          .html()
          .replace("{{movie.Title}}", data.Title)
          .replace("{{movie.Plot}}", data.Plot)
          .replace("{{movie.Actors}}", data.Actors)
          .replace("{{movie.Poster}}", data.Poster)
          .replace("{{movie.Review}}", review)
      );

      $("#movieCard").show("slow");
    });
  });
  $("#clean").click(function () {
    $("#textSearch").val("");
    $("#movieCard").hide("slow");
    location.reload();
  });
});
