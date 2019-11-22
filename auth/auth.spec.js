const request = require('supertest'); 
const server = require('../server.js'); 

describe('Auth Endpoints', () => {
    describe('register endpoint', () => {
        it('should return 404 status code because of no object ', async () => {
   

            const response = await request(server).post('/auth/register').send({}); 

            expect(response.status).toBe(400); 

        });

        it('should return return a response', async () => {
            
            const response = await request(server).post('/auth/login').send({username : "user1", password : "pass1"}); 

            expect(response.type).toEqual('text/html') 
        })
    });

    describe('Campaigns endpoint', () => {
        it('should return 404 when all required fields are not provided', async () => {

            const res = await request(server).post('/campaigns').send({name: "hello world"});

            expect(res.status).toBe(404)
        })
    


})}); 