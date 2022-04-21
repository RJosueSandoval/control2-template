import Router from 'koa-router'
import getHealth from './health/health'
import getToken from './token/token'
import getUser from './token/token'

const router = new Router()
require('dotenv').config()
router.get('/health', getHealth)
router.get('/getToken/:id/:secret/:key', getToken)
router.get('/getUser/:id', getUser)
export default router
