// import mongoose from 'mongoose';
// import aggregatePaginate from 'mongoose-aggregate-paginate-v2';

import express from "express"
import { ApiError } from "./ApiError.js"

const app = express()



app.get("/",(req,res,next)=>{
  next(new ApiError(403, "Access denied"))// pass error to middleware
})


// global error handler middleware
app.use((err,req,res,next)=>{
  console.error(err.stack); // log error stack
  res.status(err.statusCode || 500).json({
    success: err.success,
    message: err.message,
    errors: err.errors,
  })
  
})

app.listen(8000,()=>{
  console.log(`App listening to PORTAL: ${8000}`);
  
})




// const mongoURI =
//   'mongodb+srv://Akhil123:Akhil@123@cluster0.9rbxdx4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// const connectDB = async () => {
//   try {
//     await mongoose.connect(mongoURI, {
//       serverSelectionTimeoutMS: 10000, // 10 sec timeout
//     });
//     console.log('✅ MongoDB Connected');
//   } catch (err) {
//     console.error('❌ Error connecting to MongoDB:', err);
//     process.exit(1);
//   }
// };

// const userSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
// });

// userSchema.plugin(aggregatePaginate);
// const User = mongoose.model('User', userSchema);

// const seedUsers = async () => {
//   try {
//     if (mongoose.connection.readyState !== 1) {
//       console.log('⏳ Waiting for MongoDB connection...');
//       await new Promise((resolve) => setTimeout(resolve, 3000));
//       return seedUsers();
//     }

//     console.log('✅ Seeding users...');
//     await User.deleteMany({});
//     await User.insertMany([
//       { name: 'Alice', age: 25 },
//       { name: 'Bob', age: 30 },
//       { name: 'Charlie', age: 35 },
//       { name: 'David', age: 40 },
//       { name: 'Eva', age: 45 },
//       { name: 'Frank', age: 50 },
//     ]);
//     console.log('✅ Sample users added');
//   } catch (error) {
//     console.log('❌ Error seeding users:', error);
//   }
// };

// const getUsersPaginated = async (page, limit) => {
//   try {
//     const aggregateQuery = User.aggregate([
//       { $match: { age: { $gte: 30 } } },
//       { $sort: { age: 1 } },
//     ]);

//     const options = { page, limit };
//     const result = await User.aggregatePaginate(aggregateQuery, options);
//     console.log('📌 Paginated Result:', JSON.stringify(result, null, 2));
//   } catch (error) {
//     console.log(`❌ Unexpected Error: ${error}`);
//   }
// };

// // ✅ **Ensure MongoDB is connected before running queries**
// (async () => {
//   try {
//     await connectDB(); // ✅ Connect first
//     await seedUsers();
//     await getUsersPaginated(1, 3);
//   } catch (error) {
//     console.log('❌ Error in main function:', error);
//   } finally {
//     mongoose.disconnect();
//     console.log('🔌 MongoDB Disconnected');
//   }
// })();

// import dotenv from "dotenv";
// dotenv.config();
// import cors from "cors";
// import express from "express";
// import House from "./model/houseOwner.model.js";
// import HouseLoan from "./model/houseLoan.models.js";
// import User from "./model/user.model.js";
// const app = express();
// app.use(express.json());
// app.use(cors());

// const PORT = process.env.PORT || 8000;
// const MONGOURI = process.env.MONGO_URI;

// mongoose
//   .connect(MONGOURI)
//   .then(() => console.log(`Connected to mongdoDb`))
//   .catch((err) => console.log(`Error connecting to mongoDB: ${err}`));

// // add user to database
// app.post("/users", async (req, res) => {
//   try {
//     const newUser = new User(req.body);
//     const saveduser = await newUser.save();
//     res.status(201).json(saveduser);
//   } catch (error) {
//     res.status(500).json({ error: `Error occured`, error: error });
//   }
// });

// /*
//     {
//     "name": "Akhil",
//     "email": "akhil@example.com",
//     "password": "123456",
//     "address": [
//         {
//             "Permanent": "123 Main St",
//             "Correspondance": "Same as Permanent address"
//         }
//     ]
// }

//     */

// // add house to database
// app.post("/house", async (req, res) => {
//   try {
//     const newHouse = new House(req.body);
//     const savedHouse = await newHouse.save();
//     res.status(201).json(savedHouse);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });
// /*
//     {
//     "HouseId": "H1234",
//     "owner": "653b2e8fd7a7e3b8e8f7f234", // User ObjectID
//     "Pricing": "5000000",
//     "isVerified": false
// }

//     */

// app.get("/users", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     res.status(404).json({ error: error.message });
//   }
// });

// // get all houses

// app.get("/houses", async (req, res) => {
//   try {
//     const houses = await House.find().populate("Owner", "name,email");
//     res.json(houses);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // get single user by id
// app.get("/users/:id", async (req, res) => {
//   try {
//     const userId = await User.findById(req.params.id);
//     res.json(userId);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Listening to PORT: ${PORT}`);
// });

// // app.get('/',(req,res)=>{
// //     console.log('Received data',req.body);

// // })

// // app.post('/data',(req,res)=>{
// //     console.log(req.body);
// //     res.send(`Received data in json format: ${JSON.stringify(req.body)}`)
// //     console.log(`Received data: ${JSON.stringify(req.body)}`)

// // })

// // app.get('/data',(req,res)=>{
// //     res.send('This is a get request /data')
// // })

// // const users = [{
// //         name: "Akhil", age: 22
// //     },{
// //             name: "Verma", age: 22
// //         },{
// //                 name: "JohnDoe", age: 30
// //             },{
// //                     name: "Stark", age: 55
// //                 }]

// //                 app.get("/",(req,res)=>{
// //                         res.send(`Hello express`)
// //                     })

// //                     app.post("/users",(req,res)=>{
// //                             const {name, age} = req.body
// //                             console.log(req.body);

// //                             if(!name || !age){
// //                                     res.status(400).json({error: "Name or age cannot be null"})
// //                                 }

// //                                 res.status(200).json({message: "Name and age registered", user: {name,age}})
// //                             })

// //                             app.get("/users/:id",(req,res)=>{
// //                                     const userId = req.params.id
// //                                     console.log(req.params.id);
// //                                     console.log(req.params);
// //                                     console.log(req.body);

// //                                     if( userId<0 || userId>users.length){
// //                                             res.send(`UserId not found`)
// //                                         }
// //                                         const user = users[userId]
// //                                         res.status(200).json({user})
// //                                     })

// //                                     app.get("/users",(req,res)=>{
// //                                             res.status(200).json({users})
// //                                         })

// //                                         app.listen(PORT,()=>{
// //                                             console.log(`Server running on port: ${PORT}`);
// //                                         })
