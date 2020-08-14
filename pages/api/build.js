const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://admin:root@cluster0.ma9zx.mongodb.net/squirrel?retryWrites=true&w=majority"

async function main(){

  const client = new MongoClient(uri);

  try {
    await client.connect();

    await createListing (client,
      {
        title: "Introduction to Leeg",
        description: "your mom",
        tag: "League"
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


async function createListing(client, newListing){
  const result = await client.db("squirrel").collection("build").insertOne(newListing);
  console.log(`New listing created with the following id: ${result.insertedId}`);
}
