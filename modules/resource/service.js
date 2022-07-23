import resource from "../../models/Resource.js";
import { search, getById } from "../../utils/elastic.js";
import mongoose from "mongoose";

export const create = async ({ title, path, tags, type }) => {
  return await resource.create({ title, path, tags, type });
};

export const find = async (searchString, offset = 0, limit = 10,page=0) => {
  // await User.find({
  //   type: 'Admin'
  // })

  if (isMongoID(searchString)) 
  return await getById("resource", searchString);
  if (isUrl(searchString))
    return await resource.findOne({ path: searchString });
  console.log(searchString,offset);
  const query = {
    multi_match: {
      query: searchString,
      fields: ["path^3", "tags^2", "title^2"],
      fuzziness: "AUTO",
    },
  };
  return await search("resource", query ,(offset+limit*page),limit);
};

function isMongoID(searchString) {
  return mongoose.isValidObjectId(searchString) ? true : false;
}
export function isUrl(searchString) {
  try {
    const url = new URL("searchString");
    return true;
  } catch (err) {
    return false;
  }
}
