


// Your code goes here!
$('#sizePicker').submit(function(event){
         event.preventDefault();
    var h = $('#inputHeight').val();
    var w  = $('#inputWeight').val();   
    
    makeGrid(h, w);
    
})

function makeGrid(a,b) {
	$('tr').remove();


for(var i = 1; i <= a; i++){
  $('#pixelCanvas').append('<tr id = table' + i + '></tr>' );
  for(var s = 1; s <= b; s++){
      $('#table' + i).append('<td></td>');
  }
}


$('td').click(function addColor(){

	var color = $('#colorPicker').val();

	if($(this).attr('style')){


	   $(this).removeAttr('style');	
    
	}else{
		$(this).attr('style', 'background-color:' + color);
	}

})
}

