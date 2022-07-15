import mongoose from 'mongoose'
import mongoose_delete from 'mongoose-delete'

const resourceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    path: { type: String, required: true },
    tags: [{type : String, required: true }],
    path: { type: String, required: true }
}, {
    timestamps: true
})

contentSchema.plugin(mongoose_delete, { deletedAt: true, deletedBy: true })


const model= mongoose.model('resource', resourceSchema)

model.watch().on('change', (data)=>{

    const { fullDocument, documentKey, operationType } = data;
    switch (operationType) {
      case "update":
      case "insert":
        delete fullDocument._id;
        const result = await index(documentKey._id, "user", fullDocument);
        console.log(result);
        break;
    }
    console.log(data);
 
})

export default model