

// jquery container doc ready
$(() => {


  // new background with each new tab
  // rnadom
  $("html").css({
    "background-image": "url('https://source.unsplash.com/random/3840x2160')",
    "background-repeat": "no-repeat",
    "background-size": "cover"
  });

  let quote = "";
  let author = "";

  $.get("https://quote-garden.herokuapp.com/api/v2/quotes/random", (data) => {
    quote = data.quote.quoteText;
    author = data.quote.quoteAuthor;
    let newQuote = $('<p>' + quote + '</p>' + '<h3>' + author + '</h3>');
    $(".retrievedQuote").html(newQuote);
  })




})
