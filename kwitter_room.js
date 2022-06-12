
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


user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="Welcome " + user_name + "^_^"

function addRoom()
{
      Room_name = document.getElementById("room_name").value
      
      firebase.database().ref("/").child(Room_name).update({
            purpose : "adding room name"
      });
        
      localStorage.setItem("room_name", room_name );

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_name)   ;
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
});});}

getData();
function redirectToRoomName(name)
{
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
  window.location = "index.html";
}