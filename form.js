function abc(){
    let name1 =  document.getElementById("name").value;
    if(name1 == "" || !isNaN(name1) || name1.length < 3 || name1.length > 10){
        alert("Please enter the correct name");
        return false;
    }

    let num = document.getElementById("phone").value;
    if(num == "" || num.length != 12){
        alert("Please enter the correct phone number");
        return false;
    }

    let pwd = document.getElementById('pass').value;
    let pwd1 = document.getElementById('pass1').value;
    if(pwd != pwd1){
        alert('password does not match');
    }

}