document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav');
    const menuIcon = document.querySelector('.menu-icon');

    menuIcon.addEventListener('click', function () {
        nav.style.display = (nav.style.display === 'flex' || nav.style.display === '') ? 'none' : 'flex';
    });

    const bookingForm = document.getElementById('booking-form');

    bookingForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obter os valores do formulário
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        // Abrir uma nova janela para exibir o comprovante
        const confirmationWindow = window.open('', '_blank');
        
        // Preencher o comprovante com os dados do formulário
        confirmationWindow.document.write(`
            <html>
                <head>
                    <title>Comprovante de Agendamento</title>
                </head>
                <body>
                    <h2>Comprovante de Agendamento</h2>
                    <p><strong>Nome:</strong> ${name}</p>
                    <p><strong>Telefone:</strong> ${phone}</p>
                    <p><strong>E-mail:</strong> ${email}</p>
                    <p><strong>Data:</strong> ${date}</p>
                    <p><strong>Horário:</strong> ${time}</p>
                    <button onclick="window.print()">Imprimir Comprovante</button>
                </body>
            </html>
        `);

        // Fechar a janela de confirmação após a impressão
        confirmationWindow.onafterprint = function () {
            confirmationWindow.close();
        };
    });
});
