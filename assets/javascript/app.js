// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var searchTerm="Steve Jobs";
var page=0;
var startDate="20170101";
var endDate="20180101";
url += '?' + $.param({
  'api-key': "378a13f136474043813790583756e34f",
  'q': searchTerm,
  'begin_date': startDate,
  'end_date': endDate,
  'page': page
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
  var article = result.response.docs;
  console.log(article);

  for (var i=0;i<article.length;i++){
    var letsGo = $("<div>");
    var articleTitle=$("<div>").text(article[i].headline.print_headline);
    var p=$("<p>").text("Snippet: "+ article[i].snippet);
    letsGo.append(articleTitle);
    letsGo.append(p);
  
  }

}).fail(function(err) {
  throw err;
  
});

