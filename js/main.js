$('#home').on('pageinit', function(){
	//code needed for home page goes here
	
	
});	

		
$('#additem').on('pageinit', function(){

		var rlForm = $('#mainForm');
		    rlForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var key = rlForm.serializeArray();
			storeData(key);
			
		}
	});




//Stores form data into Local Storage
	function storeData(key){
	//If there is no key, this means this is a brand new item and we need a new key
	if(!key){
		var id 					= Math.floor(Math.random()*1000001);
	}else{
		//Set the id to the existing key we're editing so that it will save over the existing data.
		//This is key is the same key that has been passed along from the editSubmit event handler
		//to the validate function, and then passed here, into the storeData function.
		id = key;
	}
		// Gather up all of our form field values and store them in an object.
		//Object properties contain array with the form label and input value which will allow us to label the data.
		
		var item 				= {};
			item.genres			= ["Genre:", $("#genres").val()];
			item.songName		= ["Title:", $("#songName").val()];
			item.artist			= ["Artist:", $("#artist").val()];
			item.rating			= ["Rating:", $("#rating").val()];
			item.notes			= ["Notes:", $("#notes").val()];
		//Save data into Local Storage: Use "Stringify" to convert our objects to strings (Local storage can only store strings
		localStorage.setItem(id, JSON.stringify(item));
		alert("Song Saved!"); 		
 	}

/*
var autofillData = function (){
	 
};

var getData = function(){

};


var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};
*/
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.


