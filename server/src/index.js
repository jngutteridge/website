import koa from 'koa'
import accesslog from 'koa-accesslog'
import dotenv from 'dotenv'
import router from './router'

dotenv.config()

console.log('helllooo')
console.log(process.env.DATABASE_PASSWORD)

const app = new koa()
app.use(router.middleware())
app.use(accesslog())
app.listen(process.env.PORT)
