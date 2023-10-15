document.getElementById('submitForm').addEventListener('submit', function(event) {
    event.preventDefault();
   
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
   
    if (name === "" || email === "") {
       document.getElementById('error').innerHTML = 'Please fill in all required fields.';
    } else {
       document.getElementById('error').innerHTML = '';
       alert('Form submitted successfully!');
    }
   });
   <script src="formSubmission.js"></script>