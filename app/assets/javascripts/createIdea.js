$(document).ready(function(){
  createIdea();
});

function createIdea(){
  $('#submit-button').click(function(){
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
  $('.all-ideas').prepend("<div class='any-idea'><div class='created-idea' data-idea-id =" + idea.id + " id='idea'><ul id='idea-title-show' data-title-id = " + idea.id + "contentEditable='true'><strong>Title: </strong>" + idea.title + "</ul><ul id='idea-body-show' idea-body-id =" +  idea.id  + "contentEditable='true'><strong>Body: </strong>" +  idea.body  + "</ul><ul id='idea-quality-show' idea-body-id = " +  idea.id  + ">Quality: " +  idea.quality  + "</ul><ul><button id='plus-quality' type='button'>Thumbs Up</button><button id='minus-quality' type='button'>Thumbs Down</button></ul><ul><div class='remove-button'><input type='submit' value='Delete'></div></ul></div>");
}
