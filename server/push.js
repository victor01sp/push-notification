const fs = require('fs')
const webpush = require('web-push')

const vapid = require('./vapid.json')
const suscriptions = require('./subs-db.json')


// webpush.setVapidDetails(
//     'mailto:victor001.sp@outlook.com',
//     vapid.publicKey,
//     vapid.privateKey
// )
 

module.exports.getKey =()=> {
    return vapid.publicKey
}