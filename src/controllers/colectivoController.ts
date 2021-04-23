import { Request, Response, json } from 'express';
import Colectivo from '../models/Colectivo';

//función para obtener TODOS los colectivos
async function getAllColectivo(req:Request,res:Response){
    await Colectivo.find((err,doc)=>{
        if(!err)
        {
         res.send(doc);
        }
        else
        {
            res.send('Error');
        }
 })
 }



//función para añadir un colectivo
async function addColectivo(req:Request,res:Response){
    console.log('Añadiendo colectivo');
    console.log(req.body);
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const vacuna = req.body.vacuna;
    const newColectivo = new Colectivo({nombre,descripcion,vacuna});
    await newColectivo.save().then((data)=>{
        console.log('Añadido');
        res.status(200).json(data);
    }).catch((err)=>{
        console.log('Error al añadir colectivo');
        res.status(400).json(err);
    })
}

async function delColectivo(req:Request, res:Response){
    Colectivo.deleteOne({"_id":req.params.id}).then((data) => {
        res.status(200).json(data);
        console.log('Eliminado satisfactoriamente');
    }).catch((err) => {
        res.status(400).json(err);
        console.log('Error al eliminar');
    })
}
export default {getAllColectivo,addColectivo, delColectivo}