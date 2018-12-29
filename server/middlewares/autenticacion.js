const jwt = require('jsonwebtoken');

//==============================
// Verificar TOKEN
//==============================

let verificaToken = (req, res, next) => {
    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => { // El decoded contiene el payload del token
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'token no válido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();
    });

};

//==============================
// Verificar AdminRole
//==============================

let verificaAdmin_Role = (req, res, next) => {

    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();

    } else {
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es Adinistrador'
            }
        });
    }
};

//==============================
// Verificar Token Imagen
//==============================

let verificaTokenImg = (req, res, next) => {

    let token = req.query.token;

    jwt.verify(token, process.env.SEED, (err, decoded) => { // El decoded contiene el payload del token
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'token no válido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();
    });

}


module.exports = {
    verificaToken,
    verificaAdmin_Role,
    verificaTokenImg
}