$(document).ready(function(){
  createIdea();
});

function createIdea(){
  $('#save-idea-button').click(function(){
    var ideaParams = {title: $('#idea-title').val(), body: $('#idea-body').val()};
    $.ajax({
      type: "POST",
      url: "api/v1/ideas",
      data: ideaParams,
      success: function (idea){
        generateIdea(idea);
        $('#idea-title').val('');
        $('#idea-body').val('');
    }
  });
});
}

function generateIdea(idea){
  $('.any-idea').first().prepend("<div class='any-idea'><div class='created-idea' data-idea-id =" + idea.id + " id='idea'><ul class='idea-title-info' data-title-id =" + idea.id + " contentEditable='true'><strong>Title: </strong>" + idea.title + "</ul><ul class='idea-body-info' idea-body-id =" +  idea.id  + " contentEditable='true'><strong>Body: </strong>" +  idea.body  + "</ul><ul class='idea-quality-info' idea-body-id = " +  idea.id  + ">Quality: " +  idea.quality  + "</ul><ul><button class='upgrade-quality' type='button'>Thumbs Up</button><button class='downgrade-quality' type='button'>Thumbs Down</button></ul><ul><div class='remove-button'><input type='submit' value='Delete'></div></ul></div>");
}
