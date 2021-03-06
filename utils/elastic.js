import client from "../core/elasticsearch.js";

export const index = async (id, index_name, document) => {
  return await client.index({
    id,
    refresh: "wait_for", // max 1 sec.
    index: index_name,
    body: document,
  });
};

export const search = async (index_name, query, from = 0, size = 100) => {
  const response = await client.search({
    index: index_name,
    from,
    size,
    body: {
      query,
    },
  });
  return response.body;
};
export const getById = async (index, id) => {
  const response = await client.get({ index, type: "_doc", id });
  return response.body?._source;
};
