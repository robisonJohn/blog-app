import request from 'supertest'
import app from '../app.js'
import mongoose from 'mongoose'
import Project from '../models/project.js'
import faker from 'faker'

beforeAll(async () => {
    
    // create a test database url
    const MONGODB_TEST_URI = `mongodb://127.0.0.1/projectsTestDatabase`
    
    // close the existing connection to the database so we can connect to the test database
    await mongoose.connection.close()
    
    // connect to the test database
    await mongoose.connect(MONGODB_TEST_URI, { useUnifiedTopology: true, useNewUrlParser: true })
    
    // create an array of 100 objects
    const projects = [...Array(100)].map(item => {
        return {
            title: faker.lorem.sentence(),
            image_url: faker.internet.url(),
            description: faker.lorem.paragraph(),
            github_url: faker.internet.url(),
            deployed_url: faker.internet.url()
        }
    })
    await Project.insertMany(projects)
    console.log('Created projects!')
})

// this variable will be used later in our tests
let projectId

// projects api tests
describe('Test the express routes for projects', () => {
    // test the GET express route for the '/api/projects' path
    it('should show all projects', async () => {
        const res = await request(app).get(`/api/projects`)
        // test that the status code is 200 - successful
        expect(res.statusCode).toEqual(200)
        // test that the response object has an _id property
        expect(res.body[0]).toHaveProperty('_id')
        // Save the _id value for later use with other tests
        projectId = res.body[0]._id
    })
})

afterAll(async () => {
    // after all tests are complete delete the test database
    await mongoose.connection.db.dropDatabase()
    // close the database connection
    await mongoose.connection.close()
})