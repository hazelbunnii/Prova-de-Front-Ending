document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.querySelector("#logform");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const emailValue = document.getElementById("email").value.trim();
        const passwordValue = document.getElementById("senha").value;
        const rememberElement = document.getElementById("remember");
        const rememberMe = rememberElement ? rememberElement.checked : false;

        if (passwordValue.length < 8) {
            alert("A senha deve ter pelo menos 8 caracteres.");
            return;
        }

        const dadosDoUtilizador = {
            email: emailValue,
            senha: passwordValue,
            lembrar: rememberMe
        };

        console.log("Dados prontos para envio:", dadosDoUtilizador);

        exibirMensagemSucesso(emailValue);
    });

    function exibirMensagemSucesso(email) {
        const loginCard = document.querySelector(".logcard");

        loginCard.innerHTML = `
            <div style="text-align:center; padding:20px;">
                <h2 style="color:#FF8FB8;">Login Efetuado!˚.🎀༘⋆</h2>
                <p style="color:#555;">
                    Bem-vindo(a), <strong>${email}</strong><br>
                    Redirecionando...
                </p>
            </div>
        `;
    }

});