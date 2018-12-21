//==============================
// PUERTO
//==============================

process.env.PORT = process.env.PORT || 3000;

//==============================
// ENTORNO
//==============================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//==============================
// BASE DE DATOS
// Conexión a MongoDB de MLAB
//==============================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://cafe-user:abcd1234@ds141704.mlab.com:41704/cafe';
}

process.env.URLDB = urlDB;