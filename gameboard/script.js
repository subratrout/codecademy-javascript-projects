var main = function() {
  $(".more-btn").click(function() {
    $(".more-menu").toggle();
  })
  $(".share").click(function() {
    $(this).next().toggle();
  })
  $(".notification").click(function() {
    $(this).toggleClass("active");
  })
};
$(document).ready(main);
