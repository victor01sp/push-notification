import express from 'express' 

const app = express()

app.get('/', (req, res)=> { 
    res.send('inicio')
})

app.get('/user', (req, res)=> { 
    res.send('lista de usuario')
})

app.get('/chat', (req, res)=> { 
    res.send('lista de chat')
})

const PORT = process.env.PORT || 3000

app.listen(PORT)

// const express = require('express')
// const cors = require('cors');  
// // const { getPelicula }      = require('./server/db')
// const push = require('./server/push')

// const app = express()

// app.use(cors({ origin : '*' }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get('/key', (req, res)=> {
//     const key = push.getKey();
//     res.send(key)
// })

// app.post('/subscribe', (req, res)=> {
//     const suscripcion = req.body

//     push.addSuscription( suscripcion )

//     res.json('subscribe')
// })

// console.log('mamanis');

// app.post('/push', (req, res)=> {

//     const notification = {
//         title : req.body.title ,
//         body  : req.body.body,
//         user  : req.body.user,
//         icon  : req.body.icon,
//         url   : req.body.url,
//     }

//     push.sendPush( notification )
//     res.json( notification )
// })

// const PORT = process.env.PORT || 3000

// app.listen(PORT)





