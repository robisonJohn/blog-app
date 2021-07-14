import Project from '../models/project.js'

export const getProjects = async (req, res) => {
    try {
        const project = await Project.find()
        res.json(project)
    } catch (error) {
        res.status(500).send(error.message)
    }
}