import { Router, application } from 'express'
import { getAllPerro } from '../controllers/perro.controller.js'

const router = Router ()

router.get('/api/perros', getAllPerro)


export default router 
