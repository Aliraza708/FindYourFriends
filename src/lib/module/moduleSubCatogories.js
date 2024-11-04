

import mongoose from 'mongoose';
const { Schema } = mongoose;

const SubCategoriesSchema = new Schema({

    title : {type : String, required : true },
    description : String,
    thambnail : {type : String, required : true },
    catgories : {type : mongoose.Types.ObjectId , ref : 'Categories', required : true}


})
export  const SubCategoriesModels = mongoose.models.SubCategories|| mongoose.model('SubCategories', SubCategoriesSchema);
