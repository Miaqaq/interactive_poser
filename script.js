
$(document).ready(function(){
	console.log('hi')



    $( ".validatedForm" ).submit(function( event ) {
        var codeEntered = $('.code-input').val();
        if (codeEntered == 'greed') {
            window.open("5.html");
        }
        event.preventDefault();

        $()
    });


	$('#fp4').click(function(){
		console.log('clicked')
		$(".elevator1").show("slow",function(){
		});

	});


    $("#money").click(function(){
        console.log('clicked');
        $(".elevator2").show(5000,function(){

        });
    });

   

	$( function() {
    $( "#fire" ).draggable(
 {
        drag: function(){
            var offset = $(this).offset();
            var xPos = offset.left;
            var yPos = offset.top;
            $('#posX').text('x: ' + xPos);
            $('#posY').text('y: ' + yPos);
        }
    }
    	);


    $('#lust').droppable(
    {
        accept: '#fire',
        over : function(){
            $(this).animate({'color' : 'black'
                            }, 3000);
            // $('#dragThis').draggable('option','containment',$(this));
            $(".elevator2").show(5000,function(){


            	// $(this).animate({'color' : '#fff'
             //                }, 5000);

		});
        }
    });

  });
	$( function() {
    $( "#rat" ).draggable({
        drag: function( event, ui){
            var offset = $(this).offset();
            var xPos = offset.left;
            var yPos = offset.top;


            $('#posX').text('x: ' + xPos);
            $('#posY').text('y: ' + yPos);
          }
    }
        );

    $('#mouth2').droppable(
    {
        accept: '#rat',
        over : function(event,ui){
           
            // $('#dragThis').draggable('option','containment',$(this));
            // $(".mouth2").find ("src"d) .html("pictures/mouth4.png")
            // $(" ui.mouth2").html('<img src="pictures/mouth4.png">');

            $("#mouth2").hide();
            $("#mouth3").show();
            $("#rat").hide();
            $("#snake").hide();
            $("#frog").hide();
            $(".elevator2").show(5000,function(){ 
 

                // $(this).animate({'color' : '#fff          //                }, 5000);

        });
        }
    });

  });


    $( function() {
    $( "#key" ).draggable({
        drag: function( event, ui){
            var offset = $(this).offset();
            var xPos = offset.left;
            var yPos = offset.top;


            $('#posX').text('x: ' + xPos);
            $('#posY').text('y: ' + yPos);
          }
    }
        );

    $('#lock').droppable(
    {
        accept: '#key',
        over : function(event,ui){
           
            // $('#dragThis').draggable('option','containment',$(this));
            // $(".mouth2").find ("src"d) .html("pictures/mouth4.png")
            // $(" ui.mouth2").html('<img src="pictures/mouth4.png">');

            $("#jail").remove();
       
            $("#lock").hide();
     
          
            
        }
    });

  });


// $("#pot").css('cursor','url(pictures/stick.png),auto');
// });

	$( function() {
    $( "#frog" ).draggable();
  });
	$( function() {
    $( "#snake" ).draggable();
  });


    $( function() {
    $( "#greedy" ).draggable();
  });

    $( function() {
    $( "#banana" ).draggable();
  });

    $( function() {
    $( "#fish" ).draggable();
  });

    $( function() {
    $( "#tv" ).draggable();
  });

    $( function() {
    $( "#trash" ).draggable();
  });
    $( function() {
    $( "#key" ).draggable();
  });


     var obj = document.createElement("audio");
        obj.src="sound.mp3";
        obj.volume=1.0;
        obj.autoPlay=false;
        obj.preLoad=true;       
 
        $("#bird").click(function() {
            console.log('clicked')
            obj.play();
            console.log('music')
            alert("bird says: The world's most desperate prison, no one enforces you into the prision except yourself. You are being hurt if they are better than you. ") 
            $("#book").show();



        });



        $("#book").click(function(){
            alert("book says: Follow the sound.")
            $("#key").show();



        })

            $("#sleep").click(function(){
                console.log("clicked")
                $('.elevator2').show(5000);

            });

            $("#envy").click(function(){
                console.log("clicked")
                $('.elevator2').show(5000);

            });







// $(".validatedForm").validate({
//     rules:{
        

       
//         }
//     }
// })



$('button').click(function(){


    console.log($('.validatedForm').valid());
    console.log('clicked');
});



	
});

$(document).ready(function(){
  $(document).mousemove(function(e){
    $('#falling').css('left',e.pageX+"px");
    $('#falling').css('top',e.pageY+"px");
  });

  $('fall').css('cursor', 'none');
  $('#pot').hover(function(){
    $('#falling').hide();
    $("#pot").hide();
    $(".elevator2").show(5000,function(){

        });
    
    $("#pot2").show();

  });



});




$(document).ready(function() {
  setTimeout(function() {
    $("#hint").show();
  }, 5000);
});


$(".sloth").hover(function(){
    $("#sleep").animate({bottoom: '250px'});
}); 






