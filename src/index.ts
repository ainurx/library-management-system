import express, { Express, Request, Response} from 'express'
import 'dotenv/config'

const app: Express = express()

app.get('/', (req: Request, res: Response)=>{
    res.send('<h3>Express TS</h3>')
})

app.listen(process.env.PORT, ()=> {
    console.log(`TS server is running on ...${process.env.PORT}`)
})