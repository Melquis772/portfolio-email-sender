const { Router } = require('express');
const nodemailer = require('nodemailer')
const config = require('../config')

const router = Router();

router.get('/', (req, res) => {
    /* res.json({
        response: "works"
    }) */
    res.send("works")
})

router.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    try {

        if (name !== "" && email !== "" && message !== "") {
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

            res.status(200).json({
                message: "Email sent successfully"
            })
        } else {
            res.status(403).json({
                message: "Email could not be sent. All fields have to be filled"
            })
        }



    } catch (error) {
        res.json({
            error: error.message
        })
    }
})


module.exports = router;

