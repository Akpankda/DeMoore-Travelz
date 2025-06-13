function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("All fields are required.");
      return false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return false;
    }

    // if (password.length < 6) {
    //   alert("Password must be at least 6 characters long.");
    //   return false;
    // }

    // If everything is valid
    return true;     
  
    
  }


  