const clearBtn = document.querySelector('.clear');
const sendBtn = document.querySelector('.send');
const username = document.querySelector('#username');
const pass = document.querySelector('#password');
const pass2 = document.querySelector('#password2');
const mail = document.querySelector('#email');
const popup = document.querySelector('.popup');


const showError = (input,msg) =>{

const formBox = input.parentElement;
const errorMsg = formBox.querySelector('.error');
    formBox.classList.add('error');
    errorMsg.textContent = msg;
}


const clearError =input =>{

    const formBox = input.parentElement;
    formBox.classList.add('remove');


}


const checkForm = (input) =>{

    input.forEach(el=>{

if(el.value ===''){
showError(el,el.placeholder);
}
else{
    clearError(el);

}


    })
}  


const checkLength = (input,min) =>{
    if(input.value.length < min){

        showError(input,`${input.previousElementSibling.innerText.slice(0,-1)} jest za krótkie, hasło musi składać się z ${min} znaków`);
        
    }




}


const checkPassword =(pass,pass2)=>{
    if(pass.value !== pass2.value){
        showError(pass2,'hasła są różne!');
    }


}

const validateEmail = (email)=> {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  

    if(re.test(mail.value)){
        clearError(email);
    }
    else {
        showError(mail,'mail jest niepoprawny')
    }
}

const checkErrors =()=>{

    const allInputs = document.querySelectorAll('.form-box');
    let errorCount= 0;
    allInputs.forEach(el=>{
if(el.classList.contains('error')){
    errorCount++;
}



    })


    if(errorCount === 0){
        popup.classList.add('show-popup')
    }

    console.log(errorCount);
}
        
sendBtn.addEventListener('click', e=>{
    e.preventDefault();

    checkForm([username,pass,pass2,mail]);
    checkLength(username,3);
    checkLength(pass,10)
    checkLength(pass2,10);
checkPassword(pass,pass2);
validateEmail(mail);
checkErrors();

});








clearBtn.addEventListener('click', (e)=>{
e.preventDefault(); // strona sie nie przeładuje

[username,pass,pass2,mail].forEach(el=>{
el.value ='';
clearError(el);


});

})