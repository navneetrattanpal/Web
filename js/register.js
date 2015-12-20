
Parse.initialize("MvC5c3Je3W0wla9RSgRmNRAEI73qRsS0bWFdVtuV", "YSfq4HErf8CJCaDJrvabCJBpsim8ejJlMWFizNYd");
//Register starts here here
//$(document).ready(function(){
//alert('ddd');
  $("#signup").submit(function(event){
	alert('aaa');							 
								 
	var user = new Parse.User();
	user.set("username", "mandyyy");
	user.set("password", "hh");
	user.set("role", "teacher");
	
	user.signUp(null, {
	success: function(user) {
	// Hooray! Let them use the app now.
	//alert('register');
	},
	error: function(user, error) {
	// Show the error message somewhere and let the user try again.
	alert("Error: " + error.code + " " + error.message);
	}
	});
 });
//}
//Register ends here