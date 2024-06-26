const createChangePassword = (password) => {
    return `
    <!DOCTYPE html>
    <html lang="es">
    <style>
    html {
      background-color: #ffffff;
    }
  
    body {
      max-width: 600px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: auto;
      background-color: rgb(229, 255, 246);
      padding: 40px;
      border-radius: 4px;
      margin-top: 10px;
    }
  
    h1 {
      color: #17415f;
      margin-bottom: 20px;
    }
  
    p {
      margin-bottom: 15px;
      color: #17415f;
    }
  
    a {
      color: #17415f;
      text-decoration: none;
      font-style: italic;
      font-weight: bold;
    }
  
    a:hover {
      text-decoration: underline;
    }
  
    strong {
      color: #17415f;
    }
  
    .firma {
      font-weight: bold;
      color: #ff8c00;
    }
  </style>
      <body>
      <h1>Tu nueva contraseña de Eduplat.org</h1>
      <p>Esta es tu nueva contraseña para acceder a Eduplat.org:${password} , una vez hayas accedido de nuevo, puedes cambiarla en cualquier momento desde la página de tu perfil.</p>
      <p>Vuelve al inicio de sesión <a href="http://localhost:5173/" target="_blank" rel="noopener noreferrer">haciendo clic aquí</a>.</p>
      <br/>
        <p class='firma'>Equipo de Eduplat.</p>
    </body>
    </html>`;
  };
  
export default createChangePassword;