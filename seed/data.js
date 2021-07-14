import db from '../db/connection.js';
import Project from '../models/project.js';
import faker from 'faker';

const insertData = async () => {
    // reset database
    await db.dropDatabase()

        // create an array of 30 objects
        // use faker package to generate fake data
        const projects = [...Array(30)].map(item => {
            return {
                title: faker.lorem.sentence(),
                image_url: faker.internet.url(),
                description: faker.lorem.paragraph(),
            }

        })
        await Project.insertMany(projects)
        console.log('Created projects!')
    // close database connection. done.
    db.close()
}

insertData()