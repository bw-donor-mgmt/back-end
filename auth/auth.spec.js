const request = require('supertest'); 
const server = require('../server.js'); 

describe('Auth Endpoints', () => {
    describe('register endpoint', () => {
        it('should return 400 status code because of no object ', async () => {
   

            const response = await request(server).post('/auth/register').send({}); 

            expect(response.status).toBe(404); 

        });
    });
}); 