$(document).ready(function(){
  updateIdeaTitle();
  updateIdeaBody();
  });

function updateIdeaTitle(){
  $('.all-ideas').on('blur', '.idea-title-info', function(){
    var id = $(this).closest('#idea').data('idea-id');
    var closestIdea = $(this).closest('#idea');
  $.ajax({
    type: "PATCH",
    url: "/api/v1/ideas/" + id,
    data: {title: $(this).text()},
    success: function(data){
    closestIdea.find('.idea-title-info').text(data.title);
  }});
});
}

function updateIdeaBody(){
  $('.all-ideas').on('blur', '.idea-body-info', function(){
    var id = $(this).closest('#idea').data('idea-id');
    var closestIdea = $(this).closest('#idea');
  $.ajax({
    type: "PATCH",
    url: "/api/v1/ideas/" + id,
    data: {body: $(this).text()},
    success: function(data){
    closestIdea.find('.idea-body-info').text(data.body);
  }});
});
}
