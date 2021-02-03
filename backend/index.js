const express=require('express');
const app=express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: "*"
  }));



  app.post("/login", async (req, res) => {
    const { userName, password } = req.body;
 
  
  });




app.listen(9999);
