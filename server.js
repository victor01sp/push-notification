const express   = require('express')
const cors      = require('cors');   

const app   = express()
const PORT  = process.env.PORT || 3000

app.use(cors({ origin : '*' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', require('./server/routes/router'));

app.listen(PORT, ()=>{
    console.log('server is running')
});
 




