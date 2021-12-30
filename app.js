const express = require('express');
const router = require('./router/router');
const app = express();
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
    })
} catch (error) {
    console.error(error);
    process.kill(process.pid, 'SIGTERM')
}

