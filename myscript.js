$(document).ready(function(){

   $("#myform").submit(function(){

   	  var search = $("#books").val();
   	  if(search == "")
   	  {
   	  	alert("Please enter something in the field");
   	  }
   	  else{
   	  var url = "";
   	  var img = "";
      var title = "";
      var author = "";

   	  $.get("https://www.googleapis.com/books/v1/volumes?q=" + search,function(response){

          for(i=0;i < response.items.length ;i++)
          {
           title=$('<h5 class="white-text">' + response.items[i].volumeInfo.title + '</h5>');
           author=$('<h5 class="white-text"> By:' + response.items[i].volumeInfo.authors + '</h5><a href=' + response.items[i].volumeInfo.infoLink + '><button id="imagebutton" class="btn red aligning">Read More</button></a>');
           img = $('<img class="aligning card z-depth-5" id="dynamic"><br>');
           url= response.items[i].volumeInfo.imageLinks.thumbnail;
           img.attr('src', url);

          // $('#result').append('<div id="' + response.items[i].volumeInfo.authors + '">'
          //   + title.value +
          //
          // '</div>');

            var div = $("<div/>").attr('id',"div"+i);


            img.appendTo(div);
           title.appendTo(div);
           author.appendTo(div);
           div.appendTo('#result');
            // title.appendTo('#result');
           // author.appendTo('#result');
           // img.appendTo('#result');
          }
   	  });

      }
      return false;
   });

});
