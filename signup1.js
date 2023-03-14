const firebaseConfig = {
    apiKey: "AIzaSyAhC7Jkg7LQC7axH2iotEqlsVxN8ewLiOs",
    authDomain: "bloodline-auth.firebaseapp.com",
    databaseURL: "https://bloodline-auth-default-rtdb.firebaseio.com",
    projectId: "bloodline-auth",
    storageBucket: "bloodline-auth.appspot.com",
    messagingSenderId: "599500515376",
    appId: "1:599500515376:web:45c108139bbf23e2c425f5"
  };

  

firebase.initializeApp(firebaseConfig);

var database = firebase.database().ref('main')

document.getElementById("main").addEventListener("submit",registration);

const saveMessages = (t1,t2,t3,t4,t5) => {
	var newContactForm = database.push();

	newContactForm.set({
		name : t1,
		email : t2,
		username : t3,
		password: t4,
		
	})

}
const login = [...document.querySelector('.login').children];
login.forEach((item, i) => {
	setTimeout(() => {
		item.getElementsByClassName.opacity = 1;
	}, i*100);
})

function registration()
	{

		var name= document.getElementById("t1").value;
		var email= document.getElementById("t2").value;
		var uname= document.getElementById("t3").value;
		var pwd= document.getElementById("t4").value;			
		var cpwd= document.getElementById("t5").value;
		
        //email id expression code
		var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		var letters = /^[A-Za-z]+$/;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if(name=='')
		{
			alert('Please enter your name');
		}
		else if(!letters.test(name))
		{
			alert('Name field required only alphabet characters');
		}
		else if(email=='')
		{
			alert('Please enter your user email id');
		}
		else if (!filter.test(email))
		{
			alert('Invalid email');
		}
		else if(uname=='')
		{
			alert('Please enter the user name.');
		}
		else if(!letters.test(uname))
		{
			alert('User name field required only alphabet characters');
		}
		else if(pwd=='')
		{
			alert('Please enter Password');
		}
		else if(cpwd=='')
		{
			alert('Enter Confirm Password');
		}
		else if(!pwd_expression.test(pwd))
		{
			alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
		}
		else if(pwd != cpwd)
		{
			alert ('Password not Matched');
		}
		else if(document.getElementById("t5").value.length < 6)
		{
			alert ('Password minimum length is 6');
		}
		else if(document.getElementById("t5").value.length > 12)
		{
			alert ('Password max length is 12');
		}
		else
		{				                            
               alert('Thank You for Login & You are Redirecting to login page');
			   // Redirecting to other page or website code. 
			   window.location = "login1.html"; 
		}
		saveMessages(name,email,uname,pwd,cpwd);
	}

	

	function clearFunc()
	{
		document.getElementById("t1").value="";
		document.getElementById("t2").value="";
		document.getElementById("t3").value="";
		document.getElementById("t4").value="";
		document.getElementById("t5").value="";
	}