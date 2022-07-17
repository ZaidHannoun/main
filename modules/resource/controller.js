import * as service from "./service.js";
import { ApiError } from "../../errors/ApiError.js";
export const create = async (req, res,next) => {
  const { title, path, tags, type } = req.body;
  try{
  const create = await service.create({ title, path, tags, type });
  res.send(create);}
  catch(err){
    if(err.code ==11000)
    next(ApiError.duplicateError("duplicate"))
    next(err)
  }
};

export const search = async (req, res,next) => {
  const { searchString, offset ,limit } = req.query;
  try{
  const result = await service.find(searchString , offset ,limit);

  res.send(result);}
  catch(err){
  next(err)    
  }
};
