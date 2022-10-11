const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        //mongodb connection string
        // const uri = "mongodb+srv://MNC:MNC2020@cluster0.r7abl.mongodb.net/?retryWrites=true&w=majority";
        const con = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })

        console.log(`MongoDB connection : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://MNC:MNC2020@cluster0.r7abl.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// connectDB = client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// module.exports = connectDB
