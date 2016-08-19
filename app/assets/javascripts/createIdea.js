$(document).ready(function(){
  createIdea();
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
  $('.all-ideas').prepend('<div class="any-idea"><p><div class="created-idea" data-idea-id = ' + idea.id + ' id="idea"><ul><strong>Title: </strong><li id="idea-title-info" data-title-id = ' + idea.id + ' contentEditable="true">' + idea.title  + '</li><strong>Body: </strong><li id="idea-body-info" data-body-id = ' + idea.id + ' contentEditable="true">' + idea.body + '</li><strong>Quality: </strong><li id="idea-quality-show">' + idea.quality + '</li><button id="upgrade-quality" type="button"> Up </button> <button id="downgrade-quality" type="button"> Down </button><div class="remove-button"><input type="submit" value="Delete"></div></ul></p></div></div>');
}
