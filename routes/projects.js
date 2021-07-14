import { Router } from 'express';
import * as controllers from '../controllers/projects.js'

const router = Router()

router.get('/projects', controllers.getProjects)

export default router;