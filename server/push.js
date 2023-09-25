const fs = require('fs')

const urlsafeBase64 = require('urlsafe-base64')
const vapid = require('./vapid.json')

const webpush = require('web-push')

webpush.setVapidDetails(
    'mailto:victor001.sp@outlook.com',
    vapid.publicKey,
    vapid.privateKey
)

const suscriptions = require('./subs-db.json')

module.exports.getKey =()=> {
    return urlsafeBase64.decode(vapid.publicKey) 
}

module.exports.addSuscription =( suscription )=> {

    suscriptions.push( suscription )
    fs.writeFileSync(__dirname + '/subs-db.json', JSON.stringify(suscriptions))

}

module.exports.sendPush = post => {

    const notificacionesEnviada = []

    suscriptions.forEach((suscription, i) => {


        const pushProm = webpush.sendNotification(suscription, JSON.stringify(post))
            .then( () => suscriptions[i].active = true)
            .catch( err => {
                if( err.statusCode === 410 ) {
                    console.log('fallo la notificacion');
                    suscriptions[i].active = false
                }
            })

        notificacionesEnviada.push( pushProm )
    })

    Promise.all( notificacionesEnviada ).then(()=> { 

        const suscriptionsActive =  suscriptions.filter( subs => subs.active )
        fs.writeFileSync(__dirname + '/subs-db.json', JSON.stringify(suscriptionsActive))
        
    })
}