$(document).ready(function(){
  createIdea()
});

function createIdea(){
  $('#submit-button').click(function(){
    var ideaParams = {title: $('#idea-title').val(), body: $('#idea-body').val()}
    $.ajax({
      type: "POST",
      url: "api/v1/ideas",
      data: ideaParams,
      success: function (idea){
        generateIdea(idea)
        $('#idea-title').val('');
        $('#idea-body').val('');
    }
  });
})
};

function generateIdea(idea){
  $('.all-ideas').prepend('<div class="created-idea"><ul id="idea-title-info" idea-title-id =' +
  idea.id +' contentEditable="true">' + 'Title: ' +idea.title +
  '</ul><ul id="idea-info" idea-body-id =' + idea.id +
  ' contentEditable="true">' + 'Body: ' + idea.body + '</ul><ul>Quality: ' + idea.quality  +
  '</ul><ul><button id="upgrade-quality" type="button"> Thumbs Up </button>' +
  '<button id="downgrade-quality" type="button"> Thumbs Down </button></ul>' +
  '<ul><div class="remove-button"><input type="submit" value="Delete">' +
  '</div></ul></div>')
}
