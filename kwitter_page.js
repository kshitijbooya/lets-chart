//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDaDRsEYJIdFxZWsfD2HZIi0u54BcPCPjY",
      authDomain: "kwitter-app-f245b.firebaseapp.com",
      databaseURL: "https://kwitter-app-f245b-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-f245b",
      storageBucket: "kwitter-app-f245b.appspot.com",
      messagingSenderId: "1054238623578",
      appId: "1:1054238623578:web:e9bd8a028feb907b881563",
      measurementId: "G-7EE451RDJE"
     };
firebase.initializeApp(firebaseConfig);
      user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
