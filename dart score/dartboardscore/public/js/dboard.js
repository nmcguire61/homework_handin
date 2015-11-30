$('#myForm').submit(function(e) { 
  e.preventDefault();
    $('ul').append('<li>'+($("#entry").val())+'</li>');
});