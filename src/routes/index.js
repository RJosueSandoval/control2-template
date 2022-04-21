import Router from 'koa-router'
import getHealth from './health/health'
//import getToken from './token/token'
//import getUser from './token/token'

const router = new Router()
const token = require('./token/token.js')
router.get('/health', getHealth)
router.get('/getToken/:id/:secret/:key', token.getToken)
router.get('/getUser/:id', token.getUser)
export default router
