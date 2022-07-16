import mongoose from "mongoose";
import mongoose_delete from "mongoose-delete";
import { index } from "../utils/elastic.js";
const resourceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    path: { type: String, required: true },
    tags: [{ type: String, required: true }],
  },
  {
    timestamps: true,
  }
);

resourceSchema.plugin(mongoose_delete, { deletedAt: true, deletedBy: true });

const model = mongoose.model("resource", resourceSchema);

model.watch().on("change", async (data) => {
  const { fullDocument, documentKey, operationType } = data;
  switch (operationType) {
    case "update":
    case "insert":
      delete fullDocument._id;
      const result = await index(documentKey._id, "resource", fullDocument);
      console.log(result);
      break;
  }
  console.log(data);
});

export default model;
