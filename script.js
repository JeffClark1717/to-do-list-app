function newItem() {
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    $('#list').append(li);
  }

  function crossOut() {
    li.toggleClass('strike');
  }

  li.on('dblclick', crossOut);

  let crossOutButton = $('<button>X</button>');
  crossOutButton.css('float', 'right');
  li.append(crossOutButton);

  crossOutButton.on('click', function() {
    li.addClass('delete');
  });

  $('#list').sortable();
}

$(document).ready(function() {
  $('#button').on('click', function() {
    newItem();
  });
  
  $('#input').on('keypress', function(event) {
    if (event.which === 13) {
      event.preventDefault();
      newItem();
    }
  });
});
