const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT | 3000;
const comments_router = require('./routes/comments');
const store_router = require('./routes/stores')
app.use(bodyParser.json());
app.use(cors)
app.use('/comments',comments_router);
app.use('/store',store_router);


app.listen(PORT,()=>{
    console.log('Server application started',PORT);
})