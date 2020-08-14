//var MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://admin:root@cluster0.ma9zx.mongodb.net/squirrel?retryWrites=true&w=majority"
//var url = "mongodb+srv://admin:root@cluster0.ma9zx.mongodb.net/squirrel?retryWrites=true&w=majority";

async function main(){

  const client = new MongoClient(uri);

  try {
    await client.connect();

    await createListing (client, 
      {
        name: "Edward Elric",
        email: "eelric@central.edu"
      }  
    );

  } 
  catch (e) {
    console.error(e);
  }
  finally {
    await client.close();
  }


}

main().catch(console.error);


async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function createListing(client, newListing){
  const result = await client.db("squirrel").collection("users").insertOne(newListing);
  console.log(`New listing created with the following id: ${result.insertedId}`);
}




