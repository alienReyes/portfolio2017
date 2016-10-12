$(document).ready(function() {
  $.getJSON('js/data.json', function(data) {
     var template = document.getElementById('buttons__Grid').innerHTML;
  var html = Mustache.to_html(template, data);
  $('.grid').html(html);
  });
  });



$('body').on('click', 'figure', function(e) {
  $('#myModal').modal('toggle')


})
