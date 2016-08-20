$(document).ready(function(){
  deleteIdea();
});

function deleteIdea(){
  $(document).on('click', '.remove-button', function(){
    var id = $(this).closest('#idea').data('idea-id');
    var closestIdea = $(this).closest('#idea');
  var call = {
    type: "DELETE",
    url: "api/v1/ideas/" + id,
    success: function(data) {
      $(closestIdea).remove();
    }
  };
   $.ajax(call);
 });
}
