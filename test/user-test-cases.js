var supertest = require("supertest");
var should = require("should");
const configData = require('../config/config');

// This agent refers to PORT where program is runninng.
var server = supertest.agent(configData.BASE_URL.baseurl); // pick dynamically from config

// UNIT test begin
describe("Wrapper API testing", function() {

  it("Should respond with a 200 with no query parameters", function() {

    server
    .get("/user/wrapper-api-call")
    .expect("Content-type",/json/)
    .expect(200)
    .then(async function(err,res) {
      expect(res.body.should.be.a('array'));
      // res.status.should.equal(200);
      console.log("Type of response ->>>>", (typeof res.body.data) == 'object');
    });
  });

  it("should return 404",function(done) {
    server
    .get("/random")
    .expect(404)
    .end(function(err,res){
      res.status.should.equal(404);
      done();
    });
  })
  
  it('Should respond 500 status code with error message', () => {
    server
      .get('/user/wrapper-api-call')
      .expect('Content-Type', /json/)
      .expect(500)
      .then(response => {
        expect(response.body).toEqual({ error: 'Internal server error' });
      });
  });

});