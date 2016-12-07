function getQuote() {
  $.ajax({
    headers: {
      'X-Mashape-Key': <API_Key_Here>,
      'Accept': 'application/json',
    },
    //Quote API from Mashape. Category can = 'movies' or 'famous'
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous",
    success: function(response) {
      var r = JSON.parse(response);
      var quote = r.quote;
      var author = r.author;
      $(".quote").html(r.quote);
      $(".author").html(r.author);
      $("#tweetThis").attr('href', 'http://twitter.com/home?status=' + '"' + quote + '" - ' + author)
      $(".box").fadeIn("medium");
    }
  });
}

$(document).ready(function() {
  getQuote();
  $("#getQuote").on("click", function() {
    $(".box").fadeOut("fast", getQuote());
  })
});
