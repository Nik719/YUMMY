const { MongoClient } = require("mongodb");

const url = "mongodb+srv://raiabhishek314:B8K86H2iha8BIdLZ@ymumcluster.cahdh8s.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(url);

const dbName = "testing";

async function run(){
    try{
        await client.connect();
        const db = client.db(dbName);
        const col = db.collection("people");

        let personDocument = {
            "name": {"first" : "Abhishek", "last": "Rai"},
            "birth": new Date(2001, 3, 3),
            "address": "Assam"
        }
        const p = await col.insertOne(personDocument);
        const filter = {"name.last": "Rai"};
        const document = await col.findOne(filter);
        console.log("Document found:\n" + JSON.stringify(document));
    }
    
    catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);