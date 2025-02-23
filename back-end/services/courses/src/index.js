require('dotenv').config();

const express = require('express');
const cors = require('cors');

function main()
{
    const app = express();
    
    app.use(cors());
    app.use(express.json());

    app.listen(process.env.PORT, () => console.log('[SERVICE] Course Service is running on ' + process.env.PORT));
}

main();