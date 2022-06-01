var firebaseConfig = {
    apiKey: "AIzaSyB7EzZgAt_p16ejCGgWa-cQRczGoJDBM6Y",
    authDomain: "workable-a06a3.firebaseapp.com",
    databaseURL: "https://workable-a06a3-default-rtdb.firebaseio.com",
    projectId: "workable-a06a3",
    storageBucket: "workable-a06a3.appspot.com",
    messagingSenderId: "143557295414",
    appId: "1:143557295414:web:26681170480233aea0c797"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function save() {
      card_number = document.getElementById("card_number").value;
      email_id = document.getElementById("email_id").value;
      pasword = document.getElementById("pasword").value;
      name = document.getElementById("name").value;
      console.log(name);
      window.location = "employer_home.html";
      localStorage.setItem("name", name);
      localStorage.setItem(card_number);
      localStorage.setItem(email_id);
  
      firebase.database().ref(name).push({
        card_number : card_number,
        email_id : email_id,
        pasword : pasword,
        name : name
  });
  localStorage.setItem("name", name);
  
      
  }