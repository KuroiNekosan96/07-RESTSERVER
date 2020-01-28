//===============================
//Puerto
//===============================
process.env.PORT = process.env.PORT || 3000

//===============================
//Base de Datos
//===============================
// let urlDB;
// if(process.env.NODE_ENV==='dev'){
//     urlDB='mongodb://localhost:27017/cafe';
// }else{
//creo un uusuario para que puedan conectarse
urlDB = 'mongodb+srv://cafe-user:bqWO2sTUNhoIzd5K@cluster0-ygr0z.gcp.mongodb.net/cafe'
    //}
process.env.URLDB = urlDB;