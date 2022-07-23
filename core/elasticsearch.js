import { Client } from "@elastic/elasticsearch";

let client = new Client({
  node: "http://elastic:9200",
});

export default client;
