
// start function
function validate(){
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("confirm").value;
    var result = document.getElementById("result");

    result.setAttribute("class","alert alert-danger text-center");

// start if
    if(user=="" && email=="" && pass=="" && confirm==""){
        result.innerHTML = "Enter Data in Form";
        return false;
    }else if (user.length<5 || user.length>15){
        result.innerHTML = "Enter 5-15 Character in username";
        return false;
    }else if (email.indexOf("@")==-1 || email.indexOf(".com") ==-1){
        result.innerHTML = "Enter Vaild Email";
        return false;
    }else if (pass.length==""){
        result.innerHTML = "Enter Password";
        return false;
    }else if (pass.length<8){
        result.innerHTML = "Weak Password";
        return false;
    }else if (pass != confirm){
        result.innerHTML = "Not Matched Password";
        return false;
    }
}