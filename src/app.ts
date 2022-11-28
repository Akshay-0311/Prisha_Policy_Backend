import express from 'express';
import indexRouter from "./routes/index";

const app = express();

const PORT = 3001;

app.use("/",indexRouter);

app.listen(PORT, ()=> {
    console.log(`App Listening at port ${PORT}`);
})