$(document).ready(function(){
  upgradeQuality();
  downgradeQuality();
  });

function upgradeQuality(){
  $(document).on('click', '.upgrade-quality', function(){
    var id = $(this).closest('#idea').data('idea-id');
    var closestIdea = $(this).closest('#idea');
  $.ajax({
    type: "PATCH",
    url: "/api/v1/ideas/" + id,
    data: {delta: "upgrade"},
    dataType: "json",
    success: function(data){
    closestIdea.find('#idea-quality-show').text(data.quality);
    }
  });
});
}

function downgradeQuality(){
  $(document).on('click', '.downgrade-quality', function(){
    var id = $(this).closest('#idea').data('idea-id');
    var closestIdea = $(this).closest('#idea');
  $.ajax({
    type: "PATCH",
    url: "/api/v1/ideas/" + id,
    data: {delta: "downgrade"},
    dataType: "json",
    success: function(data){
    closestIdea.find('#idea-quality-show').text(data.quality);
    }
  });
});
}
