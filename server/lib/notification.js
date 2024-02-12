const webpush       = require('web-push')
const urlsafeBase64 = require('urlsafe-base64')
const vapid         = require('../data/vapid.json')

webpush.setVapidDetails(
    'mailto:victor001.sp@outlook.com',
    vapid.publicKey,
    vapid.privateKey
)

module.exports.generate = () => {
    return urlsafeBase64.decode(vapid.publicKey) 
}

module.exports.push     = async (notification = {}, Suscription = []) => {

    const suscriptions = {
        success : [],
        failed  : [],
    }

    const waiting     = []

    Suscription.forEach((suscription, i) => {

        const pushProm = webpush.sendNotification(suscription, JSON.stringify( notification ))
            .then( () => {
                suscriptions.success.push( suscription )
            })
            .catch( err => {
                //console.log( err.statusCode );
                if( [ 404, 410, undefined ].includes( err.statusCode ) ) {
                    suscriptions.failed.push( suscription )
                }
                
            })

        waiting.push( pushProm )
        
    })
   
    return await Promise.all( waiting ).then( ()=> suscriptions )
}