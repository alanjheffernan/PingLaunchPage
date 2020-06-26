 const formButton = document.getElementById('formButton');
 const error = document.getElementById('error');
 const message = document.createElement('h6');
 const errorMessage = "Please provide a valid email address";


formButton.addEventListener('click', function handleSubmit(){
    const input = document.getElementById('input').value;

    if(validateEmail(input)){
        removeErrorMessage()
    } else {
        addErrorMessage()
    }
    
});

function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

function addErrorMessage(){
    if(message.innerText === errorMessage){
        return;
    }
    error.appendChild(message);
    message.appendChild(document.createTextNode(errorMessage));
    document.getElementById("input").style.borderColor = "red";
}

function removeErrorMessage(){
    if(error.childNodes[0] == ''){
        console.log('ZERO');
        reutrn;
    }
    error.removeChild(error.childNodes[0]);
    document.getElementById("input").style.borderColor = "hsl(223, 100%, 88%)";
    document.getElementById('input').value = '';
}



