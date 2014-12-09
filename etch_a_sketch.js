$(document).ready( function ()
{
	//Creates a grid of a specified size by creating divs and appending them 
	//to a container div
	function createGrid (num)
	{
		for( var i = 0; i < (num * num); i++)
		{
			var $grid = $('<div></div>');
			$('#container').append($grid);
		}	

		//Sets grid === to height  and width of container
		//2 is used to account for the margin around the boxes.
		$('div div').height($('#container').height() / num - 2); 
		$('div div').width($('#container').width() / num - 2);
	}

	//Creates a color changing effect when the mouse enters one
	//of the divs created in createGrid.
	function changeColor()
	{
		$('div div').mouseenter(function() 
		{
			$(this).toggleClass('hover');
		});
	}

	//Prompts the user for a grid size when they click on the Create Grid button.
	function gridPrompt()
	{
		var gprompt = prompt("Enter a number between 1 & 100 to create a grid." +
		" For example, 60 will create a 60 x 60 grid.");
		
		//If the user hits cancel, exits the prompt.
		if ( gprompt === null) { return; }

		else if ( gprompt > 100 || gprompt < 1 || isNaN(gprompt) === true)
		{
			alert("Please enter a number between 1 & 100");
			gridPrompt();
		}	
		
		else 
		{
			//Removes previous grid
			$('div div').remove();	
			createGrid(gprompt);
			changeColor();
		}
	}	

	$('button').click( function() 
	{
		gridPrompt();
	});
});

