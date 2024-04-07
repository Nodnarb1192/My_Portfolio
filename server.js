require('dotenv').config(); // add this line at the top
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const WebSocket = require('ws');
const app = express();

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER, // changed to use environment variable
        pass: process.env.EMAIL_PASS  // changed to use environment variable
    }
});

app.post('/send-email', (req, res) => {
    const { from, subject, name, text } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER, // Use your authenticated Outlook email address here
        replyTo: from, // Add the sender's email in the reply-to field
        to: process.env.EMAIL_USER, // Your email or where you want to receive the message
        subject: subject,
        text: `Name: ${name}\n\nEmail: ${from}\n\n${text}` // Include the sender's email in the message body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error); // Log the error for better debugging
            return res.status(500).send('Error sending email: ' + error.message);
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log(`Received message: ${message}`);
    });
    ws.send('Hello from server!');
});
