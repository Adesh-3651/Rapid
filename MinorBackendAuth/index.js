const app=require("./app")
const {PORT}=process.env

app.listen(PORT,()=>{
    console.log(`app running on ${PORT}`);
})