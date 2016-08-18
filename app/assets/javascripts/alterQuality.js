$(document).ready(function(){
  upgradeQuality()
  downgradeQuality()
  });

function upgradeQuality(){
  $('.any-idea').delegate('#upgrade-quality', 'click', function(){
    var id = $(this).closest('#idea').data('idea-id')
    var closestIdea = $(this).closest('#idea')
  $.ajax({
    type: "PATCH",
    url: "/api/v1/ideas/" + id,
    data: {changeValue: "increase"},
    dataType: "json",
    success: function(data){
    closestIdea.find('#idea-quality-show').text('Quality: ' + data.quality)
    }
    })
})
}

function downgradeQuality(){
  $('.any-idea').delegate('#downgrade-quality', 'click', function(){
    var id = $(this).closest('#idea').data('idea-id')
    var closestIdea = $(this).closest('#idea')
  $.ajax({
    type: "PATCH",
    url: "/api/v1/ideas/" + id,
    data: {changeValue: "decrease"},
    dataType: "json",
    success: function(data){
    closestIdea.find('#idea-quality-show').text('Quality: ' + data.quality)
    }
    })
})
}
