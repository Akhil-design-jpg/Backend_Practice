import mongoose from "mongoose";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";

mongoose
  .connect("mongodb://127.0.0.1:27017/testDB")
  .then(() =>
    console
      .log("mongodb connected")
    )
      .catch((err) => console.log("Error connecting to mongoDb",err))


      const userSchema = new mongoose.Schema({
        name: String,
        age: Number
      })

      userSchema.plugin(aggregatePaginate)

      const User = mongoose.model("User",userSchema)

      const seedUsers = async() =>{
        const users = [
            { name: "Alice", age: 25 },
            { name: "Bob", age: 30 },
            { name: "Charlie", age: 35 },
            { name: "David", age: 40 },
            { name: "Eva", age: 45 },
            { name: "Frank", age: 50 }
        ]
        await User.deleteMany()
        await User.insertMany(users)
        console.log('Sample users added');
        
    }


    const getUsersPaginated = async(page,limit) =>{
        const aggregateQuery = User.aggregate([
            {$match: {age: {$gte: 30}}}, // get only users where age >= 30
            {$sort: {age: 1}} // arrange users on ascending order 1 for ascending order, -1 for decending order
        ])

        const options = {page, limit}
        const result = await User.aggregatePaginate(aggregateQuery, options)
        console.log("Result",result);
        
    }

    (async()=>{
            await seedUsers()
            await getUsersPaginated(1,3)
    })