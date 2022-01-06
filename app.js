const express = require('express');
const startDB = require('./API/DB/connection');
const router = require('./router/router');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8080


process.on('SIGTERM',()=>{
    app.close(()=>{
        console.log('server has been terminated');
    });
});

try {
    app.use('/',router)
    app.listen(PORT,()=>{
        console.log(`server has been started on port ${PORT}`);
        startDB();
    })
} catch (error) {
    console.error(error);
    process.kill(process.pid, 'SIGTERM')
}

