var WebsiteMessage = document.getElementById("WebsiteMessage");


function SubmitClick() {
    window.alert("Your message has been sent !");

    var firebaseRef = firebase.database().ref();

    var MessageText = WebsiteMessage.value;

    //firebaseRef.child("Text").set(MessageText);

    firebaseRef.child('Text').push(MessageText);


}





