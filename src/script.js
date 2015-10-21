console.log("Hello");
$("#query").keyup(function() {
  console.log("Working with query: " + $("#query").val());
  var url = "http://colelyman.com:8080/gc?q=" + $("#query").val();
  $.getJSON(url, function(data) {
    var talks;
    talks = "<ul>";
    $.each(data, function(i, item) {
      talks += "<li>" + "<span class=\"title\">" + data[i].Title + "</span>";
      talks += "<a href=\"" + data[i].Media[2].URL + ">";
      talks += "<img src=\"" + data[i].Images[0].URL + "/>" + "</a" + "</li>";
    });
    $("#returnStuff").html(talks);
    talks += "</ul>";
  });
});
