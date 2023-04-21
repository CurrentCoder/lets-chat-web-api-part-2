const firebaseConfig = {
    apiKey: "AIzaSyCXR2s0vrbvZ3Q9uSSszYOCdIHZh6LuG4M",
    authDomain: "let-chat-kwitter.firebaseapp.com",
    projectId: "let-chat-kwitter",
    storageBucket: "let-chat-kwitter.appspot.com",
    messagingSenderId: "674779087675",
    appId: "1:674779087675:web:e5cc2ff799a811dad46d1e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function addRoom() 
   {
    room_name = document.getElementById("room_name").value;
    
     firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
     });

     localStorage.setItem("room_name", room_name);

     window.location = "kwitter_page.html";
   }