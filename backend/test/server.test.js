const { app } = require('../server');
const request = require('supertest')

describe("POST /registrants", () => {

    describe("given a new registrant form is complete", () => {
        test("should respond with a 200 status code", async () => {
            const response = await request(app).post('/registrants').send({
                firstName: "firstName",
                lastName: "lastName",
                phonNumber: "555-555-5555",
                age: "18",
                country: "Canada"

            })
            expect(response.statusCode).toBe(200)
        })
    })

    describe("when information is missing", () => {

    })
})