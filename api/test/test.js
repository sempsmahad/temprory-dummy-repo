import chai from 'chai';
import chatHttp from 'chai-http';
import 'chai/register-should';
import app from '../index';

chai.use(chatHttp);
const { expect } = chai;

describe('testing all post requests', () => {
  it('It should create add new user to user list ', (done) => {
    const user = {
      id: 2,
      email: 'mhdmps@gmail.com',
      first_name: 'Muhammad',
      last_name: 'semps',
      password: '123456',
      address: 'kampala',
      is_admin: 'True'
    };
    chai
      .request(app)
      .post('/api/v1/auth/signin')
      .set('Accept', 'application/json')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.data).to.include({
          id: 2,
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
          password: user.password,
          address: user.address,
          is_admin: user.is_admin
        });
        done();
      });
  });
  it('It should create add new user to user list ', (done) => {
    const user = {
      id: 2,
      email: 'mhdmps@gmail.com',
      first_name: 'Muhammad',
      last_name: 'semps',
      password: '123456',
      address: 'kampala',
      is_admin: 'True'
    };
    chai
      .request(app)
      .post('/api/v1/users')
      .set('Accept', 'application/json')
      .send(user)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.data).to.include({
          id: 2,
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
          password: user.password,
          address: user.address,
          is_admin: user.is_admin
        });
        done();
      });
  });
});
