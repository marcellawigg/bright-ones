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
  $('.all-ideas').prepend('<div class="created-idea"><ul id="idea-title-show" idea-title-i
