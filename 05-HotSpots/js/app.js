
$.getJSON('topspots.json', function(locations){

  $.each(locations, function(i, spot){
    var outputHTML = "<tr><td>" + spot.name
                   + "</td><td>" + spot.description
                   + "</td><td>" + spot.location + "</td></tr>";
    $("table").append(outputHTML);
  })
});