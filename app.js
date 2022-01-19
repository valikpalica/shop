const express = require('express');
const startDB = require('./API/DB/connection');
const router = require('./cientResponse/router');
const admin = require('./admin/router');
const app = express();
const cors = require('cors');
app.set("view engine", "hbs");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const PORT = process.env.PORT || 8080


process.on('SIGTERM',()=>{
    app.close(()=>{
        console.log('server has been terminated');
    });
});

try {
    app.use('/',router);
    app.use('/admin',admin);
    app.listen(PORT,()=>{
        console.log(`server has been started on port ${PORT}`);
        startDB();
    })
} catch (error) {
    console.error(error);
    process.kill(process.pid, 'SIGTERM')
}

