class User {
  constructor() {
    this.users = [
      {
        id: '001',
        email: 'mhdsemps@gmail.com',
        first_name: 'muhammad',
        last_name: 'ssempala',
        password: 'password',
        address: 'kigali,Rwanda',
        is_admin: true
      },
      {
        id: '002',
        email: 'mhdsemps@gmail.com',
        first_name: 'mummad',
        last_name: 'smpala',
        password: 'passw212ord',
        address: 'kigali,Rwanda',
        is_admin: false
      }
    ];
  }

  checkUser(email, password) {
    const knownUser = this.users.find(user => user.email === email && user.password === password);
    return knownUser;
  }

  addUser(user) {
    console.log(user);
    this.users.push(user);
    return this.users;
  }
}

export default User;
