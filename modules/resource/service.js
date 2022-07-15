import resource from "../../models/Resource.js";
import bcrypt from "bcrypt";
import { search } from "../../utils/elastic.js";

export const create = async (title, path, tags, type) => {
  const hash = await bcrypt.hash(password, 3);
  return await resource.create({ title, path, tags, type });
};

export const search = async (search) => {
  // await User.find({
  //   type: 'Admin'
  // })
  const query = {
    "simple_query_string" : {
      "query": search,
      "fields": [
        "id^3",
        "path^3",
        "title^2",] 
  }  
  };
  return await search("user", query);
  // return await Admin.findOne()
};

