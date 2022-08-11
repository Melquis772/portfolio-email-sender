const { Router } = require('express');
const nodemailer = require('nodemailer')
const config = require('../config')

const router = Router();

router.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const contentHtml = `
    <h3>Contact From Portfolio Website</h3> <br/>
    <strong>Name: </strong> <span>${name}</span> <br/>
    <strong>Email: </strong> <span>${email}</span> <br/>

    <strong>Message</strong> <br/>
    <p>${message}</p>
    `

        const transporter = nodemailer.createTransport({
            host: config.host,
            port: config.serverPort,
            secure: false,
            auth: {
                user: config.serverUser,
                pass: config.serverPass

            },
            tls: {
                rejectUnauthorized: false
            }
        })

        const info = await transporter.sendMail({
            from: config.email,
            to: config.email,
            subject: "Portfolio Contact Form Message",
            html: contentHtml
        })

        res.send("Email sent")
    } catch (error) {
        res.send("Email could not be sent")
    }
})


module.exports = router;

