// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyD93Q2Fw9oN5Sy4tVRiuLQvOxmcXJa3orY",
  authDomain: "contactform-84f22.firebaseapp.com",
  databaseURL: "https://contactform-84f22.firebaseio.com",
  projectId: "contactform-84f22",
  storageBucket: "contactform-84f22.appspot.com",
  messagingSenderId: "273647223172",
  appId: "1:273647223172:web:d91218f0d9dd72acbe5dd1",
  measurementId: "G-0ZS1GV6PW1"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('subject');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var fname = getInputVal('fname');
  var lname = getInputVal('lname');
  var country = getInputVal('country');
  var subject = getInputVal('subject');

  // Save message
  saveMessage(fname, lname, country, subject);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fname, lname, country, subject){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    fname: fname,
    lname:lname,
    country:country,
    subject:subject,
  });
}