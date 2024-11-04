

import mongoose from 'mongoose';
const { Schema } = mongoose;

const EventsSchema = new Schema({

    title : String,
    descrption : String,
    thambnail : String,
   location : {
    lat : Number,
    long : Number
   }  ,
   data : new Date().toLocaleDateString()


})
export  const EventsModels = mongoose.models.Events|| mongoose.model('Events', EventsSchema);
