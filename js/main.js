$(document).ready(function() {
  $(".reveal").click(function() {
    $(this).next(".hidden").toggle();
  });
});
