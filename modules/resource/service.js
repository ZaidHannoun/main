import resource from "../../models/Resource.js";
import mongoose from "mongoose";

export const create = async ({ title, path, tags, type },next) => {
  
  return await resource.create({ title, path, tags, type });}
  


export const find = async (searchString, offset = 0, limit = 10,page=0) => {
  if (isMongoID(searchString)) return await resource.findById(searchString);
  if (isUrl(searchString))
    return await resource.findOne({ path: searchString });
  await resource.find();
  let option = { offset: offset, limit: limit };
  //return await resource.paginate({ $text: { $search: searchString } }, option);
  //return await resource.fuzzySearch(searchString).limit(10).skip(limit*page+offset)
  return await resource.aggregate([{"$search": {
    "autocomplete": {
      "path": "title",
      "query": "helloooooo guysss",
      
      
    }
   
  }
}])
};

export function isMongoID(searchString) {
  return mongoose.isValidObjectId([searchString]) ? true : false;
}

export function isUrl(searchString) {
  try {
    const url = new URL("searchString");
    return true;
  } catch (err) {
    return false;
  }
}
