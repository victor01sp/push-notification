const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_pelicula'
});



const getPelicula =  (req, res)=>{
    return connection.query('SELECT * FROM t_stream', (err, results) => {
        if (err) {
            res.status(500).send('Error en la consulta a la base de datos');
            return
        }
        res.status(200).send(JSON.stringify(results));
    });
}

module.exports.getPelicula = getPelicula;

