var firebaseConfig = {
    apiKey: "AIzaSyB7GY1kf50L_rbC7uuBKn88wsQy8HXXzUU",
    authDomain: "kwitter-b87dc.firebaseapp.com",
    databaseURL: "https://kwitter-b87dc-default-rtdb.firebaseio.com",
    projectId: "kwitter-b87dc",
    storageBucket: "kwitter-b87dc.appspot.com",
    messagingSenderId: "468617573304",
    appId: "1:468617573304:web:9f7834a9c8b0413bab554d"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose = "addUser"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() 
{
    firebase.database().ref("/").on('value', function(snapshot)
    {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) 
        {
            childKey  = childSnapshot.key;

            Room_names = childKey;

            console.log("Room Name- ", Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"
            </div> <hr>";
            document.getElementById("output").innerHTML = + = row;
});
});
}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}