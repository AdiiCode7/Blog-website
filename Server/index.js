// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const Login = require("./Signin");
// require("dotenv").config()

// const app = express();

// const PORT = process.env.PORT || 8080;

// const dbURI =
//   "mongodb+srv://buniversity4:Adeel123@cluster0.ojt714p.mongodb.net/QuillQuotient?retryWrites=true&w=majority";
// mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
//   .then(() => {
//     console.log("Connected to MongoDB");

//     app.listen(PORT,()=>
//     {
//         console.log("Server is Listening on Port 5000")
//     })
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//  app.get("/", (req,res)=>{
//     const signin = new Login
                                                

//     console.log("Data Transfer is Started Or React is Connected: !!!!!!")

//     res.redirect("/");
// })
// app.listen(PORT, ()=>{
//     console.log('Server is Connected on the Port Number: ${PORT}')
// })


// app.get("/submit" , (req,res)=>{
    
// })

//   app.post("/submit", (req,res)=>{
//     const user = new User;
    
//   })

//  app.get("/send",(req,res)=>{
//   res.json({message: "Hello From the Server !!!!!"})
//  })

// app.listen(8000,()=>
// {
// console.log("Server is Running on port 8000");
// })

const express = require ("express");
const mongoose = require("mongoose");
const cors = require("cors");
const SignUp = require("./Signin");

console.log("Hey Server!!!!")
const dbURI = "mongodb+srv://buniversity4:Adeel044@shariqadeel.6dniwds.mongodb.net/BlogsData?retryWrites=true&w=majority"; // Replace with your MongoDB URI
const app = express();
mongoose.connect(dbURI)
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => {
      console.log(`Server is listening on Port 5000`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS for all routes

// Define Mongoose schema for Login model
// Route to handle login
console.log("Hello go Down There")
app.post("/signup", async (req, res) => {
    try {
        console.log("Trying")
      const { username,email, password } = req.body;
      const newLogin = new SignUp({ username,email, password });
      await newLogin.save(); 
    //   res.json({ message: 'Login data saved successfully' });
    console.log("Saved")
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  console.log("Credentials Checking !!!!!")
  app.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Check if the user exists
      const user = await SignUp.findOne({ username, password });
      if (!user) {
        console.log("No User Found Sorry")
        return res.status(401).json({ error: 'Invalid credentials' });

      }
      console.log(" User Found :-> )")
      return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Optional: Define a route for the root ("/") if needed
// app.get("/", (req, res) => {
//   res.send("Welcome to the homepage!");
// });

