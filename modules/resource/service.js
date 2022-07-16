import resource from "../../models/Resource.js";
import bcrypt from "bcrypt";
import { search, getById } from "../../utils/elastic.js";
import mongoose from "mongoose";

export const create = async ({ title, path, tags, type }) => {
  return await resource.create({ title, path, tags, type });
};

export const find = async (searchString) => {
  // await User.find({
  //   type: 'Admin'
  // })

  if (isMongoID(searchString)) return await getById("resource", searchString);

  const query = {
    multi_match: {
      query: searchString,
      fields: ["path^3", "tags^2", "title^2"],
      fuzziness: "AUTO",
    },
  };
  return await search("resource", query);
};

function isMongoID(searchString) {
  return mongoose.isValidObjectId(searchString) ? true : false;
}
