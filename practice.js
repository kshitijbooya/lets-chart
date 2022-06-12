
var firebaseConfig = {
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

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


