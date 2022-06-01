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
    task_name = document.getElementById("Task_name").value;
    Task_Description = document.getElementById("Task_Description").value;
    Task_Wage = document.getElementById("Task_Wage").value;
    myFile = document.getElementById("myFile").value;
    console.log(task_name);
    window.location = "employer_home.html";
    localStorage.setItem("task_name", task_name);
    localStorage.setItem("Task_Description", Task_Description);
    localStorage.setItem("Task_Wage", Task_Wage);
    localStorage.setItem("myFile", myFile);

    firebase.database().ref(name).push({
        task_name : task_name,
        Task_Description : Task_Description,
        Task_Wage : Task_Wage,
        myFile : myFile
});
  }