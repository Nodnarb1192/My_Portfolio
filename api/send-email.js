const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
    console.log(`Request method: ${req.method}`);
    console.log(`Request headers: ${JSON.stringify(req.headers)}`);
    if (req.method === 'POST') {
        // Parse the request body
        console.log(`Request body: ${JSON.stringify(req.body)}`);
        const { from, subject, name, text } = req.body;

        // Set up your nodemailer transporter here
        const transporter = nodemailer.createTransport({
            host: 'smtp-mail.outlook.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Define mailOptions and send the email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // or any other recipient
            subject: subject,
            text: `Name: ${name}\nEmail: ${from}\n\n${text}`
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).send('Email sent successfully');
        } catch (error) {
            console.error('Failed to send email:', error);
            res.status(500).send('Failed to send email');
        }
    } else {
        // Handle any non-POST requests
        console.log(`Unexpected request method: ${req.method}`);
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
