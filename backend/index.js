//Importamos Express.js
const express = require('express');
const cors = require('cors');
//Creación de la app backend con el método express()
const app = express();

/*Configuramos un puerto específico desde una variable de entorno
Si no existe, se asigna el puerto 3001*/
const PORT = process.env.PORT || '3001';

//Escuchar solicitud POST desde nuestro frontend en la ruta "/tarea"
app.post('/alumno',(req, res)=>{
    console.log("Body del request:", req.body);
    if(req.body){
        res.send({message:"Alumno registrado."})
    }else{
        res.send({message:"Error al registrar al alumno"})
    }
});

//Configurar CORS para acceso desde el frontend
app.use(
    cors({
        origin:"*"
    })
);

//La aplicación escucha el puerto que configuramos con el método listen(puerto,callback)
app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})