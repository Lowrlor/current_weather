//
$(document).ready(function () {
  $("form").click(function(event){
    event.preventDefault();
  });
  $('#submit').click(function () {
    if ($('input').val()) {
      window.location.replace($('input').val())
    }
  })
});
