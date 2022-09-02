let mysql = require("mysql");
let conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'registrodeclientes'
});
conexion.connect(
    (err)=>{
    if(!err){
        console.log('Conexión establecida');
    }else{
        console.log('Error de conexión');
    }

    }
);
module.exports=conexion;