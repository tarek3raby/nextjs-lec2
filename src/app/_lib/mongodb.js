const {MongoClient} =require('mongodb')
let mongoClient,mongoPromise
if(!mongoClient){
    mongoClient = new MongoClient('mongodb://127.0.0.1:27017/Next-app')
    mongoPromise = mongoClient.connect()
}

export default mongoPromise