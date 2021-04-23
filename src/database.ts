import mongoose, {model} from 'mongoose';

function initiateDB(){
    mongoose.connect('mongodb://localhost:27017/covid',(error) =>{
        if(!error)
        {
            console.log('Conectado a la BBDD');     
        }
        else
        {
            console.log('Error de conexión con la BBDD');     
        }
        
    })
}
export {initiateDB};