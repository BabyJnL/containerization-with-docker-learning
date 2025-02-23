require('dotenv').config();

const express = require('express');
const cors = require('cors');

function main()
{
    global.db = require('./config/db')();
    const app = express();
    
    app.use(cors());
    app.use(express.json());

    app.get('/', (req, res) => {
        return res.send('Hello from Lecture Service');
    });

    app.use('/api', require('./routes'));

    app.listen(process.env.PORT, () => console.log('[SERVICE] Lecture Service is running on http://localhost:' + process.env.PORT));
}

main();