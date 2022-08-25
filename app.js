const Email = document.querySelector('#E-mail')
const form = document.querySelector('form')
const input = document.querySelector('input')
const errorMsg = document.querySelector('.error-msg')

form.addEventListener('submit', (e)=> {
    e.preventDefault()

    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(input.value ==='' && !Email.value.match(pattern)){
        input.style.borderColor = 'hsl(354, 100%, 66%)';
        errorMsg.classList.remove('hide')
        Email.setAttribute('placeholder', 'example@email/com');
    
    }else{
        input.style.borderColor = '';
        errorMsg.classList.add('hide')
    }
})