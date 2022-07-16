# main
For resource/services.js

*- create(Object)
Function to create a document in MongoDB and ElasticSearch . It will return the document created with a unique ID .


*- find(searchString)
Function to search for documents depending on searchString variable . If searchString was a MongoID , it will search for the document with exact MongoID entered=> it will return the document if exist . 
If searchString was a String , it will apply an algorithm to search for the string in ElasticSearch documents => it will return documents sorted depending on the score .

*-isMongoID(searchString)

function to check if searchString is MongoID or not .
