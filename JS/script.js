const form = document.getElementsByTagName('form')[0];
function validate() {
    var Username = document.getElementById("Uname");
    var Password =document.getElementById("Password");
    var regexp_user ='admin';
    var regexp_pswd='12345';
    if (Username.value.trim() === "") {
        alert("Empty User name");
        return false;
    }
    else if (Username.value!=regexp_user)
      {
        alert("Invalid User name");
        return false;
    }
    else if (Password.value!=regexp_pswd)
      {
        alert("Invalid Password");
        return false;
    }
    else {
        return true;
    }
}
form.addEventListener('submit', function (event) {

    if (!validate()) {
        
        event.preventDefault();
    }
});

