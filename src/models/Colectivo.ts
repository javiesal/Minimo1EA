import {Schema,model} from 'mongoose';

const ColectivoSchema: Schema = new Schema({
    nombre : { type:String, required:true},
    descripcion : { type: String, required:true},
    vacuna : { type: String, required : true}

});

export default model('Colectivo', ColectivoSchema);