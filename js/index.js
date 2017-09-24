var a = [];
var title, intro, link;
function getItAll(){
  var input = document.getElementById('inputBox').value;
    if (input !== ''){   
      $.ajax({
      type: "GET",
      url: 'https://en.wikipedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts&exintro=1&explaintext=1&exsentences=1&exlimit=10&gsrsearch='+input,
       dataType: 'jsonp',
      success: function (data){
        a = $.map(data.query.pages, function(v, i) {
            return [v];
        });
        a.forEach(function(v, i){
          title = v.title;
          intro = v.extract;
          link = 'https://en.wikipedia.org/?curid='+v.pageid;
          $("#myDiv").append("<div class='well myText'><h5><a href='"+link+"' target='_blank'>"+title+"</a></h5><p>"+intro+"</p></div><hr>");
          $("h3").remove();
          $("footer").css("margin-top", "5%");
          $("#row").css("margin-bottom", "3%");
    } 
   );
    }});
    }
    else
      return;
}
$(document).ready(function(){
  $("#searchBtn").on("click", function(){
    getItAll();
  });  
})