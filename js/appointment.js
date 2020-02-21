var ClientName = document.getElementById("ClientName");
var emailaddress = document.getElementById("emailaddress");  
var ClientNumber = document.getElementById("ClientNumber");
var daydate = document.getElementById("daydate"); 
var timedate = document.getElementById("timedate"); 
var Comments_and_Questions = document.getElementById("Comments_and_Questions");

function SubmitClick_2() {
    window.alert("Your message has been sent !");
    var firebaseRefTwo = firebase.database().ref(); 



    var ClientName = $("#ClientName").val();
    var emailaddress = $("#emailaddress").val();
    var ClientNumber = $("#ClientNumber").val();
    var daydate = $("#daydate").val();
    var timedate = $("#timedate").val();
    var Comments_and_Questions = $("#Comments_and_Questions").val();
   
   

   // firebaseRef.child("Text").set(MessageText);
    
   firebaseRefTwo.push({
    'Name':ClientName, 
    'Email address':emailaddress,
    'Phone Number':ClientNumber,
    'Call Day':daydate,
    'Time of Day to call':timedate,
    'Comment_and_Questions':Comments_and_Questions,
});

   }






