import express, { Express, Request, Response} from 'express'
require('dotenv').config()
const app: Express = express()

app.get('/', (req: Request, res: Response)=>{
    res.send('<h3>Express TS</h3>')
})

app.listen(process.env.PORT, ()=> {
    console.log("TS server is running ...")
})