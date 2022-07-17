import mongoose from "mongoose";
import mongoose_delete from "mongoose-delete";
import mongoose_paginate from 'mongoose-paginate-v2'
const resourceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    path: { type: String, required: true ,unique : true },
    tags: [{ type: String, required: true }],
    type : {type : String , enum :['image' ,'html'],required: true}
  },
  {
    timestamps: true,
  }
).index({"$**": "text"});


resourceSchema.plugin(mongoose_delete, { deletedAt: true, deletedBy: true });
resourceSchema.plugin(mongoose_paginate)

const model = mongoose.model("resource", resourceSchema);


export default model;
