/* Feel free to discard this code, this just shows you some of the information
that we have available to display.

So pretty much we have all of the hymns and the speakers from october-2014
General Conference. I couldn't find more recent sessions in JSON format, and
unfortunately we don't have the text, but we have a link at least.

Let me know if you have any questions.*/
$("#query").keyup(function() {
  console.log("Working with query: " + $("#query").val());
  var url = "http://colelyman.com:8080/gc?q=" + $("#query").val();
  $.getJSON(url, function(data) {
    var talks;
    talks = "<ul>";
    $.each(data, function(i, item) {
      talks += "<li>" + "<span class=\"title\">" + data[i].Title + "</span>";
      talks += "<a href=\"" + data[i].Media[2].URL + "\">";
      talks += "<img src=\"" + data[i].Images[0].URL + "\"/>" + "</a>" + "</li>";
    });
    $("#returnStuff").html(talks);
    talks += "</ul>";
  });
});
