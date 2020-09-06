import joiRouter from 'koa-joi-router'
import repository from './repository'

const router = joiRouter()

router.get('/api/content', async (ctx) => {
  ctx.body = await repository.content()
})

export default router
