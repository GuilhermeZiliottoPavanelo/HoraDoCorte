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

        // Criar um objeto de dados
        const formData = {
            name: name,
            phone: phone,
            email: email,
            date: date,
            time: time
        };

        // Converter o objeto para uma string JSON
        const jsonData = JSON.stringify(formData);

        // Criar um Blob (objeto binário) com o JSON
        const blob = new Blob([jsonData], { type: 'text/plain' });

        // Criar um link para download
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'agendamento.txt';

        // Adicionar o link ao corpo do documento e clicar nele
        document.body.appendChild(a);
        a.click();

        // Remover o link do corpo do documento
        document.body.removeChild(a);

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
                    <p><strong>Nome:</strong> ${formData.name}</p>
                    <p><strong>Telefone:</strong> ${formData.phone}</p>
                    <p><strong>E-mail:</strong> ${formData.email}</p>
                    <p><strong>Data:</strong> ${formData.date}</p>
                    <p><strong>Horário:</strong> ${formData.time}</p>
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
