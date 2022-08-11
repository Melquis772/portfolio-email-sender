const config = require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3000,
    host: process.env.HOST || '',
    serverPort: process.env.SERVERPORT || '',
    serverUser: process.env.SERVERUSER || '',
    serverPass: process.env.SERVERPASSWORD || '',
    email: process.env.EMAIL || '',
    password: process.env.PASSWORD || ''

}