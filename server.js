import express from "express"
import "dotenv/config"
import connectdb from "./src/config/db.js"
import productRoutes from "./src/routes/product.routes.js";
const app=express()
const PORT=process.env.PORT
app.use(express.json());
app.use("/api/products", productRoutes);
connectdb()
app.listen(PORT,()=>{
    console.log("server run at this port")
})