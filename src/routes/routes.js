const router = require('express').Router();
const nodemailer = require('nodemailer');
   
router.post('/enviar', async (req, res) => {
  const { name,email,number,subject,message } = req.body;
  
  try {
    // Crear el transporte con la cuenta de prueba
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "torresdrichar@gmail.com",
          pass:process.env.KEY_EMAIL
        }
      });

    // Configurar el mensaje de correo electrónico
    const mensaje = {
      from: email,
      to: "torresdrichar@gmail.com",
      subject: subject,
      
      html: `<h1>Hola Torres Richard como estas?</h1>
      <h3>${name}:Te envió un correo</h3>
      <h3>datos:</h3>
      <div>
        <strong>Número de telefono:</strong><p>${number}</p><br>
        <strong>Email:</strong><p>${email}</p><br>
        <strong>subject:</strong><p>${subject}</p><br>
        <strong>Mensaje:</strong><p>${message}</p>
    </div>
      `
    };

    // Enviar el correo electrónico
    await transporter.sendMail(mensaje)

    return res.status(201).json({
         msg: "El correo electrónico ha sido enviado correctamente"});
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
    return res.status(500).json({ error: "Error al enviar el correo electrónico" });
  }
});


module.exports = router