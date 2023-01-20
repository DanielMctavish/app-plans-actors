import app from "./app";


app.listen(process.env.PORT,()=>{
    console.log('[server] online!',process.env.PORT);
})