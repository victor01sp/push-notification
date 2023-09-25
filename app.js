const express   = require('express')
const cors      = require('cors')
const push      = require('./server/push')

const app = express()

app.use(cors({ origin : '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=> { 
    res.send('inicio')
})

app.get('/key', (req, res)=> { 
    const key = push.getKey();
    res.send(key)
})

app.get('/user', (req, res)=> { 
    res.send('lista de usuario')
})

app.get('/chat', (req, res)=> { 
    res.send('lista de chat')
})

const PORT = process.env.PORT || 3000

app.listen(PORT)
 




