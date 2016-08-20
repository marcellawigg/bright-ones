$(document).ready(function(){
  search();
});


function search(){
  $("#search-ideas").on('keyup', function(){
    var searchRequest = $(this).val().toLowerCase();
    console.log(searchRequest);

    $(".all-ideas .any-idea").each(function(index, idea){

      var title = $(this).find("ul li").first().text().toLowerCase();
      var body = $(this).find("ul li").text().toLowerCase();

      var containedAnywhere = title.indexOf(searchRequest) !== -1 || body.indexOf(searchRequest) !== -1;

      if (containedAnywhere){
        $(idea).show();
      }
      else {
        $(idea).hide();
      }
    });
  });
}
