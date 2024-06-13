document.addEventListener("DOMContentLoaded", function () {

    let form = document.querySelector('.form');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        checkInputs();
    });

    function checkInputs() {
        let emailValue = email.value.trim();
        let passValue = password.value.trim();
        let isValid = true;

        if (emailValue === '') {
            setError(email, 'O email é obrigatório.');
            isValid = false;
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Por favor, insira um email válido.');
            isValid = false;
        } else {
            setSuccess(email);
        }

        if (passValue === '') {
            setError(password, 'A senha é obrigatória.');
            isValid = false;
        } else if (passValue.length < 8) {
            setError(password, 'A senha precisa ter no mínimo 8 caracteres.');
            isValid = false;
        } else {
            setSuccess(password);
        }

        if (isValid) {
            // Esconder elementos ao submeter o formulário
            document.querySelector('.main-img').style.display = 'none';
            document.querySelector('.bola').style.display = 'none';
            document.querySelector('.section-01').style.display = 'none';
            document.querySelector('.home-img').style.display = 'flex';
            document.querySelector('.home-01').style.display = 'flex';
        }
    }

    function setError(input, message) {
        let formControl = input.parentElement;
        let small = formControl.querySelector('small');

        small.innerText = message;
        formControl.className = "form-control error";
    }

    function setSuccess(input) {
        let formControl = input.parentElement;
        formControl.className = "form-control success";
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
