 const formButton = document.getElementById('formButton');

formButton.addEventListener('click', function handleSubmit(){
    console.log("hello");
    const input = document.getElementById('input').value;

    if(validateEmail(input)){
        console.log('Yes')
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
    const error = document.getElementById('error');
    const message = document.createElement('h6');
    error.appendChild(message);
    message.appendChild(document.createTextNode('Please provide a valid email address'));

    document.getElementById("input").style.borderColor = "red";
}



