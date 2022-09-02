module.exports = {
    obtener:function(conexion, funcion){
        conexion.query("SELECT * FROM cliente", funcion);
    },
    insertar:function(conexion, datos, funcion){
        conexion.query("INSERT INTO cliente (nombre, apellido, documentoIdentidad, telefono, correo, contraseña, imagen, direccion) VALUES (?,?,?,?,?,?,?,?)",[datos.nombre, datos.apellido, datos.documentoIdentidad, datos.telefono, datos.correo, datos.contraseña, datos.imagen, datos.direccion], funcion);
    }
}