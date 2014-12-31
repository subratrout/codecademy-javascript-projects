var main = function() {
   var cities = [
      "Boston",
      "New York",
      "Miami",
      "Los Angeles",
      "Chicago",
      "Baltimore",
      "Charlotte",
      "Detroit",
      "Dallas",
      "Fort Worth",
      "Galveston",
      "Houston",
      "San Jose",
      "Phoenix",
      "San Francisco",
      "Portland",
      "Atlanta",
      "San Antonio",
      "San Diego"
    ];

    $('#search').autocomplete({ source: cities});
}

$(document).ready(main);
