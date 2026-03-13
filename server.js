const express = require("express");
const app = express();
const PORTA = 3000;

app.get("/mensagem", (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Servidor</title>
            <style>
            @import url('https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Yanone+Kaffeesatz:wght@200..700&display=swap');

            :root {
            --title: "Yanone Kaffeesatz", sans-serif
            }
                body{
                    font-family: var(--title);
                    background: #0f172a;
                    color: white;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    height:100vh;
                }

                h1{
                    background:#1e293b;
                    padding:20px;
                    border-radius:10px;
                }
            </style>
        </head>

        <body>
            <h1>✅ Servidor funcionando!</h1>
        </body>
        </html>
    `);
});

app.get("/aluno", (req, res) => {

    const nome1 = "Melissa";
    const turma1 = "2° DS";
    const curso1 = "Desenvolvimento de Sistemas";

    const nome2 = "Safira";
    const turma2 = "2° DS";
    const curso2 = "Desenvolvimento de Sistemas";

    const nome3 = "Vitor";
    const turma3 = "2° DS";
    const curso3 = "Desenvolvimento de Sistemas";

    res.send(
        "Nome: " + nome1 + "<br>" +
        "Turma: " + turma1 + "<br>" +
        "Curso: " + curso1 + "<br><br>" +

        "Nome: " + nome2 + "<br>" +
        "Turma: " + turma2 + "<br>" +
        "Curso: " + curso2 + "<br><br>" +

        "Nome: " + nome3 + "<br>" +
        "Turma: " + turma3 + "<br>" +
        "Curso: " + curso3
    );
});

app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`);
});