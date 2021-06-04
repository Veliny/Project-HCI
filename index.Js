// Form

var errMsg = document.getElementById('error');

function validateAll(){
    if(!checkEmail()){
        return;
    }
    else if(!checkPassword()){
        return;
    }
    else if(!checkGender()){
        return;
    }
    else if(!checkPlans()){
        return;
    }
    else if(!checkchecked()){
        return;
    }
}

function checkEmail(){
    var email = document.getElementById('email').value;
    if(email == ''){
        errMsg.innerHTML = 'Email cannot be empty!';
        return false;
    }
    else if(!email.endsWith('@gmail.com')){
        errMsg.innerHTML = 'Email must ends with "@gmail.com"'
        return false;
    }
    return true;
}

function checkPassword(){
    var password = document.getElementById('password').value;
    if(password == ''){
        errMsg.innerHTML = 'Password cannot be empty!';
        return false;
    }
    else if(password.length < 5){
        errMsg.innerHTML = 'Password must be longer than 5 characters'
        return false;
    }
    return true;
}

function checkGender(){
    var female = document.getElementById('female').checked;
    var male = document.getElementById('male').checked;
    if(!female && !male){
        errMsg.innerHTML = 'Gender must be chosen';
        return false;
    }
    return true;
}


function checkPlans(){
    var plans = document.getElementById('plans').value;
    if(plans == ''){
        errMsg.innerHTML = 'Plans must be chosen!';
        return false;
    }
    return true;
}

function checkchecked(){
    var cek = document.getElementById('cek').checked;
    if(!cek){
        errMsg.innerHTML = 'You must agree with the terms and condition';
        return false
    }
    return true;
}

//