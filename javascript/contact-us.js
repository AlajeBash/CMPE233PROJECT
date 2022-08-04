
	function validation()
	{
    var name=document.getElementById("name").value;
	var surname=document.getElementById("surname").value;
    var phone=document.getElementById("phone").value;
	var email=document.getElementById("email").value;
    var message=document.getElementById("message").value;
    
	
		if(name==""){
			alert("Enter Your Name");
		}
		
		else if(surname==""){
			alert("Enter Your Surname");
		}
		
		else if(phone==""){
			alert("Enter Your Phone Number");
		}
		
		else if(email==""){
			alert("Enter Your E-mail Address");
		}
		
		else if(message==""){
			alert("Enter Your Message");
		}
		else{
			alert("Thank you for Contacting Us Our Team will reach soon");
		}
	}