import express from 'express';
require('dotenv').config();
import cors from 'cors';
import initRouters from './src/routes';
import connectDatabase from './src/config/connectDababase';

const app = express();

// import { getNumberFromString } from './src/ultis/common';
// console.log(getNumberFromString('25.5 triệu/tháng'));
//url nay duoc phep truy cap lay data, va chi duoc su dung 4 method nay
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST","GET","PUT","DELETE"]
}))

//giúp có thể đọc giữ liệu được gửi lên từ client
app.use(express.json({limit : '10mb'}));

//giúp có thể đọc data dạng formdata dưới client gửi lên dưới dạng body  
app.use(express.urlencoded({extended:true,limit:'10mb'}));

initRouters(app);
connectDatabase();

const port = process .env.PORT || 8888;

const listener = app.listen(port,()=>{
    console.log(`Server is running on the port ${listener.address().port}`)
})




