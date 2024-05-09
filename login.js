function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password_user").value;

    let website_username = "bansi";
    let website_password = "123456789";

    if(username === website_username && password === website_password){
        window.location = "portfolio.html"
    }
    else if(username === "" && password === ""){
        alert("please enter the User Name and Password")
    }
    else if(username == website_password && password !== website_password){
        document.getElementById("username").style.border = "1px solid green";
        document.getElementById("password_user").style.border = "1px solid red";
        alert("password is incorrect")
    }
    else if(username !== website_password && password == website_password){
        document.getElementById("username").style.border = "1px solid red";
        document.getElementById("password_user").style.border = "1px solid green";
        alert("user name is incorrect")
    }
    else{
        document.getElementById("username").style.border = "1px solid red";
        document.getElementById("password_user").style.border = "1px solid red";
    }
}