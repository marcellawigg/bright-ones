$(document).ready(function(){
  deleteIdea()
});

function deleteIdea(){
  $('.any-idea').delegate('.remove-button', 'click', function(){
    var id = $(this).closest('#idea').data('idea-id')
    var closestIdea = $(this).closest('#idea')

  $.ajax({
    type: "DELETE",
    url: "api/v1/ideas/" + id,
    success: function(data) {
      $(closestIdea).remove();
    }
  });
  }
  })
}
