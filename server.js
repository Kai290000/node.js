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
                    font-size: 100px;
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
    const numero1 = "32";

    const nome2 = "Safira";
    const turma2 = "2° DS";
    const numero2 = "34";

    const nome3 = "Vitor";
    const turma3 = "2° DS";
    const numero3 = "37";

    res.send(`
        <html>
        <head>
            <title>Aluno</title>
             <style>
            @import url('https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Yanone+Kaffeesatz:wght@200..700&display=swap');
            :root{
                --text: "Yanone Kaffeesatz", sans-serif;
            }
            body {
                font-family: var(--text);
                background: #0f172a;
                color: white;
                display:flex;
                justify-content:center;
                align-items:center;
                height:100vh;
            }

            .card{
                background:#1f2937;
                padding:10px 250px;
                border-radius:12px;
                text-align:center;
                font-size: 30px;
            }

            h1{
                margin-bottom:10px;
            }
            </style>
        </head>

        <body>
            <div class="card">
                <h1>Alunos</h1>
                <p><b>Nome:</b> ${nome1}</p>
                <p><b>Número:</b> ${numero1}</p>
                <p><b>Turma:</b> ${turma1}</p>

                <p><b>Nome:</b> ${nome2}</p>
                <p><b>Número:</b> ${numero2}</p>
                <p><b>Turma:</b> ${turma2}</p>

                <p><b>Nome:</b> ${nome3}</p>
                <p><b>Número:</b> ${numero3}</p>
                <p><b>Turma:</b> ${turma3}</p>
            </div>
        </body>
        </html>
     `);    
});

app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`);
});